"use strict";
// Importa el modelo de datos 'Role'
import Role from "../models/role.model.js";
// Importa el modelo de datos 'User'
import User from "../models/user.model.js";

/**
 * Crea los roles por defecto en la base de datos.
 * @async
 * @function createRoles
 * @returns {Promise<void>}
 */
export async function createRoles() {
  try {
    // Busca todos los roles en la base de datos
    const count = await Role.estimatedDocumentCount();
    // Si no hay roles en la base de datos los crea
    if (count > 0) return;

    await Promise.all([
      new Role({ name: "usuario" }).save(),
      new Role({ name: "entrenador" }).save(),
      new Role({ name: "administrador" }).save(),
      new Role({ name: "encargado" }).save(),
    ]);
    console.log("* => Roles creados exitosamente");
  } catch (error) {
    console.log("Error en initSetup.js -> createRoles(): ", error);
  }
}

/**
 * Crea los usuarios por defecto en la base de datos.
 * @async
 * @function createUsers
 * @returns {Promise<void>}
 */
export async function createUsers() {
  try {
    // Busca todos los usuarios en la base de datos
    const count = await User.estimatedDocumentCount();
    // Si no hay usuarios en la base de datos los crea
    if (count > 0) return;

    const admin = await Role.findOne({ name: "administrador" });
    const user = await Role.findOne({ name: "usuario" });
    const trainer = await Role.findOne({ name: "entrenador" });
    const encargado = await Role.findOne({ name: "encargado" });

    await Promise.all([
      new User({
        username: "Nombre Usuario",
        email: "user@gmail.com",
        rut: "12345678-9",
        password: await User.encryptPassword("user123"),
        roles: user._id,
      }).save(),
      new User({
        username: "Nombre Administrador",
        email: "admin@gmail.com",
        rut: "12345678-0",
        password: await User.encryptPassword("admin123"),
        roles: admin._id,
      }).save(),
      new User({
        username: "Nombre Entrenador",
        email: "trainer@gmail.com",
        rut: "12345678-2",
        password: await User.encryptPassword("trainer123"),
        roles: trainer._id,
      }).save(),
      new User({
        username: "Nombre Encargado",
        email: "encargado@gmail.com",
        rut: "12345678-1",
        password: await User.encryptPassword("encargado123"),
        roles: encargado._id,
      }).save(),
    ]);
    console.log("* => Usuarios creados exitosamente");
  } catch (error) {
    console.log("Error en initSetup.js -> createUsers(): ", error);
  }
}
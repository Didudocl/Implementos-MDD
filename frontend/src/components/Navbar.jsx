import { NavLink, useLocation } from "react-router-dom";
import { logout } from '../services/auth.service.js';

const Navbar = () => {
    const location = useLocation();
    
    const storedUser = JSON.parse(sessionStorage.getItem('usuario'));
    const userRole = storedUser?.data?.rolName;


    const logoutSubmit = () => {
        try {
            logout();
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <img
                        src="/cohete.png"
                        alt="Logo metodología de desarrollo"
                    />
                </li>
                <li className={location.pathname === "/inicio" ? "active" : ""}>
                    <NavLink to="/home">Inicio</NavLink>
                </li>
                {userRole === 'administrador' && (
                    <li className={location.pathname === "/usuarios" ? "active" : ""}>
                        <NavLink to="/users">Usuarios</NavLink>
                    </li>
                )}
                {(userRole === 'administrador' || userRole === 'encargado') && (
                    <li className={location.pathname === "/crear-implemento" ? "active" : ""}>
                        <NavLink to="/crear-implemento">Implemento</NavLink>
                    </li>
                )}
                <li className={location.pathname === "/obtener-implementos" ? "active" : ""}>
                    <NavLink to="/obtener-implementos">Obtener implementos</NavLink>
                </li>
                <li className={location.pathname === "/perfil" ? "active" : ""}>
                    <NavLink to="/profile">Perfil</NavLink>
                </li>
                <li 
                className={location.pathname === "/" ? "active" : ""}>
                    <NavLink to='/' onClick={logoutSubmit}>Cerrar</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

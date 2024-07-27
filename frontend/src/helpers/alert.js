import Swal from "sweetalert2";

export const showSuccessAlert = () => {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Inscripción enviada!",
        showConfirmButton: false,
        timer: 1500,
      });
}

export const showErrorAlert = () => {
    Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Error al enviar la inscripción!",
        showConfirmButton: false,
        timer: 1500,
      });
}
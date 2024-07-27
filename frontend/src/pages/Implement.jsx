import { useNavigate } from 'react-router-dom';
import Form from '../components/Form';
import NavBar from '../components/Navbar';
import { createImplement } from '../services/implement.service.js'; 
import '../styles/implements.css';
// Comentario
function CreateImplement() {

    const navigate = useNavigate();
    const implementSubmit = async (data) => {
        try {
            const response = await createImplement(data);
            if (response && response.status === 201) {
                setTimeout(() => {
                    navigate('/home');
                }, 1700);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <>
            <NavBar/>
            <div className='form-container' id='1'>
                <Form
                    title={"Crear un implemento"}
                    fields={[
                        {
                            label: "Nombre del implemento",
                            name: "name",
                            placeholder: "pelota futbol",
                            type: "text",
                            required: true,
                        },
                        {
                            label: "Descripción",
                            name: "description",
                            placeholder: "Necesito ...",
                            type: "text-area",
                            required: true,
                        },
                        {
                            label: "Cantidad de implementos",
                            name: "stock",
                            placeholder: "Ej: 4, 5, 6...",
                            type: "number",
                            required: true,
                        },
                        {
                            label: "Categoría del implemento",
                            name: "category",
                            type: "select",
                            required: true,
                            options: [
                                { value: '', label: 'Selecciona una opción' },
                                { value: 'futbol', label: 'Futbol' },
                                { value: 'basquetbol', label: 'Basquetbol' },
                                { value: 'tenis', label: 'Tenis' },
                                { value: 'otros', label: 'Otros' },
                            ],
                        }
                    ]}
                    buttonText={"Crear implemento"}
                    onSubmit={implementSubmit}
                />
            </div>
        </>
    )
}

export default CreateImplement;
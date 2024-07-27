import axios from './root.service.js';
import { showSuccessAlert, showErrorAlert } from '../helpers/alert.js';

export async function createImplement(data) {
    try {
        const response = await axios.post('/implement/create', data);
        const { status } = response;

        if(status === 201) {
            showSuccessAlert();
        } else {
            showErrorAlert();
        }
        return response;
    } catch (error) {
        console.error(error);
    }
}

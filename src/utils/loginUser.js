import axios from 'axios';
import { localHost } from './helpers';

export const loginUser = async (userName, password) => {
  try {
    const response = await axios.get(`${localHost}/users?userName=${userName}&password=${password}`);
    if (response.data.length) {
      return response.data[0];
    } else {
      throw new Error("Credenciales incorrectas");
    }
  } catch (error) {
    throw error;
  }
};
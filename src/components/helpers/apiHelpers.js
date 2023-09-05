// src/helpers/apiHelpers.js
import axios from '../services/api';

export async function handleMakePostRequest(data) {
  try {
    const response = await axios.post('/PaymentInitiation', data);
    const responseData = response.data;
    return responseData; // Adjust the response data property
  } catch (error) {
    console.error('Error making POST request:', error);
    return null;
  }
}

export async function handleMakeForeignPostRequest(data) {
    try {
      const response = await axios.post('/PaymentInitiationForeign', data);
      const responseData = response.data;
      return responseData; // Adjust the response data property
    } catch (error) {
      console.error('Error making POST request:', error);
      return null;
    }
  }

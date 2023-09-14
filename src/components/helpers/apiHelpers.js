// src/helpers/apiHelpers.js
import axios from '../services/api';

export async function handleMakePostRequest(data, onSuccess, setLoad) {
  try {
    const response = await axios.post('/PaymentInitiation', data);
    const responseData = response.data;
    if (responseData) {
      onSuccess(responseData);
    }
  } catch (error) {
    console.error('Error making POST request:', error);
    setLoad();
    return null;
  }
}

export async function handleMakeForeignPostRequest(data, onSuccess, setLoad) {
  try {
    const response = await axios.post('/PaymentInitiationForeign', data);
    const responseData = response.data;
    if (responseData) {
      onSuccess(responseData);
    }
  } catch (error) {
    console.error('Error making POST request:', error);
    setLoad();
    return null;
  }
}

export async function handleMakeBulkPostRequest(data, onSuccess, setLoad) {
  try {
    const response = await axios.post('/BulkPaymentInitiation', data);
    const responseData = response.data;

    if (responseData) {
      onSuccess(responseData);
    }
  } catch (error) {
    console.error('Error making POST request:', error);
    setLoad();
    return null;
  }
}

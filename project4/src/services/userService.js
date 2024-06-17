// userService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/user';

export const getData = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const addCard = async (newUser) => {
  try {
    const response = await axios.post(BASE_URL, newUser);
    return response.data;
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
};

export const updateCard = async (id, updateCard) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, updateCard);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

export const deleteCard = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};

// src/utils/api.js

const BASE_URL = 'http://localhost:5000';

// Function to log in a user
export const loginUser = async (data) => {
  try {
    const apiUrl = `${BASE_URL}/api/auth/login`;
    console.log('Login API URL:', apiUrl);  // Debug line to check URL
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

// Function to register a new user
export const registerUser = async (data) => {
  try {
    const apiUrl = `${BASE_URL}/api/auth/register`;
    console.log('Register API URL:', apiUrl);  // Debug line to check URL
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

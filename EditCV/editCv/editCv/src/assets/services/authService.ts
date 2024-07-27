import axios from 'axios';

export interface AuthResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
  refreshToken: string;
}

export const authenticate = async (username: string, password: string): Promise<AuthResponse | null> => {
  try {
    const response = await axios.post<AuthResponse>('https://dummyjson.com/auth/login', {
      username: username,
      password: password,
    }, {
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.data.token) {
      localStorage.setItem('authToken', response.data.token);
    }
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Authentication error:', error.response?.data);
    } else {
      console.error('Unexpected error:', error);
    }
    return null;
  }
    
    // try {
    //   const response = await axios.post<AuthResponse>('/api/auth/login', { username, password });
    //   return response.data;
    // } catch (error) {
    //   console.error('Authentication error:', error);
    //   return null;
    // }
  };
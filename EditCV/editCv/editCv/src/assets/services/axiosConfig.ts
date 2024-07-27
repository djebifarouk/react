// src/axiosConfig.ts
import axios from 'axios';

// Créez une instance d'Axios
const axiosInstance = axios.create({
  baseURL: 'https://dummyjson.com', // Remplacez par l'URL de votre API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Ajoutez un intercepteur de requêtes
axiosInstance.interceptors.request.use(
  (config) => {
    // Récupérez le token depuis le stockage local ou un autre endroit sécurisé
    const token = localStorage.getItem('authToken');

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Ajoutez un intercepteur de réponses (facultatif)
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Gérez les erreurs globalement
    if (error.response && error.response.status === 401) {
      // Redirection ou autre action en cas d'erreur d'authentification
      console.error('Unauthorized access - perhaps redirect to login?');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

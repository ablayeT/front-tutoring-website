import axios from 'axios';

const api = axios.create();

api.defaults.baseURL =
  process.env.REACT_APP_BASE_URL + process.env.REACT_APP_API_URL;

api.interceptors.request.use(
  (config) => {
    console.log(api.interceptors.request);
    const token = localStorage.getItem('token');

    console.log(token);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Pour les réponse entrantes

// instance.interceptors.response.use(
//   (response) => {
//     console.log('Réponse reçue :', response.data);

//     // Enregistrez le userType,userId et le token dans le localStorage
//     // localStorage.setItem('userType', response.data.userType);
//     // localStorage.setItem('userId', response.data.userId);
//     // localStorage.setItem('token', response.data.token);

//     return response;
//   },
//   (error) => {
//     // déconnexion en cas d'erreur 401
//     if (error.response && error.response.status === 401) {
//       // Déconnecter l'utilisateur et rediriger vers la page de connexion
//       localStorage.removeItem('token');
//       window.location.replace('/auth');
//     }
//     return Promise.reject(error);
//   },
// );

export default api;

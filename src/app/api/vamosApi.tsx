import axios from "axios";

// Puedes usar rutas relativas para evitar problemas de CORS en producción
// const baseURL = 'http://localhost:3000/api';
const baseURL = 'https://vamos-miguel-angel.vercel.app/api';
// Crear una instancia de Axios con la URL base configurada
const vamosApi = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Si necesitas un token de autenticación
vamosApi.interceptors.request.use(
    async (config) => {
        // Aquí puedes obtener el token de almacenamiento local si es necesario
        // const token = await AsyncStorage.getItem('token');
        const token = null; // Placeholder si no usas AsyncStorage

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default vamosApi;

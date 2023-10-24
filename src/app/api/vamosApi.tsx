import axios from "axios";
//import AsyncStorage from '@react-native-async-storage/async-storage';



// const baseURL = 'http://192.168.0.3:8000/api';
const baseURL = 'http://localhost:3000/api';
// const baseURL = 'http://localhost:8000/api';

const vamosApi = axios.create({ baseURL })

// cafeApi.interceptors.request.use(
//     async (config: any) => {
//         const token = await AsyncStorage.getItem('token');

//         if (token) {
//             config.headers['x-token'] = token
//         }

//         return config;
//     }
// );

export default vamosApi;

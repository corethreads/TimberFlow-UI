import axios, { AxiosError, type InternalAxiosRequestConfig } from 'axios';
import { type LoginRequestDTO, type RegisterRequestDTO, type AuthResponseDTO } from '../services/authentication/types/auth';

const BaseURL = import.meta.env.API_URL ?? "http://localhost:8080/";

//create axios configuration 
export const apiClient = axios.create({
  baseURL: BaseURL,
  headers: { "Content-Type": "application/json" },
  timeout: 10_000,

});

//Request interceptor;
apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


//Response interceptor;
apiClient.interceptors.response.use(
  (res) => res,
  (err: AxiosError) => {
    if (err.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);


export const apiEndpoints = {




  //register: async (request: RegisterRequestDTO): Promise<AuthResponseDTO> => {
  //const { data } = await apiClient.post<AuthResponseDTO>("/auth/register", request);
  //return data;

  register: async (request: RegisterRequestDTO): Promise<AuthResponseDTO> => {
    const { data } = await apiClient.post<AuthResponseDTO>("/api/v1/register", request);
    return data;
  },
  login: async (request: LoginRequestDTO): Promise<AuthResponseDTO> => {
    const { data } = await apiClient.post<AuthResponseDTO>("/api/v1/login", request);
    return data;
  }




}

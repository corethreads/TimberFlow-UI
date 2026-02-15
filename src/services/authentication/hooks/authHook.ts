import { useNavigate } from 'react-router-dom';
import type { RegisterRequestDTO, LoginRequestDTO } from '../types/auth';
import { useAuthStore, useUser, useIsAuthenticated } from "../provider/authProvider"

export const useAuth = () => {
  const navigate = useNavigate();
  const { login, register, isLoading, error, clearError } = useAuthStore();
  const user = useUser();
  const isAuthenticated = useIsAuthenticated();


  const handleLogin = async (request: LoginRequestDTO) => {
    await login(request);
    navigate("/dashboard");
  }

  const handleRegister = async (request: RegisterRequestDTO) => {
    await register(request);
    navigate("/dashboard");
  }

  return {
    user,
    isAuthenticated,
    login: handleLogin,
    register: handleRegister,
    error,
    isLoading,
    clearError
  }
}

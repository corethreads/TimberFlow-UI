import type { LoginRequestDTO, RegisterRequestDTO, User } from "./auth";


export interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;

  login: (payload: LoginRequestDTO) => Promise<void>;
  register: (payload: RegisterRequestDTO) => Promise<void>;
  clearError: () => Promise<void>;
}

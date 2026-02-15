import { create } from 'zustand';
import { persist } from "zustand/middleware";
import { type AuthState } from '../types/state';
import type { LoginRequestDTO, RegisterRequestDTO } from '../types/auth';
import { apiEndpoints } from '../../../api/api';



export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isLoading: false,
      error: null,

      login: async (payload) => {
        set({ isLoading: true, error: null });
        try {
          const { user, token } = await apiEndpoints.login(payload);
          localStorage.setItem("token", token);
          set({ user, token, isLoading: false });
        } catch (err: unknown) {
          const message =
            (err as { response?: { data?: { message?: string } } })?.response?.data?.message ??
            "Login failed. Please check your credentials.";
          set({ error: message, isLoading: false });
          throw err;
        }
      },

      register: async (payload) => {
        set({ isLoading: true, error: null });
        try {
          const { user, token } = await apiEndpoints.register(payload);
          localStorage.setItem("token", token);
          set({ user, token, isLoading: false });
        } catch (err: unknown) {
          const message =
            (err as { response?: { data?: { message?: string } } })?.response?.data?.message ??
            "Registration failed. Please try again.";
          set({ error: message, isLoading: false });
          throw err;
        }
      },



      clearError: () => set({ error: null }),

      hydrateFromStorage: () => {
        // zustand/persist handles this — exposed if you need manual trigger
        const token = localStorage.getItem("token");
        if (!token) {
          set({ user: null, token: null });
        }
      },
    }),
    {
      name: "auth-storage",
      // Only persist user + token, not loading/error state
      partialize: (state) => ({ user: state.user, token: state.token }),
    }
  )
);

// Convenience selector hooks
export const useUser = () => useAuthStore((s) => s.user);
export const useIsAuthenticated = () => useAuthStore((s) => !!s.token);
export const useAuthLoading = () => useAuthStore((s) => s.isLoading);
export const useAuthError = () => useAuthStore((s) => s.error);

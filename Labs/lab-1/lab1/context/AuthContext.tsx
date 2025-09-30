"use client";

import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from "react";
import { useRouter } from "next/navigation";

type AuthContextType = {
  isAuthenticated: boolean;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
};

const AuthContextInstance = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (newToken: string) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setIsAuthenticated(false);
    router.push("/login");
  };

  return (
    <AuthContextInstance.Provider
      value={{ isAuthenticated, token, login, logout }}
    >
      {children}
    </AuthContextInstance.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContextInstance);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

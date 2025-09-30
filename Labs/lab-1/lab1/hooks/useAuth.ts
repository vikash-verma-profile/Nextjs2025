"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useAuth() {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsAuthenticated(!!token);
    }, [])

    const login = (token: string) => {
        localStorage.setItem("token", token);
        setIsAuthenticated(true);
    }

    const logout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        router.push("/login");
    }

    return { isAuthenticated, login, logout }
}
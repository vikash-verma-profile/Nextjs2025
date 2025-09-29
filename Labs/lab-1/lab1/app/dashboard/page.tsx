"use client";

import { FormEvent, useEffect, useState } from "react";
import jwt from "jsonwebtoken";

const JWT_SECRET = "supersecretkey";

export default function DashboardPage() {
    const [isAuthenicated, setIsAuthenicated] = useState<boolean>(false);
    const [email, setEmail] = useState("");


    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!token) {
            setIsAuthenicated(false);
            return;
        }
        try {
            const decoded = jwt.decode(token) as { email: string } ;
            setEmail(decoded.email);
            setIsAuthenicated(true);
        }
        catch (err) {
            console.error("Invalid token", err);
            setIsAuthenicated(false);
        }
    },[]);

    if (!isAuthenicated) {
        return (
            <div style={{ maxWidth: 400, margin: "2rem auto" }}>

                <h1>Access Denied</h1>
                <p>You must be logged in to view this page</p>
            </div>

        );
    }
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Dashboard</h2>
            <p>Welcome, {email}!</p>
            <button className="btn btn-success" onClick={() => {
                localStorage.removeItem("token");

                window.location.href = "/login";
            }}>Logout</button>

        </div>
    );
}

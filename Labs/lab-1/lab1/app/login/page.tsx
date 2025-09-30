"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string>("");
  const router = useRouter();
  const { login } = useAuth();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    setMessage(data.message || data.error);

    if (data.token) {
      localStorage.setItem("token", data.token);
      login(data.token);
    }
    router.push("/dashboard");
  }
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Login</h2>
      <form className="mx-auto" style={{ maxWidth: "400px" }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="text"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            value={password}
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">
          Login
        </button>
      </form>
    </div>
  );
}

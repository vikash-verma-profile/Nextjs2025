"use client";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Login</h2>
      <form className="mx-auto" style={{ maxWidth: "400px" }}>
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

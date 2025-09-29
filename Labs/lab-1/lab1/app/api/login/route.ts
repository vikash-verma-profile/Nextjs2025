import { addUser, findUserByEmail, findUserByEmailAndPass } from "@/lib/db";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

interface LoginRequest {
    email: string;
    password: string;
}

const JWT_SECRET = "supersecretkey";

export async function POST(req: Request) {
    const { email, password }: LoginRequest = await req.json();
    const user = findUserByEmailAndPass(email, password);
    if (!user) {
        return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: "1h" });
    return NextResponse.json({ message: "Login successful", token });
}
import { addUser, findUserByEmail } from "@/lib/db";
import { NextResponse } from "next/server";


interface RegisterRequest {
    email: string;
    password: string;
}

export async function POST(req: Request) {
    const { email, password }: RegisterRequest = await req.json();
    if (!email || !password) {
        return NextResponse.json({ error: "Email and password required" }, { status: 400 });
    }
    if (findUserByEmail(email)) {
        return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    addUser({ email, password });

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
}
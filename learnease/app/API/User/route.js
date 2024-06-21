import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const db = new PrismaClient();
export async function GET(req) {

    const users = await db.User.findFirst();
        return NextResponse.json(users);

}

export async function POST(req) {
    try {
      const body = await req.json();
      const { name, email, password } = body;
      const user = await db.user.create({
        data: {
          name,
          email,
          password,
        },
      });
  
      return new Response(JSON.stringify({ message: 'User added successfully!' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  }
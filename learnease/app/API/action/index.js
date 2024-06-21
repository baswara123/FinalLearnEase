"use server"
import { PrismaClient } from "@prisma/client";


const db = new PrismaClient();

export async function adduser(formData) {
    const name = formData.get('username')
    const email = formData.get('email')
    const password = formData.get('password')
    try {
        await db.user.create({
            data: {
                name: name,
                email: email,
                password: password,
            },
        });
        return { success: true };

    } catch (error) {
        console.error(error);
        return { success: false, error: error.message };
    }
}

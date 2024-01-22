import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma';
import bcrypt from 'bcryptjs'

export async function GET() {
    const user = await prisma.user.findMany()
    return NextResponse.json(user)
}
export async function POST(request: Request) {
    const data = await request.json()
    const { email, password, name } = data
    if (!password || password.length < 6) return NextResponse.json({
        message: "Password must be at least 6 characters long"
    }, { status: 400 });

    if (!email || !email.includes("@")) return NextResponse.json({
        message: "Email must be valid"
    }, { status: 400 });
    if (!name || name.length < 3) return NextResponse.json({
        message: "Name must be at least 3 characters long"
    }, { status: 400 });


    try {
        const userFind = await prisma.user.findUnique({
            where: { email }
        })
        if (userFind) return NextResponse.json({
            message: "Error"
        }, { status: 400 });

        return NextResponse.json({
            message: "Register disabled"
        }, { status: 400 });

        const hashedPassword = await bcrypt.hash(password, 12)
        data.password = hashedPassword
        const user = await prisma.user.create({ data })



        return NextResponse.json({
            id: user.id,
            name: user.name,
            email: user.email
        })

    } catch (error) {
        if (error instanceof Error) {

            return NextResponse.json({
                message: error.message
            }, { status: 400 });
        }
    }
}
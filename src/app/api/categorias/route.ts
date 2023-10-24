import { IUser } from '@/interface/user'
import { prisma } from '@/libs/prisma'
import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
    const categorias = await prisma.category.findMany()
    return NextResponse.json(categorias)
}

export async function POST(req: NextRequest) {
    const token = await getToken({ req })
    if (!token) {
        return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }
    const userToken = token.user as IUser

    if (userToken.role !== 'Admin') {
        return NextResponse.json({ message: 'Usuario no autorizado' }, { status: 401 })
    }
    const data = await req.json()


    try {
        const categoriaExistente = await prisma.category.findFirst({
            where: {
                name: data.name
            }
        })
        if (categoriaExistente) {
            return NextResponse.json({
                message: "La categoría ya existe"
            }, { status: 400 });
        }
        const categoria = await prisma.category.create({ data })
        return NextResponse.json(categoria)

    } catch (error) {
        console.log(error)
    }
}
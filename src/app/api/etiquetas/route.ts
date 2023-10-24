import { IUser } from '@/interface/user'
import { prisma } from '@/libs/prisma'
import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
    const etiquetas = await prisma.tag.findMany()


    return NextResponse.json(etiquetas)
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

    try {
        const data = await req.json()
        const categoriaExistente = await prisma.tag.findFirst({
            where: {
                name: data.name
            }
        })

        if (categoriaExistente) {
            return NextResponse.json({
                message: "La Etiqueta ya existe"
            }, { status: 400 });
        }



        const etiqueta = await prisma.tag.create({ data })
        return NextResponse.json(etiqueta)

    } catch (error) {
        console.log(error)
    }
}
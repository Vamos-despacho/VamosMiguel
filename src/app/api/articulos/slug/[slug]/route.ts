import { IUser } from "@/interface/user";
import { prisma } from "@/libs/prisma";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
interface Params {
    params: { slug: string }
}
export async function GET(request: Request, { params }: Params) {
    try {
        const { slug } = params;
        const articulo = await prisma.post.findFirst({
            where: {
                slug: slug
            },
            include: {
                category: true,
                tags: true,
            },
        })

        if (!articulo) return NextResponse.json({
            message: "Articulo no encontrado"
        }, { status: 200 });

        return NextResponse.json(articulo)
    } catch (error) {
        if (error instanceof Error) {

            return NextResponse.json({
                message: error.message
            }, { status: 400 });
        }
    }
}
export async function PUT(req: NextRequest, { params }: Params) {
    const token = await getToken({ req })

    if (!token) {
        return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }
    const userToken = token.user as IUser

    if (userToken.role !== 'Admin') {
        return NextResponse.json({ message: 'Usuario no autorizado' }, { status: 401 })
    }


    try {
        const { slug } = params;
        const data = await req.json()
        const articulo = await prisma.post.update({
            where: {
                slug: slug
            },
            data
        })

        if (!articulo) return NextResponse.json({
            message: "Articulo no encontrado"
        }, { status: 404 });

        return NextResponse.json(articulo)
    } catch (error) {
        if (error instanceof Error) {

            return NextResponse.json({
                message: error.message
            }, { status: 400 });
        }
    }
}
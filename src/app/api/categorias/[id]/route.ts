import { IUser } from "@/interface/user";
import { prisma } from "@/libs/prisma";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
interface Params {
    params: { id: number }
}

export async function DELETE(req: NextRequest, { params }: Params) {

    const token = await getToken({ req })
    if (!token) {
        return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    }
    const userToken = token.user as IUser

    if (userToken.role !== 'Admin') {
        return NextResponse.json({ message: 'Usuario no autorizado' }, { status: 401 })
    }

    try {
        const { id } = params;


        const categoriasConPublicaciones = await prisma.category.findMany({
            where: {
                id: Number(id),
                posts: {
                    some: {} // Verificar si existen publicaciones relacionadas
                }
            }
        });
        if (categoriasConPublicaciones.length > 0) {
            return NextResponse.json({
                message: "No se puede eliminar la Categoría porque tiene publicaciones relacionadas"
            }, { status: 400 });
        }


        const categoria = await prisma.category.delete({
            where: {
                id: Number(id)
            }
        })
        if (!categoria) return NextResponse.json({
            message: "Categoría no encontrado"
        }, { status: 404 });

        return NextResponse.json({ message: 'Categoría eliminada' })
    } catch (error) {
        if (error instanceof Error) {

            return NextResponse.json({
                message: error.message
            }, { status: 400 });
        }
    }
}
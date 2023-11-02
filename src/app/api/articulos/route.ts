import { prisma } from '@/libs/prisma'
import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from "next-auth/next"
import { getToken } from "next-auth/jwt"
import { IUser } from '@/interface/user'

export async function GET(req: NextRequest) {


    try {
        // Obtén el número de página de la solicitud
        const query = new URL(req.url).searchParams;
        const page = parseInt(query.get('page') || '1');
        const from = query.get('from') || 'home';

        // Configura el tamaño de página y la cantidad de elementos a omitir
        const pageSize = 6;
        const skip = (page - 1) * pageSize;
        const where = from === "admin" ? {} : { published: true }
        // Realiza una consulta a la base de datos para obtener los artículos de la página actual
        const totalArticles = await prisma.post.count({
            where: where,
        });
        console.log(totalArticles)
        const articles = await prisma.post.findMany({
            where: where,

            include: {
                category: true,
                tags: true,
            },
            skip,
            take: pageSize,
            orderBy: {
                createdAt: "desc", // Ordenar por fecha de creación en orden descendente (las más recientes primero)
            },
        });

        if (!articles) return NextResponse.json({ message: "No hay articulos" })
        // Retorna los artículos como respuesta JSON
        return new Response(JSON.stringify({ articles, totalArticles }), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return new Response('Error interno del servidor', { status: 500 });
    }
}


// export async function GET() {
//     const articles = await prisma.post.findMany({
//         include: {
//             category: true, // Incluir la información de la categoría
//         },
//     });
//     return NextResponse.json(articles)
// }

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
        if (!data.categoryId) return NextResponse.json({
            message: "Category is required"
        }, { status: 400 });


        const article = await prisma.post.create({ data })
        return NextResponse.json(article)

    } catch (error) {
        if (error instanceof Error) {

            return NextResponse.json({
                message: error.message
            }, { status: 400 });
        }
    }

}
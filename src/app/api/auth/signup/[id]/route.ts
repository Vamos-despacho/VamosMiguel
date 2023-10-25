import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma';
interface Params {
    params: { id: string }
}
export function GET(request: Request, { params }: Params) {
    return NextResponse.json('Obteniendo usuario' + params.id)
}
export async function PUT(request: Request, { params }: Params) {

    const data = await request.json()
    if (data.password !== "PanamaVamos1986") return NextResponse.json({ message: '---' })
    const { id } = params;

    const user = await prisma.user.update({
        where: { id: Number(id) },
        data: { role: data.role },
    })

    return NextResponse.json('Actualizando usuario' + user)
}
export function DELETE(request: Request, { params }: Params) {
    return NextResponse.json('ELIMINANDO usuario' + params.id)
}
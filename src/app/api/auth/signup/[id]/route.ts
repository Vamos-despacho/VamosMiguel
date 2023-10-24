import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma';
interface Params {
    params: { id: string }
}
export function GET(request: Request, { params }: Params) {
    return NextResponse.json('Obteniendo usuario' + params.id)
}
export function PUT(request: Request, { params }: Params) {
    return NextResponse.json('Actualizando usuario' + params.id)
}
export function DELETE(request: Request, { params }: Params) {
    return NextResponse.json('ELIMINANDO usuario' + params.id)
}
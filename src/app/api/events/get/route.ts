'use server';

import connectDB from '@/lib/mongodb';
import { Event } from '@/models/Events';
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';



export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const month = searchParams.get('month');
    const year = searchParams.get('year');
    console.log(month, year)
    if (!month || !year) {
        return new NextResponse(JSON.stringify({ error: 'Month and year are required' }), { status: 400 });
    }

    try {
        // Conéctate a la base de datos
        await connectDB();

        const monthInt = parseInt(month);
        const yearInt = parseInt(year);

        // Calcular la fecha de inicio (6 días antes del primer día del mes)
        const startOfMonth = new Date(yearInt, monthInt - 1, 1);
        const startDate = new Date(startOfMonth);
        startDate.setDate(startDate.getDate() - 6);

        // Calcular la fecha de fin (6 días después del último día del mes)
        const endOfMonth = new Date(yearInt, monthInt, 0);
        const endDate = new Date(endOfMonth);
        endDate.setDate(endDate.getDate() + 6);

        // Buscar los eventos dentro del rango extendido
        const events = await Event.find({
            date: {
                $gte: startDate,
                $lte: endDate,
            },
        });

        // Retornar una respuesta exitosa con los eventos encontrados
        return new NextResponse(JSON.stringify({ events }), { status: 200 });

    } catch (error) {
        console.error('Error:', error);
        // Retornar una respuesta de error en caso de que algo falle
        return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}


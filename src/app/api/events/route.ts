'use server';

import connectDB from '@/lib/mongodb';
import { Event } from '@/models/Events';
import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';

export async function POST(request: Request) {
    try {
        // Conéctate a la base de datos
        await connectDB();

        // Obtén los valores del cuerpo de la solicitud
        const values = await request.json();


        // Crea un nuevo documento de evento y guárdalo en la base de datos
        const event = new Event(values);
        const result = await event.save();
        console.log(result)
        revalidatePath('/admin/event/ver')
        // Retorna una respuesta exitosa con el resultado
        return new Response(JSON.stringify(result), { status: 200 });

    } catch (error) {
        console.error('Error:', error);
        // Retorna una respuesta de error en caso de que algo falle
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}

export async function GET(request: NextRequest) {
    console.log('Get----')

    const { searchParams } = new URL(request.url);
    const desde = searchParams.get('desde') || '0'; // Valor por defecto es '0'
    const limit = searchParams.get('limit') || '5'; // Valor por defecto es '5'
    console.log(desde, limit)
    try {
        // Conéctate a la base de datos
        await connectDB();


        // Busca todos los eventos en la base de datos
        // const events = await Event.find({})
        //     .sort({ date: 1 }) // Orden ascendente por fecha
        //     .limit(parseInt(limit)) // Limita la cantidad de eventos

        const [total, events] = await Promise.all([
            Event.countDocuments(),
            Event.find()
                .sort({ date: -1 })
                .skip(parseInt(desde))
                .limit(parseInt(limit))
        ]);



        // Retorna una respuesta exitosa con los eventos encontrados
        return new Response(JSON.stringify({ total, events }), { status: 200 });

    } catch (error) {
        console.error('Error:', error);
        // Retorna una respuesta de error en caso de que algo falle
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}


'use server';

import connectDB from '@/lib/mongodb';
import { Event } from '@/models/Events';
import { revalidatePath } from 'next/cache';
interface Params {
    params: { id: number }
}
export async function DELETE(request: Request, { params }: Params) {
    try {
        // Conéctate a la base de datos
        await connectDB();

        // Obtén el ID del evento a eliminar
        const { id } = params;

        // Elimina el evento de la base de datos
        const result = await Event.findByIdAndDelete(id);
        console.log('Deleted Event:', result);

        // Retorna una respuesta exitosa con el resultado
        return new Response(JSON.stringify(result), { status: 200 });

    } catch (error) {
        console.error('Error:', error);
        // Retorna una respuesta de error en caso de que algo falle
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}
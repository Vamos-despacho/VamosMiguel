'use server';

import connectDB from '@/lib/mongodb';
import { Event } from '@/models/Events';
import { revalidatePath } from 'next/cache';
interface Params {
    params: { id: number }
}
export async function DELETE(request: Request, { params }: Params) {
    console.log('delete event');
    try {
        // Conéctate a la base de datos
        await connectDB();

        // Obtén el ID del evento a eliminar
        const { id } = params;
        console.log(id)

        // Elimina el evento de la base de datos
        const result = await Event.updateOne(
            { "eventos._id": id },
            { $pull: { eventos: { _id: id } } }
        );

        // Retorna una respuesta exitosa con el resultado
        return new Response(JSON.stringify(result), { status: 200 });

    } catch (error) {
        console.error('Error:', error);
        // Retorna una respuesta de error en caso de que algo falle
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}


export async function PUT(request: Request, { params }: { params: { id: string } }) {

    try {
        // Conéctate a la base de datos
        await connectDB();

        // Obtén el ID del evento a actualizar y los detalles del campo `event` desde el cuerpo de la solicitud
        const eventId = params.id;
        const eventDetails = await request.json(); // Asegúrate de que esto sea lo que estás enviando

        // Actualiza el campo `event` en el evento específico en el array `eventos`
        const result = await Event.updateOne(
            { 'eventos._id': eventId },
            {
                $set: {
                    'eventos.$.event': eventDetails // Actualiza solo el campo `event`
                }
            }
        );

        // Verifica si se realizó la actualización

        console.log(result)
        // Retorna una respuesta exitosa con el resultado
        return new Response(JSON.stringify({ message: 'Evento actualizado con éxito' }), { status: 200 });

    } catch (error) {
        console.error('Error:', error);
        // Retorna una respuesta de error en caso de que algo falle
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}

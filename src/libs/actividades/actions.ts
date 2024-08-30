'use server';

import { IIEvent } from '@/interface/event';
import connectDB from '@/lib/mongodb';
import { Event } from '@/models/Events';
import { env } from 'process';

// export const getActivitesDate = async (month: number, year: number) => {
//     if (!month || !year) {
//         return [];
//     }
//     try {
//         // Conectar a la base de datos
//         await connectDB();

//         const startOfMonth = new Date(year, month - 1, 1);
//         const startDate = new Date(startOfMonth);
//         startDate.setDate(startDate.getDate() - 6);

//         const endOfMonth = new Date(year, month, 0);
//         const endDate = new Date(endOfMonth);
//         endDate.setDate(endDate.getDate() + 6);

//         const events = await Event.find({
//             date: {
//                 $gte: startDate,
//                 $lte: endDate,
//             },
//         });

//         const formattedEvents = events.map(event => ({
//             ...event.toObject(),
//             date: new Date(event.date),
//         }));
//         console.log({ events })
//         console.log({ formattedEvents })
//         return formattedEvents;

//     } catch (error) {
//         console.error('Error:', error);
//         return [];
//     }
// };


// export const getActivitesDate = async (month: number, year: number): Promise<IIEvent[]> => {
//     if (!month || !year) {
//         return [];
//     }
//     try {
//         await connectDB();

//         const startOfMonth = new Date(year, month - 1, 1);
//         const startDate = new Date(startOfMonth);
//         startDate.setDate(startDate.getDate() - 6);

//         const endOfMonth = new Date(year, month, 0);
//         const endDate = new Date(endOfMonth);
//         endDate.setDate(endDate.getDate() + 6);

//         // Obtener eventos desde MongoDB y convertir a objetos simples
//         const events = await Event.find({
//             date: {
//                 $gte: startDate,
//                 $lte: endDate,
//             },
//         }).lean();

//         // Formatear los eventos para asegurarse de que solo contienen datos simples
//         const formattedEvents: IIEvent[] = events.map((event: any) => ({
//             ...event,
//             id: event._id.toString(), // Convertir _id a string
//             _id: undefined, // Eliminar _id si no es necesario
//         }));


//         console.log('formattedEvents', formattedEvents);
//         return formattedEvents;
//     } catch (error) {
//         console.error('Error:', error);
//         return [];
//     }
// };
export const getActivitesDate = async (month: number, year: number): Promise<IIEvent[]> => {
    if (!month || !year) {
        return [];
    }
    try {
        await connectDB();

        const startOfMonth = new Date(year, month - 1, 1);
        const startDate = new Date(startOfMonth);
        startDate.setDate(startDate.getDate() - 6);

        const endOfMonth = new Date(year, month, 0);
        const endDate = new Date(endOfMonth);
        endDate.setDate(endDate.getDate() + 6);

        // Obtener eventos desde MongoDB y convertir a objetos simples
        const events = await Event.find({
            date: {
                $gte: startDate,
                $lte: endDate,
            },
        }).lean();


        return JSON.parse(JSON.stringify(events))
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
};

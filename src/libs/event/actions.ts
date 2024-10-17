'use server';

import connectDB from '@/lib/mongodb';
import Categoria from '@/models/Comision';
import { Event } from '@/models/Events';
import MesModel from '@/models/Mes';


export const createEvent = async (data: any) => {
    try {
        // Conéctate a la base de datos
        await connectDB();

        // Obtén los valores del cuerpo de la solicitud
        // const values = await request.json();


        // Crea un nuevo documento de evento y guárdalo en la base de datos
        const event = new Event(data);
        const result = await event.save();
        if (result) {
            return { status: 200 }
        }

    } catch (error) {
        console.error('Error:', error);
        // Retorna una respuesta de error en caso de que algo falle
        return { status: 400 };
    }
}

export const getEvents = async (desde: any, limit: any) => {

    try {
        // Conéctate a la base de datos
        await connectDB();
        const [total, events] = await Promise.all([
            Event.countDocuments(),
            Event.find()
                .sort({ date: -1 })
                .skip(parseInt(desde))
                .limit(parseInt(limit))
        ]);

        return JSON.stringify({ total, events });
        // return ({ total, events }).toString()
    } catch (error) {
        console.error('Error:', error);

        return JSON.stringify({ error: 'Internal Server Error' });
    }
}

export const updateEvent = async (eventId: string, eventDetails: any) => {

    try {
        // Conéctate a la base de datos
        await connectDB();

        // Obtén el ID del evento a actualizar y los detalles del campo `event` desde el cuerpo de la solicitud
        // const eventId = params.id;
        // const eventDetails = await request.json(); // Asegúrate de que esto sea lo que estás enviando

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


        // Retorna una respuesta exitosa con el resultado
        return { status: 200 };

    } catch (error) {
        console.error('Error:', error);
        // Retorna una respuesta de error en caso de que algo falle
        return { status: 500 };
    }
}

export const addEvent = async (eventId: string, eventDetails: any) => {
    // const { id } = params;

    try {
        // Conéctate a la base de datos
        await connectDB();

        // Obtener los datos del cuerpo de la solicitud
        // const updatedData = await request.json();

        // Actualizar solo los campos específicos en el documento
        const event = await Event.findByIdAndUpdate(
            eventId,
            { $push: eventDetails },
            { new: true } // Esto retorna el documento actualizado
        );

        if (!event) {
            return JSON.stringify({ status: 404 });
        }

        // Retorna una respuesta exitosa con el documento actualizado
        return JSON.stringify(event);

    } catch (error) {
        console.error('Error:', error);
        // Retorna una respuesta de error en caso de que algo falle
        return JSON.stringify({ status: 500 });
    }
}

export const deleteEvent = async (id: string) => {

    try {
        // Conéctate a la base de datos
        await connectDB();

        // Obtén el ID del evento a eliminar
        // const { id } = params;

        // Elimina el evento de la base de datos
        const result = await Event.findByIdAndDelete(id);


        // Retorna una respuesta exitosa con el resultado
        return { status: 200 };

    } catch (error) {
        console.error('Error:', error);
        // Retorna una respuesta de error en caso de que algo falle
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}


export const eventDeleteDay = async (id: string) => {

    try {
        // Conéctate a la base de datos
        await connectDB();

        // Obtén el ID del evento a eliminar
        // const { id } = params;


        // Elimina el evento de la base de datos
        const result = await Event.updateOne(
            { "eventos._id": id },
            { $pull: { eventos: { _id: id } } }
        );

        // Retorna una respuesta exitosa con el resultado
        return { status: 200 };

    } catch (error) {
        console.error('Error:', error);
        // Retorna una respuesta de error en caso de que algo falle
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}


export const createComision = async (values: any) => {
    try {
        // Conéctate a la base de datos
        await connectDB();

        // Obtén los valores del cuerpo de la solicitud
        // const values = await request.json();

        // Crea un nuevo documento de Categoria
        const categoria = new Categoria(values);

        // Guarda el documento en la base de datos
        const result = await categoria.save();



        // Retorna una respuesta exitosa con el resultado
        return { status: 200 };

    } catch (error) {
        console.error('Error:', error);
        // Retorna una respuesta de error en caso de que algo falle
        return JSON.stringify({ error: 'Internal Server Error' });
    }
}



export const getComision = async () => {

    try {
        // Conéctate a la base de datos
        await connectDB();

        // Busca todas las categorías en la base de datos
        const categorias = await Categoria.find();

        // Retorna una respuesta exitosa con las categorías encontradas
        return JSON.stringify(categorias)

    } catch (error) {
        console.error('Error:', error);
        // Retorna una respuesta de error en caso de que algo falle
        return JSON.stringify({ status: 500 })
    }
}

export const createComsionMonth = async (values: any) => {

    try {
        await connectDB();
        const mes = new MesModel(values);
        const result = await mes.save();
        if (result) {
            return { status: 200 }
        }
        return { status: 400 }
    } catch (error) {
        return { status: 400 };
    }
}

export const getComsionMonth = async () => {

    try {
        await connectDB();
        const resp = await MesModel.find()
            .sort({ date: -1 })
            .populate('categorias.categoria', ['label', 'icon']);

        return JSON.stringify(resp)
    } catch (error) {
        return JSON.stringify({ status: 500 })
    }
}

export const deleteComsionMonth = async (id: string) => {

    try {
        await connectDB();
        const result = await MesModel.findByIdAndDelete(id);
        return { status: 200 }
    } catch (error) {
        return { status: 500 }
    }
}









interface UpdateComisionMonthPayload {
    [key: string]: number; // El key es el ID de la categoría y el valor es la asistencia actualizada
}

export const updateComsionMonth = async (idMes: string, updatedValues: UpdateComisionMonthPayload) => {
    try {
        // Encuentra el mes por su ID
        const mes = await MesModel.findById(idMes);
        if (!mes) {
            throw new Error('Mes no encontrado');
        }

        // Actualiza las asistencias basadas en los valores proporcionados
        mes.categorias.forEach((categoria) => {
            const updatedAsistencia = updatedValues[categoria.categoria.toString()];
            if (updatedAsistencia !== undefined) {
                categoria.asistencia = updatedAsistencia;
            }
        });

        // Guarda el documento actualizado
        await mes.save();
        if (mes) {
            return { status: 200 }
        } else {
            return { status: 400 }
        }


    } catch (error) {
        console.error('Error al actualizar el mes:', error);
        throw error;
    }
};

export const getMonthShow = async (monthDate: Date) => {


    try {
        await connectDB();

        const startOfMonth = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);
        const endOfMonth = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 1);

        const mes = await MesModel.findOne({
            month: {
                $gte: startOfMonth,
                $lt: endOfMonth
            }
        })
            .populate('categorias.categoria')
            .exec();

        if (mes) {

            return {
                status: 200,
                data: JSON.stringify(mes)
            };
        } else {

            return {
                status: 404,
                message: 'Mes no encontrado'
            };
        }

    } catch (error) {

        return {
            status: 500,
            message: 'Error al buscar el mes',
            error: error
        };
    }
};

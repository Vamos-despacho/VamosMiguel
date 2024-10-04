'use server';

import Province from "@/models/Provinces";
import connectDB from '@/lib/mongodb';
import { SportEvent } from "@/models/salon/SportEvent";
import { Atleta } from "@/models/salon/Atleta";


export const crearProvincia = async (name: string) => {
    console.log(name)
    if (!name) {
        return { status: 400 }
    }
    try {
        await connectDB();
        const province = new Province({ name })
        const result = await province.save()
        console.log({ province })
        console.log({ result })
        if (result) {
            return { status: 200 }
        }
        return { status: 400 }

    } catch (error) {
        console.error('Error:', error);
        return { status: 500 }

    }
}

export const obtenerProvincias = async () => {
    try {
        await connectDB();
        const provinces = await Province.find()
        return JSON.stringify(provinces);
    } catch (error) {
        console.error('Error:', error);
        return JSON.stringify({ status: 500 })
    }
}

export const crearEvento = async (name: string, year: number, location: string, description: string) => {
    if (!name || !year || !location || !description) {
        return { status: 400 }
    }
    try {
        await connectDB();
        const event = new SportEvent({ name, year, location, description })
        const result = await event.save()
        console.log({ event })
        console.log({ result })
        if (result) {
            return { status: 200 }
        }
        return { status: 400 }

    } catch (error) {
        console.error('Error:', error);
        return { status: 500 }

    }
}

export const obtenerEventos = async () => {
    try {
        await connectDB();
        const events = await SportEvent.find()

        return JSON.stringify(events);
    } catch (error) {
        console.error('Error:', error);
        return JSON.stringify({ status: 500 })

    }
}

export const createAtleta = async (data: any) => {

    if (!data) {
        return { status: 400 }
    }
    try {
        await connectDB();
        const atleta = new Atleta(data)
        const result = await atleta.save()
        console.log(result)
        if (result) {
            return JSON.stringify(result)
        }
        return { status: 400 }

    } catch (error) {
        console.error('Error:', error);
        return { status: 500 }

    }
}

export const updateAtleta = async (data: any) => {
    if (!data) {
        return { status: 400 }
    }
    try {
        await connectDB();
        const result = await Atleta.findByIdAndUpdate
            (data._id, data, {
                new:
                    true
            })
        console.log(result)
        if (result) {
            return JSON.stringify(result)
        }
        return { status: 400 }
    }
    catch (error) {
        console.error('Error:', error);
        return { status: 500 }
    }
}
export const updateSport = async (data: any) => {
    if (!data) {
        return { status: 400 }
    }
    try {
        await connectDB();
        const result = await Atleta.findByIdAndUpdate
            (data._id, {
                $set: {
                    sports: data.sports
                }
            },
                {
                    new:
                        true
                })
        console.log(result)
        if (result) {
            return JSON.stringify(result)
        }
        return { status: 400 }
    }
    catch (error) {
        console.error('Error:', error);
        return { status: 500 }
    }
}

export const updateEvent = async (data: any) => {
    if (!data) {
        return { status: 400 }
    }
    try {
        await connectDB();

        // const resultEvent = await SportEvent.findByIdAndUpdate({
        //     _id: data.events.event
        // }, {
        //     $push: {
        //         participants: data.athleteId
        //     }
        // }, {
        //     new: true
        // })
        const resultEvent = await SportEvent.findByIdAndUpdate(
            { _id: data.events.event },
            {
                $addToSet: {
                    participants: data.athleteId // Solo agrega si el atleta no está ya en participants
                }
            },
            {
                new: true // Devuelve el documento actualizado
            }
        );


        const result = await Atleta.findByIdAndUpdate(
            data.athleteId,
            {
                $push: {
                    events: data.events // $each permite agregar múltiples eventos si el array contiene más de uno
                }
            },
            {
                new: true // Devuelve el documento actualizado
            }
        );

        if (result) {
            return JSON.stringify(result)
        }
        return { status: 400 }
    }
    catch (error) {
        console.error('Error:', error);
        return { status: 500 }
    }

}

export const getAtletas = async () => {
    console.log('first')
    try {
        await connectDB();
        const atletas = await Atleta.find()
            .populate('events.event', 'name')
        return JSON.stringify(atletas);
    } catch (error) {
        console.error('Error:', error);
        return JSON.stringify({ status: 500 })
    }
}

export const deleteAtleta = async (id: string) => {
    console.log('Deleting', id)
    try {
        await connectDB();
        const result = await Atleta.findByIdAndDelete(id)
        console.log(result)
        if (result) {
            return { status: 200 }
        }
        return { status: 400 }
    } catch (error) {
        console.error('Error:', error);
        return { status: 500 }
    }
}

export const deleteEventAtleta = async (data: any) => {
    console.log(data)
    try {
        await connectDB();

        // Eliminar el evento específico del array de eventos del atleta
        const atleta = await Atleta.findByIdAndUpdate(
            data.athleteId,
            {
                $pull: {
                    events: { _id: data.eventId } // Se asume que data.eventId es el ID del evento a eliminar
                } // Eliminar el eventId específico
            },
            { new: true } // Devuelve el documento actualizado
        );

        if (!atleta) {
            return { status: 400, message: 'Atleta no encontrado' };
        }
        console.log('sport', data.sportEvent)
        // Verificar si el atleta todavía tiene eventos con el mismo eventId
        const atletaConEventosRestantes = await Atleta.findOne({
            _id: data.athleteId,
            events: { $elemMatch: { event: data.sportEvent } } // Buscar si el atleta aún tiene eventos de este sportEvent
        });



        console.log({ atletaConEventosRestantes })
        // Si no tiene más eventos con el eventId específico, lo eliminamos de los participantes del evento deportivo
        if (atletaConEventosRestantes === null) {
            console.log('delete athlete from event ++++++++', data.athleteId)
            console.log('sportevent', data.sportEvent)
            const asdf = await SportEvent.findByIdAndUpdate(
                data.sportEvent,
                {
                    $pull: { participants: data.athleteId } // Eliminar al atleta de los participantes
                },
                { new: true } // Devolver el documento actualizado
            );
            console.log({ asdf })
        }

        return { status: 200, message: 'Evento eliminado y verificado correctamente' };
    } catch (error) {
        console.error('Error:', error);
        return { status: 500, message: 'Error en el servidor' };
    }
};


export const updateAthleteStatus = async (id: string, newState: boolean) => {
    try {
        await connectDB();
        const result = await Atleta.findByIdAndUpdate
            (id, { state: newState }, { new: true })

        if (result) {
            return JSON.stringify(result)
        }
        return { status: 400 }

    } catch (error) {
        console.error('Error:', error);
        return { status: 500 }
    }
}

// export const searchAtletasFront = async (searchTerm: string) => {
//     try {
//         const query = {
//             state: true,
//             name: { $regex: searchTerm, $options: 'i' } // Buscar por nombre, sin importar mayúsculas/minúsculas
//         };
//         await connectDB();
//         const atletas = await Atleta.find(query).select('name -_id isHighlighted');
//         console.log(atletas);
//         return JSON.stringify(atletas);
//     } catch (error) {
//         console.error('Error:', error);
//         return JSON.stringify({ status: 500 });
//     }
// }
// type SearchParams = {
//     searchTerm: string;
//     page: number;
//     limit: number;
// }

// export const searchAtletasFront = async ({ searchTerm, page = 1, limit = 10 }: SearchParams) => {
//     try {
//         const query = {
//             state: true,
//             name: { $regex: searchTerm, $options: 'i' }
//         };

//         const skip = (page - 1) * limit;

//         await connectDB();
//         const atletas = await Atleta.find(query)
//             .skip(skip)
//             .limit(limit)
//             .select('name -_id isHighlighted');

//         console.log(atletas);
//         return JSON.stringify(atletas);
//     } catch (error) {
//         console.error('Error:', error);
//         return JSON.stringify({ status: 500 });
//     }
// }


// app/actions/searchAtletasFront.ts

type SearchParams = {

    page?: number;
    limit?: number;
};


export const searchAtletasFront = async ({ page = 1, limit = 10 }: SearchParams) => {
    try {
        connectDB();
        const query = {
            state: true,

        };
        const skip = (page - 1) * limit;

        const atletas = await Atleta.find(query)
            .skip(skip)
            .limit(limit)
            .select('name isHighlighted _id');
        console.log(atletas.length)
        return JSON.stringify(atletas);
    } catch (error) {
        console.error('Error:', error);
        return JSON.stringify({ status: 500 });

    }
}
export const searchEventFront = async ({ page = 1, limit = 10 }: SearchParams) => {
    try {
        connectDB();
        const query = {
            state: true,

        };
        const skip = (page - 1) * limit;

        const atletas = await SportEvent.find()
            .skip(skip)
            .limit(limit)

        console.log(atletas.length)
        return JSON.stringify(atletas);
    } catch (error) {
        console.error('Error:', error);
        return JSON.stringify({ status: 500 });

    }
}
type SearchParamsS = {
    searchTerm: string;
    page?: number;
    limit?: number;
};
export const searchGetAtletasFront = async ({ searchTerm, page = 1, limit = 10 }: SearchParamsS) => {
    try {
        connectDB();
        const query = {
            state: true,
            name: { $regex: searchTerm, $options: 'i' },
        };

        const skip = (page - 1) * limit;

        const atletas = await Atleta.find(query)
            .skip(skip)
            .limit(limit)
        return JSON.stringify(atletas);
    } catch (error) {
        console.error('Error:', error);
        return JSON.stringify({ status: 500 });

    }
}
export const searchGetEventosFront = async ({ searchTerm, page = 1, limit = 10 }: SearchParamsS) => {
    console.log('first')
    console.log({ searchTerm })
    try {
        connectDB();
        const query = {
            name: { $regex: searchTerm, $options: 'i' },
        };

        const skip = (page - 1) * limit;

        const atletas = await SportEvent.find(query)
            .skip(skip)
            .limit(limit)
        console.log(atletas)
        return JSON.stringify(atletas);
    } catch (error) {
        console.error('Error:', error);
        return JSON.stringify({ status: 500 });

    }
}


export const getAtletasEvent = async (id: string) => {

    try {
        const query = { id }
        await connectDB();
        const atletas = await SportEvent.findById(id)
            .populate('participants')
        console.log({ atletas })
        return JSON.stringify(atletas);
    } catch (error) {
        console.error('Error:', error);
        return JSON.stringify({ status: 500 })
    }
}

export const getAtletasId = async (id: string) => {

    try {

        await connectDB();
        const atletas = await Atleta.findById(id)

        console.log({ atletas })

        return JSON.stringify(atletas);
    } catch (error) {
        console.error('Error:', error);
        return JSON.stringify({ status: 500 })
    }
}
export const getAtletasIds = async (ids: string[]) => {
    try {
        await connectDB();

        // Utiliza $in para buscar todos los atletas cuyos _id estén en el arreglo de ids
        const atletas = await Atleta.find({ _id: { $in: ids } })
            .populate('events.event', 'name')
        console.log({ atletas });

        return JSON.stringify(atletas);
    } catch (error) {
        console.error('Error:', error);
        return JSON.stringify({ status: 500 });
    }
};

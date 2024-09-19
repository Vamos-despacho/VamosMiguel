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

        const resultEvent = await SportEvent.findByIdAndUpdate({
            _id: data.events.event
        }, {
            $push: {
                participants: data.athleteId
            }
        }, {
            new: true
        })

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
    console.log('Deleting', data)
    try {
        await connectDB();
        const result = await Atleta.findByIdAndUpdate(
            data.athleteId,
            {
                $pull: {
                    events: { _id: data.eventId } // Se asume que `data.eventId` es el ID del evento a eliminar
                }
            },
            {
                new: true // Devuelve el documento actualizado
            }
        );
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
export const getAtletasFront = async () => {
    console.log('first')
    try {
        const query = { state: true }
        await connectDB();
        const atletas = await Atleta.find(query)
            .populate('events.event', 'name')
        return JSON.stringify(atletas);
    } catch (error) {
        console.error('Error:', error);
        return JSON.stringify({ status: 500 })
    }
}
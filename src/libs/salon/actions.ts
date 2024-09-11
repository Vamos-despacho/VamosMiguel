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
        console.log(atleta)
        if (atleta) {
            return { status: 200 }
        }
        return { status: 400 }

    } catch (error) {
        console.error('Error:', error);
        return { status: 500 }

    }
}

'use client'

import { crearEvento } from "@/libs/salon/actions"
import { FormEvent } from "react"
import { useToast } from "../ui/use-toast"


const CrearEvento = () => {
    const { toast } = useToast()
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const formData = new FormData(form)
        const name = formData.get('name')
        const year = formData.get('year')
        const location = formData.get('location')
        const description = formData.get('description')
        if (!name || !year || !location || !description) {
            alert('Todos los campos son obligatorios')
            return
        }
        console.log({ name, year, location, description })
        const resp = await crearEvento(name as string, parseInt(year as string), location as string, description as string)
        console.log(resp)
        if (resp.status === 200) {
            toast({
                variant: "default",
                title: "Evento creado",
                description: "El evento ha sido creado exitosamente",
            })
            form.reset()
        } else {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Ha ocurrido un error al crear el evento",
            })
        }


    }

    return (
        <form onSubmit={handleSubmit} className="w-[100%] p-4 bg-white rounded shadow-md gap-3 flex flex-col" >
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre del Evento</label>
                <input
                    id="name"
                    name="name"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
            </div>
            <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700">Fecha del Evento</label>
                <input
                    id="year"
                    name="year"
                    type="number"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
            </div>
            <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Ubicación</label>
                <input
                    id="location"
                    name="location"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
            </div>
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción</label>
                <textarea
                    id="description"
                    name="description"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                />

            </div>
            <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded">Crear Evento</button>
        </form>
    )
}

export default CrearEvento
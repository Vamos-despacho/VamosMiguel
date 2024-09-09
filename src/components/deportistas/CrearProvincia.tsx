'use client'

import { crearProvincia } from "@/libs/salon/actions"

const CrearProvincia = () => {

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const formData = new FormData(form)
        const nombre = formData.get('nombre')
        if (!nombre) {
            alert('El nombre es obligatorio')
            return
        }
        const resp = await crearProvincia(nombre as string)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="w-80 p-4 bg-white rounded shadow-md">
                <h1>Crear Provincia</h1>
                <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre de la Provincia</label>
                    <input
                        id="nombre"
                        name="nombre"
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                </div>
                <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded">Crear Provincia</button>
            </form>
        </div>
    )
}

export default CrearProvincia
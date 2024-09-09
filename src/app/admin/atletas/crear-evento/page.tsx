import CrearEvento from '@/components/deportistas/CrearEvento'
import React from 'react'

const crearEvento = () => {
    return (
        <div className='flex flex-col gap-3'>
            <h2>Crear Eventos</h2>
            <CrearEvento />
        </div>
    )
}

export default crearEvento
import CrearAtleta from '@/components/deportistas/CrearAtleta'
import React from 'react'

const crearAtleta = () => {
    return (
        <div className='flex flex-col gap-3'>
            <h2>Crear Aleta</h2>
            <CrearAtleta />
        </div>
    )
}

export default crearAtleta
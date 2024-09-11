import CrearAtleta from '@/components/deportistas/CrearAtleta'
import { obtenerEventos } from '@/libs/salon/actions'
import React from 'react'

async function getServerSideProps() {
    const resp = await obtenerEventos()
    if (resp) {
        const eventos = JSON.parse(resp)
        return eventos
    } else {
        return null
    }
}

const crearAtleta = async () => {
    const eventos = await getServerSideProps()
    if (!eventos) {
        return <div>Hubo un error al obtener los eventos</div>
    }
    return (
        <div className='flex flex-col gap-3'>

            <CrearAtleta events={eventos} />
        </div>
    )
}

export default crearAtleta
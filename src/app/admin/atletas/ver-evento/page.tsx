import VerEvento from '@/components/deportistas/VerEvento'
import { obtenerEventos } from '@/libs/salon/actions'
import React from 'react'

async function getServerSideProps() {
    const resp = await obtenerEventos()
    if (resp.status === 200) {
        return resp.events
    } else {
        return null
    }
}

const page = async () => {

    const eventos = await getServerSideProps()
    if (!eventos) {
        return <div>Hubo un error al obtener los eventos</div>
    }
    return (
        <div>
            <h2>Ver Evento</h2>
            <VerEvento event={eventos} />
        </div>
    )
}

export default page
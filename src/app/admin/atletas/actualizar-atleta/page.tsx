import ActualiarAtleta from '@/components/deportistas/ActualiarAtleta'
import { getAtletas } from '@/libs/salon/actions'
import React from 'react'

async function obtenerAtletas() {
    const resp = await getAtletas()
    if (resp) {
        const atletas = JSON.parse(resp)
        return atletas
    } else {
        return null
    }
}
const actualizarAteletaPage = async () => {
    const atletas = await obtenerAtletas()
    if (!atletas) {
        return <div>Hubo un error al obtener los atletas</div>
    }
    return (
        <div>

            <ActualiarAtleta atletas={atletas} />
        </div>
    )
}

export default actualizarAteletaPage
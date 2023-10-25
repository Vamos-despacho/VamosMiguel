import vamosApi from '@/app/api/vamosApi'
import React from 'react'
import ListEtiquetas from '@/components/dashboard/ListEtiqueta';
async function getEtiqueta() {
    const resp = await vamosApi.get('/etiquetas')
    return resp.data
}

const VerEtiquetas = async () => {
    const etiquetas = await getEtiqueta()
    if (!etiquetas) return <div>No hay etiquetas</div>
    if (etiquetas.length === 0) return <div>loading...</div>

    return (
        <div>
            <ListEtiquetas etiquetas={etiquetas} />
        </div>
    )
}

export default VerEtiquetas
import React from 'react'
import ListEtiquetas from '@/components/dashboard/ListEtiqueta';
import axios from 'axios';
async function getEtiqueta() {
    const resp = await axios.get('/api/etiquetas')
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
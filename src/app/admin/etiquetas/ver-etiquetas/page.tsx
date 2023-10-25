import React from 'react'
import ListEtiquetas from '@/components/dashboard/ListEtiqueta';

import { prisma } from '@/libs/prisma';
async function getEtiqueta() {

    return await prisma.tag.findMany()
}

const VerEtiquetas = async () => {
    const etiquetas = await getEtiqueta()
    if (!etiquetas) return <div>No hay etiquetas</div>

    return (
        <div>
            <ListEtiquetas etiquetas={etiquetas} />
        </div>
    )
}

export default VerEtiquetas
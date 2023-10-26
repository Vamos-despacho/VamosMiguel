import React from 'react'
import ListEtiquetas from '@/components/dashboard/ListEtiqueta';

import { prisma } from '@/libs/prisma';
async function getEtiqueta() {

    return await prisma.tag.findMany()
}
export const dynamic = 'force-dynamic'

const VerEtiquetas = async () => {
    const etiquetas = await getEtiqueta()
    if (!etiquetas) return <div>No hay etiquetas</div>

    return (
        <div>
            <h2 className="text-xl font-bold p-4 pb-0">Etiquetas</h2>
            <ListEtiquetas etiquetas={etiquetas} />
        </div>
    )
}

export default VerEtiquetas
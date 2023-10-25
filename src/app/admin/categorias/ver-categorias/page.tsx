import ListCategorias from '@/components/dashboard/ListCategorias';
import { prisma } from '@/libs/prisma';
import axios from 'axios';

async function getCategory() {

    return await prisma.category.findMany()
}

const VerCategoria = async () => {
    const categorias = await getCategory()

    if (!categorias) return <div>No hay categorías</div>

    return (
        <div>
            <ListCategorias categorias={categorias} />
        </div>
    )
}

export default VerCategoria
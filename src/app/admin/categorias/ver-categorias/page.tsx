import ListCategorias from '@/components/dashboard/ListCategorias';
import { prisma } from '@/libs/prisma';

async function getCategory() {

    return await prisma.category.findMany()
}
export const dynamic = 'force-dynamic'

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
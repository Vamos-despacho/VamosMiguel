
import { getCategories } from '@/libs/articulos/actions';


async function getCategory() {

    const resp = await getCategories()
    const categorias = JSON.parse(resp)
    return categorias
}
// export const dynamic = 'force-dynamic'

const VerCategoria = async () => {
    const categorias = await getCategory()

    if (!categorias) return <div>No hay categorías</div>

    return (
        <div>
            <h2 className="text-xl font-bold p-4 pb-0">Categorías</h2>
            <pre>
                {JSON.stringify(categorias, null, 2)}
            </pre>
            {/* <ListCategorias categorias={categorias} /> */}
        </div>
    )
}

export default VerCategoria
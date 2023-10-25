import ListCategorias from '@/components/dashboard/ListCategorias';
import axios from 'axios';

async function getCategory() {
    const resp = await axios.get('/api/categorias')
    return resp.data
}

const VerCategoria = async () => {
    const categorias = await getCategory()
    if (!categorias) return <div>No hay categorías</div>
    if (categorias.length === 0) return <div>loading...</div>

    return (
        <div>
            <ListCategorias categorias={categorias} />
        </div>
    )
}

export default VerCategoria
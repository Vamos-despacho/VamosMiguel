
import FormtArticle from "@/components/dashboard/FormtArticle";
import { useSession, getSession } from "next-auth/react"
import { ITag } from "@/interface/article";
import axios from "axios";

async function getCategorias() {
    const res = await axios.get('/api/categorias')
    const categorias = await res.data
    return categorias
}
async function getEtiquetas() {
    const res = await axios.get('/api/etiquetas')
    const etiquetas = await res.data
    return etiquetas
}

const CrearArticle = async () => {

    const categorias = await getCategorias()
    const etiquetas = await getEtiquetas()

    if (!categorias) return <div>No hay categorías</div>
    if (!etiquetas) return <div>No hay etiquetas</div>


    return (
        <div>
            <FormtArticle
                category={categorias}
                tags={etiquetas}
            />
        </div>
    )
}

export default CrearArticle



import { getCategories } from "@/libs/articulos/actions";
import FormtArticleCreate from "@/components/dashboard/FormtArticleCreate";
async function getCategory() {

    const resp = await getCategories()
    const categorias = JSON.parse(resp)
    return categorias
}

const CrearArticle = async () => {

    const categorias = await getCategory()


    if (!categorias) return <div>No hay categorías</div>


    return (
        <div>
            <FormtArticleCreate
                category={categorias}

            />

        </div>

    )
}

export default CrearArticle
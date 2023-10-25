
import FormtArticle from "@/components/dashboard/FormtArticle";
import { prisma } from "@/libs/prisma";
async function getCategorias() {
    return await prisma.category.findMany()
}
async function getEtiquetas() {

    return await prisma.tag.findMany()
}
const CrearArticle = async () => {

    const categorias = await getCategorias()
    const etiquetas = await getEtiquetas()
    console.log(categorias)
    console.log(etiquetas)

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
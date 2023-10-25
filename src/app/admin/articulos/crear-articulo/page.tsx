
import FormtArticle from "@/components/dashboard/FormtArticle";
import { prisma } from "@/libs/prisma";
async function getCategorias() {
    return await prisma.category.findMany()
}
async function getEtiquetas() {
    return await prisma.tag.findMany()
}
const CrearArticle = async () => {

    // const categorias = await getCategorias()
    // const etiquetas = await getEtiquetas()


    return (
        <div>
            {/* <FormtArticle
                category={categorias}
                tags={etiquetas}
            /> */}
        </div>
    )
}

export default CrearArticle
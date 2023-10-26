
"use client"
import vamosApi from "@/app/api/vamosApi";
import FormtArticleEdit from "@/components/dashboard/FormtArticleEdit";
import { ICategory, ITag } from "@/interface/article";
import { useEffect, useState } from "react";

const CrearArticle = () => {
    const [isCategory, setIsCategory] = useState<ICategory[]>([])
    const [isTag, setIsTag] = useState<ITag[]>([])

    const get = async () => {
        try {
            const categoria = await vamosApi.get('/categorias')
            setIsCategory(categoria.data)
        } catch (error) {
            console.log(error)
        }

        try {
            const etiqueta = await vamosApi.get('/etiquetas')

            setIsTag(etiqueta.data)
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        get()
    }, [])


    if (isCategory.length === 0) return <div>No hay categorías</div>
    if (isTag.length === 0) return <div>No hay etiquetas</div>

    return (
        <div>

            <FormtArticleEdit
                category={isCategory}
                tags={isTag}

            />
        </div>
    )
}

export default CrearArticle
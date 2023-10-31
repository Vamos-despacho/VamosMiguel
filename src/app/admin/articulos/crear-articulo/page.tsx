
"use client"
import vamosApi from "@/app/api/vamosApi";
import FormtArticle from "@/components/dashboard/FormtArticle";
import { ICategory, ITag } from "@/interface/article";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../context/AdminContext";


const CrearArticle = () => {
    const { category, addCategory, addTag, tag } = useContext(AdminContext)

    const [isCategory, setIsCategory] = useState<ICategory[]>([])
    const [isTag, setIsTag] = useState<ITag[]>([])

    const get = async () => {
        try {
            const categoria = await vamosApi.get('/categorias')
            addCategory(categoria.data)
        } catch (error) {
            console.log(error)
        }
        try {
            const etiqueta = await vamosApi.get('/etiquetas')
            addTag(etiqueta.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {

        if (category.length > 0) return
        console.log('first')
        get()

    }, [get, category, tag])


    if (category.length === 0) return <div>No hay categorías</div>
    if (tag.length === 0) return <div>No hay etiquetas</div>

    return (
        <div>
            <FormtArticle
                category={category}
                tags={tag}
            />

        </div>

    )
}

export default CrearArticle
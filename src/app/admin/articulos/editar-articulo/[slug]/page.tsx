"use client"
import { AdminContext } from '@/app/admin/context/AdminContext'
import vamosApi from '@/app/api/vamosApi'
import FormtArticleEdit from '@/components/dashboard/FormtArticleEdit'
import { ICategory, ITag, Post } from '@/interface/article'

import React, { useContext, useEffect, useState } from 'react'


const EditarArticulo = ({ params }: { params: { slug: string } }) => {
    const { category, addCategory, addTag, tag } = useContext(AdminContext)

    const [isArticle, setIsArticle] = useState<Post>()
    const [isCategory, setIsCategory] = useState<ICategory[]>([])
    const [isTag, setIsTag] = useState<ITag[]>([])
    const [error, setError] = useState<string | null>(null);



    useEffect(() => {
        getArticle(params.slug)

    }, [params.slug])


    const getCategoryTag = async () => {
        const resp = await vamosApi.get('/categorias')
        const categorias = await resp.data
        addCategory(categorias)


        const res = await vamosApi.get('/etiquetas')
        const etiquetas = await res.data

        addTag(etiquetas)
    }
    useEffect(() => {
        if (category.length > 0) return
        getCategoryTag()
    }, [getCategoryTag, category])

    const getArticle = async (slug: string) => {

        try {
            const resp = await vamosApi.get(`/articulos/slug/${slug}`)
            const articulo = resp.data
            setIsArticle(articulo)

        } catch (error: any) {
            if (error.response && error.response.status === 404) {
                setError("Artículo no encontrado");
            } else {
                setError("Error inesperado al cargar el artículo");
            }
        }
    }
    if (category.length === 0) return <div>...Cargando Categorías</div>
    if (tag.length === 0) return <div>...Cargando Etiquetas</div>
    if (!isArticle) return <div>Cargando...</div>

    return (
        <div className='h-full flex max-w-7xl m-auto'>
            <FormtArticleEdit
                category={category}
                tags={tag}
                articulo={isArticle}
            />
        </div>
    )
}

export default EditarArticulo
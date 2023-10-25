"use client"
import vamosApi from '@/app/api/vamosApi'
import FormtArticleEdit from '@/components/dashboard/FormtArticleEdit'
import { ICategory, ITag, Post } from '@/interface/article'

import React, { useEffect, useState } from 'react'



const EditarArticulo = ({ params }: { params: { slug: string } }) => {
    // const articulo = await getArticulo(params.slug)
    const [isArticle, setIsArticle] = useState<Post>()
    const [isCategory, setIsCategory] = useState<ICategory[]>([])
    const [isTag, setIsTag] = useState<ITag[]>([])
    const [error, setError] = useState<string | null>(null);


    useState
    useEffect(() => {
        getArticle(params.slug)

    }, [params.slug])


    const getArticle = async (slug: string) => {

        const resp = await vamosApi.get('/categorias')
        const categorias = await resp.data
        setIsCategory(categorias)


        const res = await vamosApi.get('/etiquetas')
        const etiquetas = await res.data

        // const etiquetasRaw = await etiquetas.map((etiqueta: ITag) => {
        //     const { id, ...etiquetaData } = etiqueta; // Cambié el nombre de la variable
        //     return etiquetaData;
        // });

        setIsTag(etiquetas)

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
    if (!isTag) return <div>No hay etiquetas</div>
    if (!isCategory) return <div>No hay categorías</div>
    if (!isArticle) return <div>Cargando...</div>

    return (
        <div className='h-full flex max-w-7xl m-auto'>Articulo
            <FormtArticleEdit
                category={isCategory}
                tags={isTag}
                articulo={isArticle}
            />
        </div>
    )
}

export default EditarArticulo
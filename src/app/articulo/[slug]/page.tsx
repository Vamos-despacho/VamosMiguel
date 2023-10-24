import vamosApi from '@/app/api/vamosApi'
import ShowArticle from '@/components/ShowArticle'
import React from 'react'

async function getArticle(slug: string) {
    const res = await vamosApi.get(`/articulos/slug/${slug}`)
    return res.data
}

const Articulo = async ({ params }: { params: { slug: string } }) => {
    const articulo = await getArticle(params.slug)

    return (
        <div className='  flex-auto '>
            <ShowArticle article={articulo} />
        </div>
    )
}

export default Articulo
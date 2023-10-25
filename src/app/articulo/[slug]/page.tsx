import vamosApi from '@/app/api/vamosApi'
import ShowArticle from '@/components/ShowArticle'
import axios from 'axios'
import React from 'react'

async function getArticle(slug: string) {
    const res = await axios(`/api/articulos/slug/${slug}`)
    return res.data
}

const Articulo = async ({ params }: { params: { slug: string } }) => {
    // const articulo = await getArticle(params.slug)
    // if (!articulo) return <div>loading...</div>
    return (
        <div className='  flex-auto '>
            {/* <ShowArticle article={articulo} /> */}

            <div>{params.slug}</div>
        </div>
    )
}

export default Articulo
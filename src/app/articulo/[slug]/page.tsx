"use client"
import vamosApi from '@/app/api/vamosApi';
import { Post } from '@prisma/client';
import { useState } from 'react';



const Articulo = async ({ params }: { params: { slug: string } }) => {
    const [article, setArticle] = useState<Post>();

    async function fetchArticulos(page: number) {
        try {
            const response = await vamosApi.get(`/articulos/slug/${params.slug}`);

            const articulo = response.data;
            setArticle(articulo);

        } catch (error) {
            console.error('Error al obtener los artículos', error);
        }
    }

    if (!article) return <div>loading...</div>
    return (
        <div className='  flex-auto '>
            {/* <ShowArticle article={article} /> */}

            <div>{JSON.stringify(article)}</div>
        </div>
    )
}

export default Articulo
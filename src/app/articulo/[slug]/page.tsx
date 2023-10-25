"use client"
import vamosApi from '@/app/api/vamosApi';
import { Post } from '@prisma/client';
import { useEffect, useState } from 'react';



const Articulo = async ({ params }: { params: { slug: string } }) => {
    const [article, setArticle] = useState<Post>();

    async function fetchArticulos(id: string) {
        try {
            const response = await vamosApi.get(`/articulos/slug/${id}`);

            const articulo = response.data;
            setArticle(articulo);

        } catch (error) {
            alert(error);
        }
    }
    useEffect(() => {
        fetchArticulos(params.slug);
    }, [params.slug]);

    if (!article) return <div>loading...</div>
    return (
        <div className='  flex-auto '>
            {/* <ShowArticle article={article} /> */}

            <div>{JSON.stringify(article)}</div>
        </div>
    )
}

export default Articulo
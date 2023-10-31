"use client"
import vamosApi from '@/app/api/vamosApi';
import ShowArticle from '@/components/ShowArticle';
import { Post } from '@/interface/article';
import { useEffect, useState } from 'react';



const Articulo = ({ params }: { params: { slug: string } }) => {
    const [article, setArticle] = useState<Post>();

    const fetchArticulos = async (id: string) => {
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
            <ShowArticle article={article} />


        </div>
    )
}

export default Articulo
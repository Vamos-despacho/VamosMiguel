"use client"
import { useEffect, useState } from 'react';
import vamosApi from '@/app/api/vamosApi';
import ViewArticle from '@/components/ViewArticle';
import Pagination from '@/components/Pagination'; // Asegúrate de tener un componente de paginación
import { Post } from '@/interface/article';

const itemsPerPage = 6; // Cantidad de elementos por página
interface IArticles {
    articles: Post[];
    totalArticles: number;
}

const Blog = () => {
    const [articles, setArticles] = useState<Post[]>([]);
    const [totalArticles, setTotalArticles] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    // Función para obtener artículos desde el servidor
    async function fetchArticulos(page: number) {
        try {
            const response = await vamosApi.get(`/articulos?page=${page}`);

            const { articles, totalArticles }: IArticles = response.data;
            setArticles(articles);
            setTotalArticles(totalArticles);
        } catch (error) {
            console.error('Error al obtener los artículos', error);
        }
    }

    useEffect(() => {
        fetchArticulos(currentPage);

    }, [currentPage]);
    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };
    if (!articles) return <div>No hay artículos</div>;
    if (articles.length === 0) return <div>loading...</div>;
    return (
        <div className=' mx-auto max-w-full'>
            <div className='container mx-auto'>
                <ViewArticle articles={articles} />
                <div className='pt-10 '>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={Math.ceil(totalArticles / itemsPerPage)}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>






        </div>
    )
}

export default Blog
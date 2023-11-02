"use client"
import { useEffect, useState } from 'react';
import ViewArticle from '@/components/ViewArticle';
import Pagination from '@/components/Pagination'; // Asegúrate de tener un componente de paginación
import { Post } from '@/interface/article';
import ListArticle from '@/components/dashboard/ListArticles';
import ListArticles from '@/components/dashboard/ListArticles';
import axios from 'axios';

const itemsPerPage = 6; // Cantidad de elementos por página
interface IArticles {
    articles: Post[];
    totalArticles: number;
}
export const dynamic = 'force-dynamic'

const VerArticulos = () => {
    const [articles, setArticles] = useState<Post[]>([]);
    const [totalArticles, setTotalArticles] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    // Función para obtener artículos desde el servidor
    async function fetchArticulos(page: number) {
        try {

            const response = await axios.get(`/api/articulos?page=${page}&from=admin`);
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

    if (articles.length === 0) return <div>loading...</div>

    return (
        <div className=' '>
            <div className='mx-auto'>
                <ListArticles articles={articles} />
                <div className='my-4 bg-gray-300'>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={Math.ceil(totalArticles / itemsPerPage)}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default VerArticulos;

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

const Articulos = () => {
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
        console.log(newPage)
        setCurrentPage(newPage);
    };
    if (!articles) return <div>No hay artículos</div>;
    if (articles.length === 0) return <div className=' flex h-[600px] justify-center items-center'>Cargando Artículos...</div>;



    return (
        <div className=' mx-auto max-w-full  '>
            <div className='mx-2 sm:mx-auto sm:container'>
                <h3 className="block mb-5 font-semibold font-display text-xl text-sneutral-950">
                    Artículos
                </h3>
                {/* <h2 className='mb-10 text-4xl font-semibold'>Artículos</h2> */}
                {/* <ViewArticle articles={articles} /> */}
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

export default Articulos
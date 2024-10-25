'use client'
import { useEffect, useState } from 'react';

import { IArticle, Post } from '@/interface/article';

import { getArticle, getArticleAdmin } from '@/libs/articulos/actions';

import ListArticles from '@/components/dashboard/ListArticles';
import Pagination from '@/components/Pagination';

const itemsPerPage = 6; // Definir la cantidad de elementos por página

const VerArticulos = () => {
    const [articles, setArticles] = useState<IArticle[]>([]);
    const [totalArticles, setTotalArticles] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true); // Estado para gestionar la carga

    // Función para obtener artículos desde el servidor
    const fetchArticulos = async (page: number) => {
        const desde = (page - 1) * itemsPerPage;
        setLoading(true); // Activa el estado de carga antes de hacer la solicitud
        try {
            const response = await getArticleAdmin(desde, itemsPerPage);
            const { status, article, total } = JSON.parse(response);
            if (status !== 200) {
                throw new Error('Error al obtener los artículos');
            }
            setArticles(article);
            setTotalArticles(total);
        } catch (error) {
            console.error('Error al obtener los artículos', error);
        } finally {
            setLoading(false); // Desactiva el estado de carga después de la solicitud
        }
    };

    useEffect(() => {
        fetchArticulos(currentPage);
    }, [currentPage]);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
        </div>;
    }

    if (articles.length === 0) {
        return <div>No hay artículos disponibles</div>;
    }

    return (
        <div className=''>
            <div className='prose mx-auto mt-2 max-w-3xl'>
                {/* Aquí puedes añadir más contenido si es necesario */}
            </div>
            <div className='mx-auto'>
                <ListArticles articles={articles} />
                <div className='my-4 '>
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

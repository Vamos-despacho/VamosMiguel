'use client'
import { IArticle, IGArticle, Post } from '@/interface/article'
import React, { useEffect, useState } from 'react'
import Articles from './Articles'
import Pagination from './Pagination'
import { getArticle } from '@/libs/articulos/actions';

const itemsPerPage = 6; // Cantidad de elementos por página

const ViewArticless = () => {
    const [articles, setArticles] = useState<IGArticle[]>([]);
    const [totalArticlesa, setTotalArticlesa] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage); // Actualizar página actual
    };

    const getArticlea = async (page: number) => {
        const limit = 6;
        const desde = (page - 1) * limit;
        const response = await getArticle(desde, limit);
        const { article, total } = JSON.parse(response);

        setArticles(article);
        setTotalArticlesa(total);
    };

    useEffect(() => {
        getArticlea(currentPage);
    }, [currentPage]);

    if (articles.length === 0) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="flex justify-center items-center">
                    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
                </div>

            </div>
        );
    }

    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 grid-cols-2 lg:grid-flo-row gap-1 sm:gap-3 sm:gap-y-7 m-auto">
                {articles.map((article) => (
                    <Articles
                        key={article._id}
                        article={article}
                    />
                ))}
            </div>
            <div className='pt-10'>
                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(totalArticlesa / itemsPerPage)}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default ViewArticless;

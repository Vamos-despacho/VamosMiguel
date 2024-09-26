"use client"
import { Post } from '@/interface/article'
import React, { useEffect, useState } from 'react'
import Article from './Article'
import CardArticle from './dashboard/CardArticle'
import Pagination from './Pagination'
import vamosApi from '@/app/api/vamosApi'
import ArticleDeporte from './ArticleDeporte'
interface Props {
    articles: Post[]
}
const itemsPerPage = 6; // Cantidad de elementos por página

interface IArticles {
    articles: {
        id: string;
        title: string;
        content: string;
        imageUrl: string;
        slug: string;
        category: string;
        createdAt: string;
        published: boolean;
    }[]
    totalArticles: number;
}
const ViewArticleDeporte = ({ articles, totalArticles }: IArticles) => {
    const [articlesa, setArticlesa] = useState(articles);
    const [totalArticlesa, setTotalArticlesa] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (newPage: number) => {
        // console.log(newPage)
        // setCurrentPage(newPage);
    };

    // const getArticle = async (page: number) => {
    //     const response = await vamosApi.get(`/articulos?page=${page}`);
    //     setArticlesa(response.data.articles);
    // }

    // useEffect(() => {
    //     getArticle(currentPage);
    // }, [currentPage])

    if (!articles) return (
        <div className="flex justify-center items-center h-screen">
            <p className="text-2xl font-semibold">No hay articulos</p>
        </div>
    )
    return (
        <div>
            <div
                className="grid md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-3  grid-cols-2
            lg:grid-flo-row  gap-1 sm:gap-3 sm:gap-y-7 m-auto   ">

                {
                    articlesa.map((article, index) => (

                        <ArticleDeporte
                            key={article.id}
                            article={article}
                        />

                    ))
                }

            </div>
            <div className='pt-10 '>
                <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(totalArticles / itemsPerPage)}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    )
}

export default ViewArticleDeporte
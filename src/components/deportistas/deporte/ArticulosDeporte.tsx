'use client'
import ViewArticle from '@/components/ViewArticle'
import React, { useState } from 'react'
import { articlesData } from '@/app/data/article'
import ViewArticleDeporte from '@/components/ViewArticleDeporte';
const ArticulosDeporte = () => {

    const [articulos, setArticulos] = useState(
        articlesData.filter(article => article.category === 'Deporte')
    );

    return (
        <div className='py-12 px-6 md:py-24'>
            <h2 className='text-2xl font-semibold mb-6'>
                Artículos
            </h2>
            <ViewArticleDeporte articles={articulos} totalArticles={articulos.length} />

        </div>
    )
}

export default ArticulosDeporte
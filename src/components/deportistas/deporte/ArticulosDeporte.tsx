'use client'
import ViewArticle from '@/components/ViewArticle'
import React, { useState } from 'react'
import { articlesData } from '@/app/data/article'
import Articulos from '../../../app/articulos/page copy';
const ArticulosDeporte = () => {

    const [articulos, setArticulos] = useState(
        articlesData.filter(article => article.category === 'Deporte')
    );

    return (
        <div className='py-12 px-6 md:py-8'>
            <h2 className='text-3xl font-bold mb-4 '>
                Artículos
            </h2>
            <ViewArticle articles={articulos} totalArticles={articulos.length} />

        </div>
    )
}

export default ArticulosDeporte
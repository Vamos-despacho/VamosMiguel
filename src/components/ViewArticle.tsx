import { Post } from '@/interface/article'
import React from 'react'
import Article from './Article'
import CardArticle from './dashboard/CardArticle'
interface Props {
    articles: Post[]
}

const ViewArticle = ({ articles }: Props) => {


    if (!articles) return (
        <div className="flex justify-center items-center h-screen">
            <p className="text-2xl font-semibold">No hay articulos</p>
        </div>
    )
    return (
        <div
            className="grid md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-3  grid-cols-1
        lg:grid-flo-row  gap-3  m-auto ">

            {
                articles.map((article, index) => (

                    // <CardArticle
                    //     key={index}
                    //     article={article}
                    // />
                    <Article
                        key={index}
                        article={article}
                    />

                ))
            }
        </div>
    )
}

export default ViewArticle
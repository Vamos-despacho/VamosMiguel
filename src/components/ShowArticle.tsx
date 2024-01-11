"use client"
import React, { lazy } from 'react'
import { Button } from './ui/button'
// import "@/app/articulo/articulo.css"
import parse from 'html-react-parser'
import Image from 'next/image'

import { ArrowLeftIcon } from 'lucide-react'
import BtnAtras from './BtnAtras'
import { Metadata } from 'next'
import Head from 'next/head'


interface Props {
    article: any
}


const ShowArticle = ({ article }: Props) => {

    const fecha = (fecha: string) => {
        const formattedDate = new Date(article.updatedAt).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" });

        // const formattedDate = new Date(fecha).toLocaleDateString();
        return formattedDate;
    };
    return (
        <div className=' max-w-7xl mx-auto w-full lg:px-8 mb-14'  >


            <div className='relative px-4  sm:px-8 lg:px-12' >
                <div className='mx-auto max-w-2xl lg:max-w-5xl' >
                    <div className='xl:relative'>
                        <div className='max-w-2xl mt-6 '>
                            <BtnAtras />
                        </div>
                        <article className='flex flex-col'>
                            <header className='flex flex-col mt-3'>
                                <h1 className='mt-3 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>{article.title}</h1>
                                <p className='order-first flex items-center text-base text-zinc-400 dark:text-zinc-500'>{fecha(article.createdAt)}</p>
                            </header>
                            <div className='mx-auto mt-8  '>

                                {article.imageUrl ? <Image loading="lazy" className='object-cover' width={1310} height={872} src={article.imageUrl} alt={article.title} />
                                    : <Image className='w-auto h-auto object-cover' width={1310} height={872} src='/logovm.png' alt={article.title} />}
                                <div className='mx-auto mt-8 max-w-5xl flex justify-center '>
                                </div>
                                <div className='prose mx-auto mt-4 max-w-5xl'>

                                    {parse(article.content)}
                                </div>

                            </div>

                        </article>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default ShowArticle
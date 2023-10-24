import { Post } from '@/interface/article'
import React from 'react'
import { Button } from './ui/button'
// import "@/app/articulo/articulo.css"
import parse from 'html-react-parser'

interface Props {
    article: Post
}
const style = {
    // Define los estilos en línea aquí
    fontFamily: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    color: 'inherit',
    // Otros estilos relacionados con el texto
};
const ShowArticle = ({ article }: Props) => {
    const fecha = (fecha: string) => {
        const formattedDate = new Date(article.createdAt).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" });

        // const formattedDate = new Date(fecha).toLocaleDateString();
        return formattedDate;
    };
    return (
        <div className=' max-w-7xl mx-auto w-full lg:px-8'  >
            <div className='relative px-4  sm:px-8 lg:px-12' >
                <div className='mx-auto max-w-2xl lg:max-w-5xl' >
                    <div className='xl:relative'>
                        <div className='mx-auto max-w-2xl'>
                            <Button className=''>Atras</Button>
                        </div>
                        <article className='flex flex-col'>
                            <header className='flex flex-col'>
                                <h1 className='mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>{article.title}</h1>
                                <time className='order-first flex items-center text-base text-zinc-400 dark:text-zinc-500'>{fecha(article.createdAt)}</time>
                            </header>
                            <div className='html-content' style={style}>
                                {
                                    article.content && <div
                                        className='html-content' style={style}
                                        dangerouslySetInnerHTML={{ __html: article.content }} />
                                }
                                ---------------------
                                {parse(article.content)}

                            </div>
                            ------------------------
                            <div >
                                {
                                    article.content && <div

                                        dangerouslySetInnerHTML={{ __html: article.content }}

                                    />
                                }
                                ----------------
                                {article.content}

                            </div>
                            ----------------
                        </article>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default ShowArticle
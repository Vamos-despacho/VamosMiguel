import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Post } from '@/interface/article'
import Link from 'next/link'
import { Button } from './ui/button'
import Image from 'next/image'
interface Props {
    article: Post
}
const Article = ({ article }: Props) => {
    // const formattedDate = new Date(article.createdAt).toLocaleDateString();
    const formattedDate = new Date(article.createdAt).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" });


    return (
        <article
            className='bg-white relative 
         rounded-xl p-4 ring-1 ring-neutral-950/5 transition
          hover:bg-neutral-50  max-w-sm h-[500px]' >
            <div className='h-56 '>

                {
                    article.imageUrl
                        ? (<div className='absolute top-0 left-0 right-0 h-auto rounded-t-xl '>
                            <Image
                                alt={article.title}
                                src={article.imageUrl}
                                width={480} height={280}
                                className='rounded-t-xl h-56 object-cover ransition-transform transform hover:scale-110 ' />
                        </div>)
                        : (
                            <div className='absolute top-0 left-0 right-0 h-auto rounded-t-xl '>
                                <Image
                                    alt={article.title}
                                    src='/logovm.png'
                                    width={480} height={280}
                                    className='rounded-t-xl h-56 object-cover ransition-transform transform hover:scale-110 ' />
                            </div>
                        )
                }
                <div>
                </div>



            </div>
            <div className='flex space-x-4 items-center'>
                <Image alt='Miguel Angel' src="/images/miguel.jpeg" className='rounded-full ' loading='lazy' width="35" height="35" decoding='async' data-nimg="1" />

                <div>
                    <p className='font-semibold text-base'>Miguel Ángel Campos</p>
                    <div className='flex space-x-2  text-neutral-950 items-center'>
                        <p className='font-semibold text-sm'>{article.category.name}</p>
                        <p className='text-neutral-400 text-xs'>{formattedDate}</p>
                    </div>
                </div>
            </div>
            <div className='h-36 mt-4'>
                <div className='  h-18   '>
                    <p className=' font-display  text-base font-semibold text-neutral-800 leading-5'>
                        {article.title}
                    </p>
                </div>
                <div className=' flex mt-3'>
                    {
                        article.content && <div
                            className=' text-base text-neutral-600 line-clamp-4 leading-5 font-display'
                            dangerouslySetInnerHTML={{ __html: article.content }}></div>
                    }

                    {/* <p className=' text-base text-neutral-600 line-clamp-4' >
                        {article.content}
                    </p> */}
                </div>
            </div>
            <div className='flex justify-end '>
                <Link href={`/articulo/${article.slug}`}>
                    <Button variant="link" className='  text-base'>Leer mas</Button>
                </Link>
            </div>
        </article>
    )
}

export default Article
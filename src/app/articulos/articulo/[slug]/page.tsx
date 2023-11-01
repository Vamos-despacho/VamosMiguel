import vamosApi from '@/app/api/vamosApi';
import ShowArticle from '@/components/ShowArticle';
import { Post } from '@/interface/article';
import { prisma } from '@/libs/prisma';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const id = params.slug

    // fetch data
    // const product = await fetch(`https://.../${id}`).then((res) => res.json())
    const product = await prisma.post.findUnique({
        where: {
            slug: id
        },
        include: {
            category: true,
            tags: true,
        },
    })
    const image = product?.imageUrl || 'https://vamos-miguel-angel.vercel.app/icon2.png'


    const description = product?.content
        ? product?.content.slice(0, 100)
        : ''

    return {
        title: `Miguel Ángel | ${product?.title}`,
        description: `${description}...`,
        openGraph: {
            images: [image],
        },
    }
}



async function fetchArticulos(id: string) {
    try {
        // const response = await vamosApi.get(`/articulos/slug/${id}`);
        // const response = await vamosApi.get(`/articulos/slug/${id}`);
        const response = await prisma.post.findUnique({
            where: {
                slug: id
            },
            include: {
                category: true,
                tags: true,
            },
        })

        return response

    } catch (error) {
        console.log(error)
    }
}



const Articulo = async ({ params }: { params: { slug: string } }) => {
    const article = await fetchArticulos(params.slug);

    if (!article) return <div>loading...</div>
    return (
        <div className='  flex-auto '>
            <ShowArticle article={article} />
        </div>
    )
}

export default Articulo
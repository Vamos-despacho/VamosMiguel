import vamosApi from '@/app/api/vamosApi';
import ShowArticle from '@/components/ShowArticle';
import { Post } from '@/interface/article';
import { prisma } from '@/libs/prisma';
import { Metadata, ResolvingMetadata } from 'next';

// export async function generateMetadata1(title: string) {
//     const metadata: Metadata = {
//         title: title,

//     }
//     return metadata
// }
type Props = {
    title: string

}
export async function generateMetadata(response: any): Promise<Metadata> {
    // read route params
    const { title, imageUrl } = response
    const titleA = "Miguel Ángel - Artículo "
    console.log(title)
    console.log(imageUrl)
    // fetch data
    // const product = await fetch(`https://.../${id}`).then((res) => res.json())

    // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || []

    return {
        title: titleA,
        description: title,
        openGraph: {
            images: [imageUrl,],
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
        generateMetadata(response)

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
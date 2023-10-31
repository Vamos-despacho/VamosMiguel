import vamosApi from '@/app/api/vamosApi';
import ShowArticle from '@/components/ShowArticle';
import { Post } from '@/interface/article';
import { prisma } from '@/libs/prisma';


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
        console.log(response)
        return response

    } catch (error) {
        console.log(error)
    }
}
const Articulo = async ({ params }: { params: { slug: string } }) => {
    const article = await fetchArticulos(params.slug);

    console.log(article)
    if (!article) return <div>loading...</div>
    return (
        <div className='  flex-auto '>
            <ShowArticle article={article} />
        </div>
    )
}

export default Articulo
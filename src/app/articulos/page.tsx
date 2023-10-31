
import vamosApi from '@/app/api/vamosApi';
import ViewArticle from '@/components/ViewArticle';
import Pagination from '@/components/Pagination'; // Asegúrate de tener un componente de paginación
import { Post } from '@/interface/article';

const itemsPerPage = 6; // Cantidad de elementos por página
interface IArticles {
    articles: Post[];
    totalArticles: number;
}

async function fetchArticulos(page: number) {
    try {
        // const response = await vamosApi.get(`/articulos?page=${page}`);
        const response = await vamosApi.get(`https://vamos-miguel-angel.vercel.app/api/articulos?page=1`);


        return response.data
    } catch (error) {
        console.error('Error al obtener los artículos', error);
    }
}
const Articulos = async () => {
    const resp = await fetchArticulos(0);
    const handlePageChange = (newPage: number) => {
        fetchArticulos(newPage);

    };
    if (!resp?.articles) return <div>No hay artículos</div>;
    if (resp.articles.length === 0) return <div className=' flex h-[600px] justify-center items-center'>Cargando Artículos...</div>;

    return (
        <div className=' mx-auto max-w-full  '>
            <div className='mx-2 sm:mx-auto sm:container'>
                <h3 className="block mb-5 font-semibold font-display text-xl text-sneutral-950">
                    Artículos
                </h3>
                {/* <h2 className='mb-10 text-4xl font-semibold'>Artículos</h2> */}
                <ViewArticle articles={resp.articles} totalArticles={resp.totalArticles} />

            </div>
        </div>






    )
}

export default Articulos
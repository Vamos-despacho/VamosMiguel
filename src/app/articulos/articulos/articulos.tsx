// pages/articulos.tsx
import Articulos from '@/app/articulos/page';
import { Post } from '@/interface/article';
import axios from 'axios';
import { GetServerSideProps } from 'next'; // Asegúrate de importar GetServerSideProps

interface Props {
    articles: Post[];
    totalArticles: number;
    currentPage: number;
}
const ArticulosPage = ({ articles, totalArticles, currentPage }: Props) => {
    return <Articulos articles={articles} totalArticles={totalArticles} currentPage={currentPage} />;
};

export default ArticulosPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const page = context.query.page || 1;

    try {
        const response = await axios.get(`https://vamos-miguel-angel.vercel.app/api/articulos?page=${page}`);
        const { articles, totalArticles } = response.data;

        return {
            props: {
                articles,
                totalArticles,
                currentPage: Number(page),
            },
        };
    } catch (error) {
        console.error('Error al obtener los artículos', error);
        return {
            props: {
                articles: [],
                totalArticles: 0,
                currentPage: 1,
            },
        };
    }
};

import vamosApi from "@/app/api/vamosApi";
import ViewArticlesss from "@/components/ViewArticle";
import Pagination from "@/components/Pagination"; // Asegúrate de tener un componente de paginación
import { IArticle, Post } from "@/interface/article";
import { Metadata } from "next";
import { articlesData } from "@/app/data/article";

export const metadata: Metadata = {
  title: "Artículos",
};
const itemsPerPage = 6; // Cantidad de elementos por página
interface IArticles {
  articles: IArticle[];
  totalArticles: number;
}

async function fetchArticulos(page: number) {
  try {
    // const response = await vamosApi.get(`/articulos?page=${page}`);
    const response = await vamosApi.get(
      `https://vamos-miguel-angel.vercel.app/api/articulos?page=1`
    );

    return response.data;
  } catch (error) {
    console.error("Error al obtener los artículos", error);
  }
}

const Articulos = async () => {
  // const resp = await fetchArticulos(0);
  // const handlePageChange = (newPage: number) => {
  //     fetchArticulos(newPage);
  // };

  // if (!resp?.articles) return <div>No hay artículos</div>;
  // if (resp.articles.length === 0) return <div className=' flex h-[600px] justify-center items-center'>Cargando Artículos...</div>;

  return (
    <div className=" mx-auto max-w-full sm:py-20 py-6 ">
      <div className="mx-2 sm:mx-auto sm:container">
        <h2 className="block px-3 mb-10  font-display tracking-tight [text-wrap:balance] text-3xl font-medium sm:text-4xl text-azulv">
          Artículos
        </h2>

        {/* <h2 className='mb-10 text-4xl font-semibold'>Artículos</h2> */}
        <ViewArticlesss
          articles={articlesData}
          totalArticles={articlesData.length}
        />
        {/* <ViewArticle articles={resp.articles} totalArticles={resp.totalArticles} /> */}
      </div>
    </div>
  );
};

export default Articulos;

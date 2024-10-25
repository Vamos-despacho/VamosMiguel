"use client";
import { useEffect, useState } from "react";
import { useArticles } from "@/contexts/ArticlesContext";
import { getArticle } from "@/libs/articulos/actions";
import Articles from "./Articles";
import { IGArticle } from "@/interface/article";
import ArticleSkeleton from "./ArticleSkeleton";

const limit = 6;

const ListArticle = ({ currentPage }: { currentPage: number }) => {
  const { articlesByPage, setArticlesByPage } = useArticles();
  const [loading, setLoading] = useState<boolean>(!articlesByPage[currentPage]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (articlesByPage[currentPage]) {
      setLoading(false);
      return;
    }

    let isMounted = true;

    const fetchArticles = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await getArticle(currentPage, limit);
        const { status, article } = JSON.parse(response);

        if (status === 200 && isMounted) {
          setArticlesByPage((prev) => ({
            ...prev,
            [currentPage]: article,
          }));
        } else if (isMounted) {
          setError("Error al obtener los artículos");
        }
      } catch (err) {
        if (isMounted)
          setError("Ha ocurrido un error al obtener los artículos");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchArticles();

    return () => {
      isMounted = false;
    };
  }, [currentPage, articlesByPage, setArticlesByPage]);

  const articles = articlesByPage[currentPage] || [];

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 grid-cols-2 gap-1 sm:gap-8 m-auto">
        {Array.from({ length: limit }).map((_, index) => (
          <ArticleSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (articles.length === 0) {
    return <div>No hay artículos disponibles</div>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 grid-cols-2 gap-1 sm:gap-8 m-auto">
      {articles.map((article) => (
        <Articles key={article._id} article={article} />
      ))}
    </div>
  );
};

export default ListArticle;

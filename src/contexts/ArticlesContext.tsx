// contexts/ArticlesContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { IGArticle } from "@/interface/article";

interface ArticlesContextType {
  articlesByPage: { [page: number]: IGArticle[] };
  setArticlesByPage: React.Dispatch<
    React.SetStateAction<{ [page: number]: IGArticle[] }>
  >;
}

const ArticlesContext = createContext<ArticlesContextType | undefined>(
  undefined
);

export const ArticlesProvider = ({ children }: { children: ReactNode }) => {
  const [articlesByPage, setArticlesByPage] = useState<{
    [page: number]: IGArticle[];
  }>({});

  return (
    <ArticlesContext.Provider value={{ articlesByPage, setArticlesByPage }}>
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticles = () => {
  const context = useContext(ArticlesContext);
  if (!context) {
    throw new Error("useArticles debe usarse dentro de un ArticlesProvider");
  }
  return context;
};

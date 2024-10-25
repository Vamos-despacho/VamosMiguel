

import vamosApi from "@/app/api/vamosApi";
import FormtArticle from "@/components/dashboard/FormtArticle";
import { ICategory, ITag } from "@/interface/article";
import { useRouter } from "next/navigation";
import { useCallback, useContext, useEffect, useState } from "react";
import { AdminContext } from "../../context/AdminContext";
import { getArticle, getCategories } from "@/libs/articulos/actions";
import FormtArticleEdit from "@/components/dashboard/FormtArticleEdit";
import FormatArticleEdit from "@/components/dashboard/FormtArticleEdit";


async function getCategory() {

    const resp = await getCategories()
    const categorias = JSON.parse(resp)
    return categorias
}
async function getArticles() {

    const response = await getArticle(0, 8)

    const { article } = JSON.parse(response);
    return article
}

const CrearArticle = async () => {

    const categorias = await getCategory()
    const articles = await getArticles()

    if (!categorias) return <div>No hay categorías</div>


    return (
        <div>

            <FormatArticleEdit
                category={categorias}
                articulo={articles[0]}
            />

        </div>

    )
}

export default CrearArticle
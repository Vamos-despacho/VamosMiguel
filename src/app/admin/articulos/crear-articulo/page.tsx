

import vamosApi from "@/app/api/vamosApi";
import FormtArticle from "@/components/dashboard/FormtArticle";
import { ICategory, ITag } from "@/interface/article";
import { useRouter } from "next/navigation";
import { useCallback, useContext, useEffect, useState } from "react";
import { AdminContext } from "../../context/AdminContext";
import { getCategories } from "@/libs/articulos/actions";
import FormtArticleEdit from "@/components/dashboard/FormtArticleEdit";
async function getCategory() {

    const resp = await getCategories()
    const categorias = JSON.parse(resp)
    return categorias
}

const CrearArticle = async () => {

    const categorias = await getCategory()


    if (!categorias) return <div>No hay categorías</div>


    return (
        <div>
            <FormtArticleEdit
                category={categorias}

            />

        </div>

    )
}

export default CrearArticle
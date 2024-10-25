"use client";

import { useCallback, useContext, useEffect, useState } from 'react';
import { AdminContext } from '@/app/admin/context/AdminContext';
import vamosApi from '@/app/api/vamosApi';
import { IArticle, ICategory, ITag, Post } from '@/interface/article';
import { getArticleSlug, getCategories } from '@/libs/articulos/actions';
import FormatArticleEdit from '@/components/dashboard/FormtArticleEdit';

const EditarArticulo = ({ params }: { params: { slug: string } }) => {
    const { category, addCategory, addTag, tag } = useContext(AdminContext);
    const [isArticle, setIsArticle] = useState<IArticle | null>(null); // Inicializar con null
    const [error, setError] = useState<string | null>(null);

    // Función para obtener las categorías y tags
    const getCategoryTag = useCallback(async () => {
        try {
            const resp = await getCategories();
            const categorias = JSON.parse(resp);
            addCategory(categorias);
        } catch (err) {
            console.error("Error al obtener las categorías:", err);
        }
    }, [addCategory]);

    // Función para obtener un artículo por su slug
    const getArticle = useCallback(async (slug: string) => {
        try {
            const resp = await getArticleSlug(slug);
            const { article } = JSON.parse(resp);
            setIsArticle(article);
        } catch (error: any) {
            if (error.response && error.response.status === 404) {
                setError("Artículo no encontrado");
            } else {
                setError("Error inesperado al cargar el artículo");
            }
        }
    }, []);

    // Efecto para cargar el artículo cuando cambia el slug
    useEffect(() => {
        getArticle(params.slug);
    }, [params.slug, getArticle]);

    // Efecto para cargar categorías si no están ya disponibles
    useEffect(() => {
        if (category.length === 0) {
            getCategoryTag();
        }
    }, [category, getCategoryTag]);

    // Si no hay categorías cargadas
    if (category.length === 0) return <div>...Cargando Categorías</div>;

    // Si no se ha encontrado el artículo o está en proceso de carga
    if (!isArticle) return <div>Cargando...</div>;

    return (
        <div className="h-full flex max-w-7xl m-auto">
            <FormatArticleEdit
                category={category}
                articulo={isArticle}
            />

        </div>
    );
};

export default EditarArticulo;

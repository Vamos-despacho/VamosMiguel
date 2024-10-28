"use server";

import { IArticle, IPutArticle } from "@/interface/article";
import connectDB from "@/lib/mongodb";
import { Article } from "@/models/Article";
import { CategoryArticle } from "@/models/CategoryArticle";

export const createArticle = async (data: IPutArticle) => {
  try {
    await connectDB();

    const articulo = new Article(data);
    const result = await articulo.save();
    if (result) {
      return JSON.stringify({
        status: 200,
        message: "Articulo creado correctamente",
      });
    }
    return JSON.stringify({ status: 400, message: "Error al crear articulo" });
  } catch (error) {
    return JSON.stringify({ error: "Internal Server Error" });
  }
};
export const updateArticle = async (data: IArticle) => {
  try {
    const result = await Article.findByIdAndUpdate(data._id, data);

    if (result) {
      return JSON.stringify({
        status: 200,
        message: "Articulo creado correctamente",
      });
    }
    return JSON.stringify({ status: 400, message: "Error al crear articulo" });
  } catch (error) {
    return JSON.stringify({ error: "Internal Server Error" });
  }
};

const ITEMS_PER_PAGE = 6;
export const getTotalPages = async () => {
  console.log("getTotalPages");
  try {
    await connectDB();
    const query = { published: true };

    const total = await Article.countDocuments(query);
    console.log({ total });
    return Math.ceil(total / ITEMS_PER_PAGE);
  } catch (error) {
    console.log("Error", error);
    return 0;
  }
};
export const getArticle = async (desde: any, limit: any) => {
  console.log("GetArticle");

  const offset = (desde - 1) * ITEMS_PER_PAGE;
  console.log({ offset, limit });
  try {
    await connectDB();
    const query = { published: true };
    const [total, article] = await Promise.all([
      Article.countDocuments(query),
      Article.find(query)
        .populate("category", "name")
        .sort({ createdAt: -1 })
        .skip(offset)
        .limit(parseInt(limit)),
    ]);
    console.log(total);
    if (article) {
      return JSON.stringify({ status: 200, article, total });
    }
    return JSON.stringify({ status: 400, message: "Error al crear articulo" });
  } catch (error) {
    return JSON.stringify({ error: "Internal Server Error" });
  }
};
export const getArticleAdmin = async (desde: any, limit: any) => {
  try {
    await connectDB();

    const [total, article] = await Promise.all([
      Article.countDocuments(),
      Article.find()
        .populate("category", "name")
        .sort({ createdAt: -1 })
        .skip(desde)
        .limit(parseInt(limit)),
    ]);
    console.log(total, article);
    if (article) {
      return JSON.stringify({ status: 200, article, total });
    }
    return JSON.stringify({ status: 400, message: "Error al crear articulo" });
  } catch (error) {
    return JSON.stringify({ error: "Internal Server Error" });
  }
};
export const deleteArticle = async (id: string) => {
  console.log("delete", id);
  try {
    const resp = await Article.deleteOne({ _id: id });

    if (resp) {
      return JSON.stringify({
        status: 200,
        message: "Articulo eliminado correctamente",
      });
    }
    return JSON.stringify({ status: 400, message: "Error al crear articulo" });
  } catch (error) {
    return JSON.stringify({ error: "Internal Server Error" });
  }
};
export const getArticleSlug = async (slug: string) => {
  try {
    const article = await Article.findOne({ slug });
    if (article) {
      return JSON.stringify({ status: 200, article });
    }
    return JSON.stringify({ status: 400, message: "Error al crear articulo" });
  } catch (error) {
    return JSON.stringify({ error: "Internal Server Error" });
  }
};

export const createCategory = async (name: string) => {
  try {
    // Conectamos a la base de datos antes de usar el modelo
    await connectDB();
    // Creamos una nueva instancia del modelo
    const categoria = new CategoryArticle({ name });
    // Guardamos la nueva categoría
    const result = await categoria.save();
    // Verificamos si se guardó correctamente
    if (result) {
      return { status: 200, message: "Categoria creada correctamente" };
    }
    return { status: 400, message: "Error al crear categoria" };
  } catch (error) {
    console.log("Error", error);
    return { status: 500, message: "Error en el servidor" };
  }
};

export const getCategories = async () => {
  try {
    // Conectamos a la base de datos antes de usar el modelo
    await connectDB();

    const result = await CategoryArticle.find();
    // Verificamos si se guardó correctamente
    console.log("result", result);
    if (result) {
      return JSON.stringify(result);
    }
    return JSON.stringify({ error: "no se encontraron categorias" });
  } catch (error) {
    console.log("Error", error);
    return JSON.stringify({ error: "Internal Server Error" });
  }
};

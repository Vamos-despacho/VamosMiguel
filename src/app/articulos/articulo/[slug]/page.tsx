import ShowArticless from "@/components/ShowArticless";
import { Metadata, ResolvingMetadata } from "next";
import { getArticleSlug } from "@/libs/articulos/actions";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const article = await fetchArticulos(params.slug);

  // Define la imagen por defecto en caso de que no haya una específica
  const image = article?.imageUrl || "https://vamosmiguelangel.com/icon2.png";

  // Genera la descripción con un límite de caracteres
  const description = article?.content ? article.content.slice(0, 150) : "";

  return {
    title: `Miguel Ángel | ${article?.title || "Artículo"}`,
    description: `${description}...`,
    openGraph: {
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: article?.title,
      description,
      images: [image],
    },
  };
}

async function fetchArticulos(slug: string) {
  const resp = await getArticleSlug(slug);
  const { article } = JSON.parse(resp);
  return article;
}

const Articulo = async ({ params }: Props) => {
  const article = await fetchArticulos(params.slug);

  if (!article) return <div>Cargando...</div>;

  return (
    <div className="flex-auto">
      <ShowArticless article={article} />
    </div>
  );
};

export default Articulo;

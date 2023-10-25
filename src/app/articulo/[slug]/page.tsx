import axios from 'axios'

async function getArticle(slug: string) {
    try {
        const res = await axios(`/api/articulos/slug/${slug}`);
        return res.data;
    } catch (error) {
        console.error('Error fetching article:', error);
        // Puedes mostrar un mensaje de error en lugar de retornar null.
        return <div>Error: No se pudo cargar el artículo.</div>;
    }
}

const Articulo = async ({ params }: { params: { slug: string } }) => {
    const articulo = await getArticle(params.slug)
    if (!articulo) return <div>loading...</div>
    return (
        <div className='  flex-auto '>
            {/* <ShowArticle article={articulo} /> */}

            <div>{JSON.stringify(articulo)}</div>
        </div>
    )
}

export default Articulo
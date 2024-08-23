import connectDB from "@/lib/mongodb";
import Categoria from "@/models/Comision";

export async function POST(request: Request) {
    try {
        // Conéctate a la base de datos
        await connectDB();

        // Obtén los valores del cuerpo de la solicitud
        const values = await request.json();
        console.log(values)
        // Crea un nuevo documento de Categoria
        const categoria = new Categoria(values);

        // Guarda el documento en la base de datos
        const result = await categoria.save();

        console.log(result);

        // Retorna una respuesta exitosa con el resultado
        return new Response(JSON.stringify(result), { status: 200 });

    } catch (error) {
        console.error('Error:', error);
        // Retorna una respuesta de error en caso de que algo falle
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}

export async function GET(request: Request) {
    console.log('first++++++++')
    try {
        // Conéctate a la base de datos
        await connectDB();

        // Busca todas las categorías en la base de datos
        const categorias = await Categoria.find();
        console.log(categorias)
        // Retorna una respuesta exitosa con las categorías encontradas
        return new Response(JSON.stringify(categorias), { status: 200 });

    } catch (error) {
        console.error('Error:', error);
        // Retorna una respuesta de error en caso de que algo falle
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}
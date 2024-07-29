"use server"
import connectDB from "@/lib/mongodb";
import Events from "@/models/Events";

export async function POST(request: Request) {
    try {
        const values = await request.json(); // Obtén los valores del cuerpo de la solicitud
        await connectDB();
        const event = new Events(values);
        const result = await event.save();
        return new Response(JSON.stringify(result), { status: 200 }); // Retorna una respuesta exitosa con el resultado
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 }); // Retorna una respuesta de error
    }
}

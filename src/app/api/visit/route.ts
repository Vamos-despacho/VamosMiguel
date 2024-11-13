import connectDB from "@/lib/mongodb";
import Visit from "@/models/Visit";

export default async function handler(req: Request, res: Response) {
  console.log("visit api++++++++++++++");
  await connectDB();

  // Obtén la fecha de hoy sin hora para hacer la consulta
  const today = new Date().setHours(0, 0, 0, 0);

  try {
    // Busca si ya hay un registro de visitas para el día de hoy
    const visit = await Visit.findOneAndUpdate(
      { date: today },
      { $inc: { count: 1 } }, // Incrementa el contador en 1
      { new: true, upsert: true } // Crea un nuevo documento si no existe
    );
    return new Response(JSON.stringify(visit), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}

"use server";
import connectDB from "@/lib/mongodb";
import Visit from "../../models/Visit";

export const visitConterPost = async () => {
  // Asegúrate de que la conexión a la base de datos está establecida
  await connectDB();

  try {
    // Obtener la fecha actual en UTC y establecer la hora a medianoche
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);

    // Actualizar o insertar el documento de visita
    await Visit.updateOne(
      { date: today },
      { $inc: { count: 1 } },
      { upsert: true }
    );

    // No es necesario retornar nada
  } catch (error) {
    console.error("Error actualizando visitas:", error);
    // Si lo deseas, puedes manejar el error de otra manera o lanzarlo para que sea capturado en otro lugar
    // throw error;
  }
};

export const visitConterGet = async () => {
  await connectDB();

  // Obtén la fecha de hoy sin hora para hacer la consulta

  try {
    // Busca si ya hay un registro de visitas para el día de hoy
    const visit = await Visit.find();

    return JSON.stringify(visit);
  } catch (error) {
    console.error(error);
    return JSON.stringify({ error: "Error actualizando visitas" });
  }
};

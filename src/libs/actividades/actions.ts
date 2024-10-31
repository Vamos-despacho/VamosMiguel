"use server";

import { IIEvent, IIEventos } from "@/interface/event";
import connectDB from "@/lib/mongodb";
import { Event } from "@/models/Events";
import { env } from "process";

// export const getActivitesDate = async (month: number, year: number) => {
//     if (!month || !year) {
//         return [];
//     }
//     try {
//         // Conectar a la base de datos
//         await connectDB();

//         const startOfMonth = new Date(year, month - 1, 1);
//         const startDate = new Date(startOfMonth);
//         startDate.setDate(startDate.getDate() - 6);

//         const endOfMonth = new Date(year, month, 0);
//         const endDate = new Date(endOfMonth);
//         endDate.setDate(endDate.getDate() + 6);

//         const events = await Event.find({
//             date: {
//                 $gte: startDate,
//                 $lte: endDate,
//             },
//         });

//         const formattedEvents = events.map(event => ({
//             ...event.toObject(),
//             date: new Date(event.date),
//         }));
//         console.log({ events })
//         console.log({ formattedEvents })
//         return formattedEvents;

//     } catch (error) {
//         console.error('Error:', error);
//         return [];
//     }
// };

// export const getActivitesDate = async (month: number, year: number): Promise<IIEvent[]> => {
//     if (!month || !year) {
//         return [];
//     }
//     try {
//         await connectDB();

//         const startOfMonth = new Date(year, month - 1, 1);
//         const startDate = new Date(startOfMonth);
//         startDate.setDate(startDate.getDate() - 6);

//         const endOfMonth = new Date(year, month, 0);
//         const endDate = new Date(endOfMonth);
//         endDate.setDate(endDate.getDate() + 6);

//         // Obtener eventos desde MongoDB y convertir a objetos simples
//         const events = await Event.find({
//             date: {
//                 $gte: startDate,
//                 $lte: endDate,
//             },
//         }).lean();

//         // Formatear los eventos para asegurarse de que solo contienen datos simples
//         const formattedEvents: IIEvent[] = events.map((event: any) => ({
//             ...event,
//             id: event._id.toString(), // Convertir _id a string
//             _id: undefined, // Eliminar _id si no es necesario
//         }));

//         console.log('formattedEvents', formattedEvents);
//         return formattedEvents;
//     } catch (error) {
//         console.error('Error:', error);
//         return [];
//     }
// };
export const getActivitesDate = async (
  month: number,
  year: number
): Promise<IIEvent[]> => {
  console.log("actividadesDAe+++");

  if (!month || !year) {
    return [];
  }
  try {
    await connectDB();

    const startOfMonth = new Date(year, month - 1, 1);
    const startDate = new Date(startOfMonth);
    startDate.setDate(startDate.getDate() - 6);

    const endOfMonth = new Date(year, month, 0);
    const endDate = new Date(endOfMonth);
    endDate.setDate(endDate.getDate() + 6);

    // Obtener eventos desde MongoDB y convertir a objetos simples
    const events = await Event.find({
      date: {
        $gte: startDate,
        $lte: endDate,
      },
    }).lean();

    return JSON.parse(JSON.stringify(events));
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
export const getPlenoVideo = async () => {
  try {
    await connectDB();
    // Obtener eventos desde MongoDB y convertir a objetos simples

    // const resultados = await Event.find(
    //   {},
    //   "eventos.nombre eventos.event.idsYoutube"
    // );

    // // Filtrar eventos con nombre "Pleno" y extraer idsYoutube
    // const idsYoutube = resultados.flatMap(
    //   (resultado) =>
    //     resultado.eventos
    //       .filter((evento: IIEventos) => evento.nombre === "Pleno") // Filtrar solo eventos con nombre "Pleno"
    //       .flatMap((evento: IIEventos) => evento.event.idsYoutube) // Extraer los idsYoutube
    // );

    // Encuentra solo los eventos que contienen "Pleno" y proyecta solo los campos necesarios
    const resultados = await Event.find(
      { "eventos.nombre": "Pleno" }, // Filtro para que solo traiga eventos con nombre "Pleno"
      "date eventos.nombre eventos.event.idsYoutube" // Proyección de campos necesarios
    ).sort({ createdAt: -1 });

    // Filtramos y transformamos los resultados para obtener solo `date` e `idsYoutube` de los eventos "Pleno"
    // const plenoVideos = resultados.flatMap((resultado) => {
    //   return resultado.eventos
    //     .filter((evento: IIEventos) => evento.nombre === "Pleno") // Filtra eventos "Pleno"
    //     .flatMap((evento: any) => ({
    //       date: resultado.date,
    //       idsYoutube: evento.event.idsYoutube,
    //     }));
    // });

    const plenoVideos = resultados.flatMap((resultado) => {
      return resultado.eventos
        .filter(
          (evento: IIEventos) =>
            evento.nombre === "Pleno" &&
            evento.event?.idsYoutube !== undefined && // Verifica que `idsYoutube` esté definido
            evento.event.idsYoutube.length > 0 // Verifica que `idsYoutube` no esté vacío
        )
        .map((evento: any) => ({
          date: resultado.date,
          idsYoutube: evento.event!.idsYoutube, // Usa el operador `!` porque ya comprobamos que no es `undefined`
        }));
    });

    return JSON.stringify(plenoVideos);
  } catch (error) {
    console.error("Error:", error);
    return JSON.stringify({ error: "Error" });
  }
};

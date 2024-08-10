
// Definición de los tipos para cada evento en TypeScript
interface IEventDetails {
    idsYoutube?: string[]; // Aquí puedes usar el ID del video o algún identificador
    linkInstagram?: string[]; // URLs de Instagram
    eventoImagen?: {
        linkImagen: string[];
        titulo: string;
        descripcion?: string;
    }[]; // Arreglo de imágenes con detalles
    anteproyecto?: string; // URL o identificador del anteproyecto
    proyecto?: string; // URL o identificador del proyecto
    reforma?: string; // URL o identificador de la reforma
}

interface IEventos {
    _id: string;
    nombre: string;
    event: IEventDetails; // Detalles del evento
}

export interface IIEvent extends Document {
    _id: string;
    date: Date;
    eventos: IEventos[]; // Lista de eventos en el día
    createdAt: Date; // Fecha de creación
    updatedAt: Date; // Fecha 
}
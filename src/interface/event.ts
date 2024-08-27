
// Definición de los tipos para cada evento en TypeScript
export interface IIEventDetails {
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

export interface IIEventos {
    _id: string;
    nombre: string;
    event: IIEventDetails; // Detalles del evento
}

export interface IIEvent extends Document {
    id: string;
    date: Date;
    eventos: IIEventos[]; // Lista de eventos en el día
    createdAt: Date; // Fecha de creación
    updatedAt: Date; // Fecha 
}
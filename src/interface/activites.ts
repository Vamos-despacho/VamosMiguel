import mongoose from "mongoose";

export interface IEventDetails {
    evento: string;
    idsYoutube?: string[]; // Aquí puedes usar el ID del video o algún identificador
    linkInstagram?: string[]; // URLs de Instagram
    fotos?: string[]; // URLs o identificadores de fotos
    anteproyecto?: string; // URL o identificador del anteproyecto
    proyecto?: string; // URL o identificador del proyecto
    reforma?: string; // URL o identificador de la reforma
}
export interface IOtrosEventos {
    evento: string;
    idsYoutube?: string[];
    linkInstagram?: string[];
    eventoImagen?: [
        {
            linkImagen: string[];
            titulo: string;
            descripcion: string;
        }
    ]
}
export interface IEventos {
    nombre: string;
    estado: boolean;

}
export interface IEvent {
    date: Date;
    eventos: IEventos[];
    pleno?: IEventDetails;
    salud?: IEventDetails;
    educacion?: IEventDetails;
    otros?: IOtrosEventos;
}



export interface PopulatedCategory {
    _id: mongoose.Types.ObjectId;
    label: string; // El label de la categoría poblada
    icon: string; // El icono de la categoría poblada
}


export interface IMesDocument extends Document {
    _id: mongoose.Types.ObjectId; // ID
    createdAt: Date; // Fecha de creación
    updatedAt: Date; // Fecha de última modificación
    month: Date; // Mes en formato de fecha
    categorias: {
        categoria: PopulatedCategory; // Referencia a la categoría
        asistencia: number; // Porcentaje de asistencia para la categoría en el mes
    }[];
}
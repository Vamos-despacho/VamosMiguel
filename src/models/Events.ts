import mongoose, { Schema, Document } from 'mongoose';

// Definición de los tipos para cada evento en TypeScript
interface IEventDetails {
    idsYoutube?: string[]; // IDs de videos de YouTube
    linkInstagram?: string[]; // URLs de Instagram
    eventoImagen?: {
        linkImagen: string[]; // URLs de las imágenes
        titulo: string; // Título de la imagen
        descripcion?: string; // Descripción opcional de la imagen
    }[]; // Arreglo de imágenes con detalles
    anteproyecto?: string; // URL o identificador del anteproyecto
    proyecto?: string; // URL o identificador del proyecto
    reforma?: string; // URL o identificador de la reforma
}

interface IEventos {
    nombre: string;
    event: IEventDetails; // Detalles del evento
}

export interface IEvent extends Document {
    date: Date;
    eventos: IEventos[]; // Lista de eventos en el día
    createdAt: Date; // Fecha de creación
    updatedAt: Date; // Fecha de última modificación
}

// Esquema de Mongoose para IEvent
const EventSchema: Schema = new Schema({
    date: { type: Date, required: true },
    eventos: [{
        nombre: { type: String, required: true },
        event: {
            idsYoutube: [{ type: String }],
            linkInstagram: [{ type: String }],
            eventoImagen: [{
                linkImagen: [{ type: String }],
                titulo: { type: String },
                descripcion: { type: String }
            }],
            anteproyecto: { type: String },
            proyecto: { type: String },
            reforma: { type: String }
        }
    }]
}, {
    timestamps: true // Agrega createdAt y updatedAt automáticamente
});

// Verificar si el modelo ya existe antes de crearlo
const Event = mongoose.models.Event || mongoose.model<IEvent>('Event', EventSchema);

export { Event };

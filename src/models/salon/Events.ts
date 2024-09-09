import { IEventDeporte } from '@/interface/atletas';
import mongoose, { Schema, model, Document } from 'mongoose';

const EventSchema = new Schema<IEventDeporte>({
    name: { type: String, required: true, maxlength: 100 }, // Máximo de caracteres
    year: {
        type: Number,
        required: true,
        min: [1900, 'Año no puede ser menor a 1900'], // Límite inferior razonable
        max: [new Date().getFullYear() + 5, 'Año no puede ser mayor a 5 años en el futuro'] // Previsión a futuro
    },
    location: { type: String, required: true, maxlength: 200 }, // Limitar longitud de ubicación
    description: { type: String, required: true, maxlength: 500 }, // Limitar descripción
    participants: [{ type: Schema.Types.ObjectId, ref: 'Deportista' }], // Referencia a otra colección
}, { timestamps: true }); // Timestamps agrega createdAt y updatedAt

// Usa modelos ya registrados o crea uno nuevo
const Event = mongoose.models.Event || mongoose.model<IEventDeporte>('Event', EventSchema);

export { Event };

import mongoose, { Schema, Document, Model } from 'mongoose';

export interface MesDocument extends Document {
    month: Date; // Mes en formato de fecha
    categorias: {
        categoria: mongoose.Types.ObjectId; // Referencia a la categoría
        asistencia: number; // Porcentaje de asistencia para la categoría en el mes
    }[];
}

// Define el esquema para Mes
const MesSchema = new Schema<MesDocument>(
    {
        month: { type: Date, required: true }, // Cambiado a tipo Date
        categorias: [{
            categoria: { type: Schema.Types.ObjectId, ref: 'Categoria', required: true }, // Referencia a la categoría
            asistencia: { type: Number, default: 0 }, // Asistencia de la categoría en el mes
        }],
    },
    {
        timestamps: true, // Agrega createdAt y updatedAt automáticamente
    });

// Verifica si el modelo ya ha sido compilado para evitar sobrescribirlo
const MesModel: Model<MesDocument> = mongoose.models.Mes || mongoose.model<MesDocument>('Mes', MesSchema);

export default MesModel;

import mongoose, { Schema, Document, Model } from 'mongoose';

export interface MesDocument extends Document {
    month: Date; // Mes en formato de fecha
    categorias: {
        categoria: mongoose.Types.ObjectId; // Referencia a la categoría
        asistencia: number; // Porcentaje de asistencia para la categoría en el mes
    }[];
}

// Define el esquema para Mes
const MesSchema = new Schema<MesDocument>({
    month: { type: Date, required: true }, // Cambiado a tipo Date
    categorias: [{
        categoria: { type: Schema.Types.ObjectId, ref: 'Categoria', required: true }, // Referencia a la categoría
        asistencia: { type: Number, required: true }, // Asistencia de la categoría en el mes
    }],
});

// Crea el modelo basado en el esquema
const MesModel: Model<MesDocument> = mongoose.model<MesDocument>('Mes', MesSchema);

export default MesModel;

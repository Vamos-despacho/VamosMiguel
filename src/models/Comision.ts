// import mongoose, { Schema, Document, Model } from 'mongoose';

// // Define la interfaz para Categoria
// export interface CategoriaDocument extends Document {
//     label: string;
//     key: string;
//     icon: string;  // Guardamos el nombre del icono como string
// }

// // Define el esquema para Categoria
// const CategoriaSchema = new Schema<CategoriaDocument>({
//     label: { type: String, required: true },
//     key: { type: String, required: true },
//     icon: { type: String, required: true }, // Guardamos el nombre del icono como string
// });

// // Crea el modelo basado en el esquema
// const Categoria: Model<CategoriaDocument> = mongoose.model<CategoriaDocument>('Categoria', CategoriaSchema);

// export default Categoria;
import mongoose, { Schema, Document, Model } from 'mongoose';

// Define la interfaz para Categoria
export interface CategoriaDocument extends Document {
    label: string;
    key: string;
    icon: string;  // Guardamos el nombre del icono como string
}

// Define el esquema para Categoria
const CategoriaSchema = new Schema<CategoriaDocument>({
    label: { type: String, required: true },
    key: { type: String, required: true },
    icon: { type: String, required: true }, // Guardamos el nombre del icono como string
});

// Verifica si el modelo ya existe antes de crearlo
const Categoria: Model<CategoriaDocument> = mongoose.models.Categoria || mongoose.model<CategoriaDocument>('Categoria', CategoriaSchema);

export default Categoria;

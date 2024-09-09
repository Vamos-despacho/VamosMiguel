import mongoose, { Schema, Document, model } from 'mongoose';

interface IProvince extends Document {
    name: string;
}

const ProvinceSchema = new Schema<IProvince>({
    name: { type: String, required: true },
});

// Verifica si el modelo ya ha sido registrado
const Province = mongoose.models.Province || model<IProvince>('Province', ProvinceSchema);

export default Province;

import mongoose, { Schema, model, Document } from 'mongoose';

interface IAchievements {
    year: number;
    event: string;
    position: string;
    location: string;
}

interface ISport {
    discipline: string;
    category: string;
}

interface IDeportista extends Document {
    name: string;
    birthDate: Date;
    province: Schema.Types.ObjectId; // Referencia a Province
    sports: ISport[];
    achievements: IAchievements[];
    biography: string;
    image: string;
    activeYears: string;
    isHighlighted: boolean;
    hallOfFameYear?: number;
    events: Schema.Types.ObjectId[];
}

const AchievementsSchema = new Schema<IAchievements>({
    year: { type: Number, required: true },
    event: { type: String, required: true },
    position: { type: String, required: true },
    location: { type: String, required: true },
});

const SportSchema = new Schema<ISport>({
    discipline: { type: String, required: true },
    category: { type: String, required: true },
});

const DeportistaSchema = new Schema<IDeportista>({
    name: { type: String, required: true },
    birthDate: { type: Date, required: true },
    province: { type: Schema.Types.ObjectId, ref: 'Province', required: true },
    sports: { type: [SportSchema], required: true },
    achievements: { type: [AchievementsSchema], required: true },
    biography: { type: String, required: true },
    image: { type: String, required: true },
    activeYears: { type: String, required: true },
    isHighlighted: { type: Boolean, default: false },
    hallOfFameYear: { type: Number },
    events: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
});

const Deportista = mongoose.models.Deportista || mongoose.model<IDeportista>('Deportista', DeportistaSchema);

export { Deportista };

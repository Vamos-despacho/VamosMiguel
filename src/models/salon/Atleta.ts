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

export interface IAtleta extends Document {
    name: string;
    birthDate: Date;
    province: Schema.Types.ObjectId; // Referencia a Province
    sports: ISport[];
    achievements: IAchievements[];
    biography: string;
    image?: string;
    activeYears: string;
    isHighlighted: boolean;
    hallOfFameYear?: number;
    events: Schema.Types.ObjectId[];
    state: boolean
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

interface IEventParticipation {
    event: Schema.Types.ObjectId; // Referencia al evento
    position?: string;             // Posición o premio obtenido
}
const EventParticipationSchema = new Schema<IEventParticipation>({
    event: { type: Schema.Types.ObjectId, ref: 'Event', required: true },
    position: { type: String },  // Nuevo campo para la posición o premio
});

const AtletaSchema = new Schema<IAtleta>({
    name: { type: String, required: true },
    state: { type: Boolean, default: false },
    birthDate: { type: Date },
    province: { type: Schema.Types.ObjectId, ref: 'Province', },
    biography: { type: String },
    image: { type: String },
    activeYears: { type: String },
    isHighlighted: { type: Boolean, default: false },
    hallOfFameYear: { type: Number },
    events: { type: [EventParticipationSchema] },  // Modificado para incluir posición
    sports: { type: [SportSchema] },
    achievements: { type: [AchievementsSchema] },
});

const Atleta = mongoose.models.Atleta || mongoose.model<IAtleta>('Atleta', AtletaSchema);

export { Atleta };

import { Schema } from "mongoose";

export interface IEventDeporte {
    _id: string;
    name: string;
    year: number;
    location: string;
    description: string;
    participants: Schema.Types.ObjectId[]; // Referencia a los deportistas
}

export interface IIAtleta {
    _id: string;
    name: string;
    birthDate: Date;
    province: string; // Referencia a Province
    biography: string;
    image?: string;
    activeYears: number;
    isHighlighted: boolean;
    hallOfFameYear?: number;
    events: IEventParticipation[];
    sports: ISport[];
    achievements: IAchievements[];
    state: boolean
}
export interface ISport {
    discipline: string;
    category: string;
}
export interface IAchievements {
    year: number;
    event: string;
    position: string;
    location: string;
}

export interface IEventParticipation {
    event: {
        _id: string,
        name: string,
    }; // Referencia al evento
    position?: string;             // Posición o premio obtenido
    _id: string;
}
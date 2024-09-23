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
    position?: string;
    _id: string;
    dicipline: string;
}

export interface IFAtleta {
    _id: string;
    name: string;
    birthDate: Date;
    province: string; // Referencia a Province
    biography: string;
    image?: string;
    activeYears: number;
    isHighlighted: boolean;
    hallOfFameYear?: number;
    events: IFEventParticipation[];
    sports: IFSport[];
    achievements: IFAchievements[];
    state: boolean
}

export interface IFEventParticipation {
    event: string
    position?: string;             // Posición o premio obtenido

    dicipline: string;
    _id: string;
}
export interface IFSport {
    discipline: string;
    category: string;
}
export interface IFAchievements {
    year: number;
    event: string;
    position: string;
    location: string;
}
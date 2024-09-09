import { Schema } from "mongoose";

export interface IEventDeporte {
    name: string;
    year: number;
    location: string;
    description: string;
    participants: Schema.Types.ObjectId[]; // Referencia a los deportistas
}
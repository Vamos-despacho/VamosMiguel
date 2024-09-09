import { Schema } from "mongoose";

export interface IEventDeporte {
    _id: string;
    name: string;
    year: number;
    location: string;
    description: string;
    participants: Schema.Types.ObjectId[]; // Referencia a los deportistas
}
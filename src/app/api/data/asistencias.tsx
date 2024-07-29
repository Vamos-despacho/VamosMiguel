import { IVideoYoutube } from "./videos";

export interface IEvent {
    date: Date;
    eventType: string;
    status: boolean;
    icon: string;
    videoYoutube?: IVideoYoutube;
}

export const events: IEvent[] = [
    {
        date: new Date(2024, 6, 2),
        eventType: "Pleno",
        status: true,
        icon: "ExitFullScreenIcon",
    },
    {
        date: new Date(2024, 6, 3),
        eventType: "Pleno",
        status: true,
        icon: "ExitFullScreenIcon",
    },
    {
        date: new Date(2024, 6, 4),
        eventType: "Pleno",
        status: true,
        icon: "ExitFullScreenIcon",
    },
    {
        date: new Date(2024, 6, 8),
        eventType: "Pleno",
        status: true,
        icon: "ExitFullScreenIcon",
    },
    {
        date: new Date(2024, 6, 9),
        eventType: "Pleno",
        status: true,
        icon: "ExitFullScreenIcon",
    },
    {
        date: new Date(2024, 6, 10),
        eventType: "Pleno",
        status: true,
        icon: "ExitFullScreenIcon",
    },
    {
        date: new Date(2024, 6, 11),
        eventType: "Pleno",
        status: true,
        icon: "ExitFullScreenIcon",
    },
    {
        date: new Date(2024, 6, 15),
        eventType: "Pleno",
        status: true,
        icon: "ExitFullScreenIcon",
    },
    {
        date: new Date(2024, 6, 16),
        eventType: "Pleno",
        status: true,
        icon: "ExitFullScreenIcon",
    },
    {
        date: new Date(2024, 6, 17),
        eventType: "Pleno",
        status: true,
        icon: "ExitFullScreenIcon",
    },
    {
        date: new Date(2024, 6, 18),
        eventType: "Pleno",
        status: true,
        icon: "ExitFullScreenIcon",
    },
    {
        date: new Date(2024, 6, 19),
        eventType: "Pleno",
        status: true,
        icon: "ExitFullScreenIcon",
    },
    {
        date: new Date(2024, 6, 16),
        eventType: "Salud",
        status: true,
        icon: "BsHeartPulse",
    },
    {
        date: new Date(2024, 6, 16),
        eventType: "Educación",
        status: true,
        icon: "SchoolIcon",
    },
    {
        date: new Date(2024, 6, 19),
        eventType: "Otros",
        status: true,
        icon: "MdOutlineMore",
    },
];
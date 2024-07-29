export interface IEventDetails {
    evento: string;
    idsYoutube?: string[]; // Aquí puedes usar el ID del video o algún identificador
    linkInstagram?: string[]; // URLs de Instagram
    fotos?: string[]; // URLs o identificadores de fotos
    anteproyecto?: string; // URL o identificador del anteproyecto
    proyecto?: string; // URL o identificador del proyecto
    reforma?: string; // URL o identificador de la reforma
}
export interface IOtrosEventos {
    evento: string;
    idsYoutube?: string[];
    linkInstagram?: string[];
    eventoImagen?: [
        {
            linkImagen: string[];
            titulo: string;
            descripcion: string;
        }
    ]
}
export interface IEventos {
    nombre: string;
    estado: boolean;

}
export interface IEvent {
    date: Date;
    eventos: IEventos[];
    pleno?: IEventDetails;
    salud?: IEventDetails;
    educacion?: IEventDetails;
    otros?: IOtrosEventos;
}
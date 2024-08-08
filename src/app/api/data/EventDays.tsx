// Definición de los tipos para cada evento
export interface IEventDetails {
    idsYoutube?: string[]; // Aquí puedes usar el ID del video o algún identificador
    linkInstagram?: string[]; // URLs de Instagram
    eventoImagen?: {
        linkImagen: string[];
        titulo: string;
        descripcion?: string;
    }[]; // Arreglo de imágenes con detalles
    anteproyecto?: string; // URL o identificador del anteproyecto
    proyecto?: string; // URL o identificador del proyecto
    reforma?: string; // URL o identificador de la reforma
}

export interface IEventos {
    nombre: string;
    event: IEventDetails; // Detalles del evento
}

export interface IEvent {
    date: Date;
    eventos: IEventos[]; // Lista de eventos en el día
}

// Ejemplo de eventos
export const events: IEvent[] = [
    {
        date: new Date(2024, 6, 2),
        eventos: [
            {
                nombre: "Pleno",
                event: {
                    idsYoutube: ['8VSgt-aAk7Y'],
                }
            }
        ]
    },
    {
        date: new Date(2024, 6, 3),
        eventos: [
            {
                nombre: "Pleno",
                event: {
                    idsYoutube: ['cOAzSJ4SqTg'],
                    eventoImagen: [
                        {
                            linkImagen: ['https://res.cloudinary.com/dl6oea68u/image/upload/v1720125718/VamosMA/dp98baum47ljffjbilkc.png'],
                            titulo: 'Presentación de anteproyecto: Transparencia y Equidad en Auxilios Económicos',
                            descripcion: 'Este anteproyecto propone prohibir el acceso a auxilios económicos para funcionarios de alto rango y sus familiares cuarto grado de consanguinidad y segundo de afinidad, promoviendo así la transparencia y equidad en la distribución de recursos educativos.'
                        }
                    ]
                }
            }
        ]
    },
    {
        date: new Date(2024, 6, 4),
        eventos: [
            {
                nombre: "Pleno",
                event: {
                    idsYoutube: ['8FZF3Chz50M'],
                }
            }
        ]
    },
    {
        date: new Date(2024, 6, 8),
        eventos: [
            {
                nombre: "Pleno",
                event: {
                    idsYoutube: ['bm4XIDW4v-M'],
                }
            }
        ]
    },
    {
        date: new Date(2024, 6, 9),
        eventos: [
            {
                nombre: "Pleno",
                event: {
                    idsYoutube: ['JrTa4y3lsAM'],
                }
            }
        ]
    },
    {
        date: new Date(2024, 6, 10),
        eventos: [
            {
                nombre: "Pleno",
                event: {}
            }
        ]
    },
    {
        date: new Date(2024, 6, 11),
        eventos: [
            {
                nombre: "Pleno",
                event: {
                    idsYoutube: ['cJKCXreAglk'],
                }
            }
        ]
    },
    {
        date: new Date(2024, 6, 15),
        eventos: [
            {
                nombre: "Pleno",
                event: {}
            }
        ]
    },
    {
        date: new Date(2024, 6, 16),
        eventos: [
            {
                nombre: "Pleno",
                event: {}
            }
        ]
    },
    {
        date: new Date(2024, 6, 17),
        eventos: [
            {
                nombre: "Pleno",
                event: {}
            }
        ]
    },
    {
        date: new Date(2024, 6, 18),
        eventos: [
            {
                nombre: "Pleno",
                event: {
                    idsYoutube: ['o6gJ5JGIfPU'],
                }
            }
        ]
    },
    {
        date: new Date(2024, 6, 19),
        eventos: [
            {
                nombre: "Otros",
                event: {
                    linkInstagram: ['https://www.instagram.com/p/C9oZMYzurXG'],
                }
            }
        ]
    },
    {
        date: new Date(2024, 6, 22),
        eventos: [
            {
                nombre: "Pleno",
                event: {
                    idsYoutube: ['EIeaKpatIDI'],
                }
            },
            {
                nombre: "Otros",
                event: {
                    linkInstagram: ['https://www.instagram.com/reel/C9v4gqXOo7v/?igsh=MThlbjV0cmRkeXJubg%3D%3D'],
                }
            }
        ]
    },
    {
        date: new Date(2024, 6, 23),
        eventos: [
            {
                nombre: "Pleno",
                event: {
                    idsYoutube: ['7sUHR-CT6QI'],
                }
            }
        ]
    },
    {
        date: new Date(2024, 6, 24),
        eventos: [
            {
                nombre: "Pleno",
                event: {
                    idsYoutube: ['AQmJSD6NL8Y', 'ONHEb8A4nQA'],
                }
            },
            {
                nombre: "Salud",
                event: {}
            }
        ]
    },
    {
        date: new Date(2024, 6, 25),
        eventos: [
            {
                nombre: "Pleno",
                event: {
                    idsYoutube: ['rq1XwsgjvjU'],
                }
            }
        ]
    },
    {
        date: new Date(2024, 6, 29),
        eventos: [
            {
                nombre: "Pleno",
                event: {}
            },
            {
                nombre: "Educación",
                event: {}
            }
        ]
    },
    {
        date: new Date(2024, 6, 30),
        eventos: [
            {
                nombre: "Pleno",
                event: {
                    idsYoutube: ['tYES-_JdAP0'],
                }
            },
            {
                nombre: "Otros",
                event: {
                    eventoImagen: [
                        {
                            linkImagen: ['https://res.cloudinary.com/dl6oea68u/image/upload/v1722443811/VamosMA/byttzkdiok8bxz9bqhx3.jpg'],
                            titulo: 'Reunión con el Ministro de Salud para Mejorar la Atención en Veraguas',
                            descripcion: 'Mantuvimos una reunión con el Ministro de Salud, Fernando Boyd, donde expusimos las urgentes necesidades de Veraguas. Discutimos las problemáticas del hospital Luis "Chicho" Fábrega, incluyendo la inestabilidad laboral del personal, la necesidad de mejorar la infraestructura, el banco de sangre y la urgencia de adquirir equipos médicos modernos.'
                        }
                    ]
                }
            }
        ]
    },
    {
        date: new Date(2024, 6, 31),
        eventos: [
            {
                nombre: "Pleno",
                event: {}
            }
        ]
    },
    {
        date: new Date(2024, 7, 1),
        eventos: [
            {
                nombre: "Pleno",
                event: {}
            }
        ]
    },
    {
        date: new Date(2024, 7, 2),
        eventos: [
            {
                nombre: "Otros",
                event: {
                    eventoImagen: [
                        {
                            linkImagen: ['https://res.cloudinary.com/dl6oea68u/image/upload/v1722898985/VamosMA/kthtkle39jhkbglsytvw.png'],
                            titulo: 'Reunión con el Grupo de Pacientes de Diálisis (Grupadi) y la Policlínica Horacio Díaz Gómez',
                            descripcion: 'Nos reunimos con representantes del Grupo de Pacientes de Diálisis (Grupadi) y el personal directivo de la Policlínica Horacio Díaz Gómez. En esta reunión, abordamos las problemáticas que enfrentan los pacientes debido a la falta de insumos y equipos médicos necesarios.'
                        }
                    ]
                }
            }
        ]
    },
    {
        date: new Date(2024, 7, 5),
        eventos: [
            {
                nombre: "Pleno",
                event: {
                    idsYoutube: ['EEKcDfg5IIM'],
                }
            }
        ]
    },
    {
        date: new Date(2024, 7, 6),
        eventos: [
            {
                nombre: "Pleno",
                event: {
                    idsYoutube: ['n5Yv3sNukXM'],
                    eventoImagen: [
                        {
                            linkImagen: ['https://res.cloudinary.com/dl6oea68u/image/upload/v1723138831/VamosMA/re3t673rmd6xxxn9rlnn.png'],
                            titulo: 'Presentación de anteproyecto: Alto Rendimiento Deportivo y Medicina Deportiva',
                            descripcion: 'Este anteproyecto busca proporcionar los recursos necesarios para elevar el nivel competitivo de nuestros atletas, implementar la medicina deportiva preventiva, y transformar el deporte en una cultura y una industria. Con un sólido respaldo en salud y entrenamiento, se garantizará el éxito internacional de nuestros deportistas y el desarrollo sostenible de nuestra industria deportiva.'
                        }
                    ]
                }
            },
            {
                nombre: "Otros",
                event: {
                    idsYoutube: ['GSVn1AppIr0'],
                }
            }
        ]
    },
    {
        date: new Date(2024, 7, 7),
        eventos: [

            {
                nombre: "Salud",
                event: {

                }
            },
            {
                nombre: "Pleno",
                event: {

                }
            },
        ]
    },
    {
        date: new Date(2024, 7, 8),
        eventos: [
            {
                nombre: "Pleno",
                event: {

                }
            },
        ]
    },
];


// Definición de los tipos para cada evento
export interface IEventDetails {

    idsYoutube?: string[]; // Aquí puedes usar el ID del video o algún identificador
    linkInstagram?: string[]; // URLs de Instagram
    eventoImagen?: [
        {
            linkImagen: string[];
            titulo: string;
            descripcion?: string;
        }
    ]
    anteproyecto?: string; // URL o identificador del anteproyecto
    proyecto?: string; // URL o identificador del proyecto
    reforma?: string; // URL o identificador de la reforma
}
// export interface IOtrosEventos {
//     evento: string;
//     idsYoutube?: string[];
//     linkInstagram?: string[];
//     eventoImagen?: [
//         {
//             linkImagen: string[];
//             titulo: string;
//             descripcion: string;
//         }
//     ]
// }
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
    otros?: IEventDetails;
}

// Ejemplo de eventos
export const events: IEvent[] = [
    {
        date: new Date(2024, 6, 2),
        eventos: [
            {
                nombre: "Pleno",
                estado: true
            },
        ],
        pleno:
        {
            idsYoutube: ['8VSgt-aAk7Y'],

        }



    },
    {
        date: new Date(2024, 6, 3),
        eventos: [
            {
                nombre: "Pleno",
                estado: true
            },

        ],
        pleno:
        {

            idsYoutube: ['cOAzSJ4SqTg'],
            eventoImagen: [
                {
                    linkImagen: ['https://res.cloudinary.com/dl6oea68u/image/upload/v1720125718/VamosMA/dp98baum47ljffjbilkc.png'],
                    titulo: 'Presentación de anteproyecto: Transparencia y Equidad en Auxilios Económicos',
                    descripcion: 'Este anteproyecto propone prohibir el acceso a auxilios económicos para funcionarios de alto rango y sus familiares cuarto grado de consanguinidad y segundo de afinidad, promoviendo así la transparencia y equidad en la distribución de recursos educativos.'
                }
            ]
        },

    },
    {
        date: new Date(2024, 6, 4),
        eventos: [
            {
                nombre: "Pleno",
                estado: true
            },

        ],
        pleno:
        {

            idsYoutube: ['8FZF3Chz50M'],
        },

    },
    {
        date: new Date(2024, 6, 5),
        eventos: [
            {
                nombre: "Pleno",
                estado: true
            },

        ],



    },
    {
        date: new Date(2024, 6, 8),
        eventos: [
            {
                nombre: "Pleno",
                estado: true
            },

        ],
        pleno:
        {

            idsYoutube: ['bm4XIDW4v-M'],
        },

    },
    {
        date: new Date(2024, 6, 9),
        eventos: [
            {
                nombre: "Pleno",
                estado: true
            },

        ],
        pleno:
        {

            idsYoutube: ['JrTa4y3lsAM'],
        },

    },
    {
        date: new Date(2024, 6, 10),
        eventos: [
            {
                nombre: "Pleno",
                estado: true
            },

        ],


    },
    {
        date: new Date(2024, 6, 11),
        eventos: [
            {
                nombre: "Pleno",
                estado: true
            },

        ],
        pleno:
        {

            idsYoutube: ['cJKCXreAglk'],
        },

    },
    {
        date: new Date(2024, 6, 12),
        eventos: [
            {
                nombre: "Pleno",
                estado: true
            },

        ],
    },
    {
        date: new Date(2024, 6, 15),
        eventos: [
            {
                nombre: "Pleno",
                estado: true
            },

        ],
    },
    {
        date: new Date(2024, 6, 16),
        eventos: [
            {
                nombre: "Pleno",
                estado: true
            },

        ],

    },
    {
        date: new Date(2024, 6, 17),
        eventos: [
            {
                nombre: "Pleno",
                estado: true
            },

        ],
    },
    {
        date: new Date(2024, 6, 18),
        eventos: [
            {
                nombre: "Pleno",
                estado: true
            },

        ],
        pleno:
        {

            idsYoutube: ['o6gJ5JGIfPU'],
        },

    },
    {
        date: new Date(2024, 6, 19),
        eventos: [
            {
                nombre: "Pleno",
                estado: true
            },

        ],
    },
    {
        date: new Date(2024, 6, 20),
        eventos: [
            {
                nombre: "Otros",
                estado: true
            },

        ],
        otros:
        {
            linkInstagram: ['https://www.instagram.com/p/C9oZMYzurXG'],
        },
    },
    {
        date: new Date(2024, 6, 22),
        eventos: [
            {
                nombre: "Pleno",
                estado: true
            },

        ],
        pleno:
        {

            idsYoutube: ['EIeaKpatIDI'],
        },

    },
    {
        date: new Date(2024, 6, 23),
        eventos: [
            {
                nombre: "Pleno",
                estado: true
            },

        ],
        pleno:
        {

            idsYoutube: ['7sUHR-CT6QI'],
        },

    },
    {
        date: new Date(2024, 6, 24),
        eventos: [
            {
                nombre: "Pleno",
                estado: true
            }, {
                nombre: "Salud",
                estado: true
            }

        ],
        pleno:
        {
            idsYoutube: ['AQmJSD6NL8Y', 'ONHEb8A4nQA'],
        },

    },
    {
        date: new Date(2024, 6, 25),
        eventos: [
            {
                nombre: "Pleno",
                estado: true
            },

        ],
        pleno:
        {


            idsYoutube: ['rq1XwsgjvjU'],
        },

    },
    {
        date: new Date(2024, 6, 26),
        eventos: [
            {
                nombre: "Pleno",
                estado: true
            },

        ],
        pleno:
        {


            idsYoutube: ['8VSgt-aAk7Y'],
        },

    },
    {
        date: new Date(2024, 6, 29),
        eventos: [
            {
                nombre: "Pleno",
                estado: true
            },
            {
                nombre: "Educación",
                estado: true
            }

        ],
    },
    {
        date: new Date(2024, 6, 30),
        eventos: [
            {
                nombre: "Pleno",
                estado: true
            },
            {
                nombre: "Otros",
                estado: true
            }
        ],
        otros:
        {

            idsYoutube: ['cOAzSJ4SqTg'],
            eventoImagen: [
                {
                    linkImagen: ['https://res.cloudinary.com/dl6oea68u/image/upload/v1722443811/VamosMA/byttzkdiok8bxz9bqhx3.jpg'],
                    titulo: 'Reunión con el Ministro de Salud para Mejorar la Atención en Veraguas',
                    descripcion: 'Mantuvimos una reunión con el Ministro de Salud, Fernando Boyd, donde expusimos las urgentes necesidades de Veraguas. Discutimos las problemáticas del hospital Luis "Chicho" Fábrega, incluyendo la inestabilidad laboral del personal, la necesidad de mejorar la infraestructura, el banco de sangre y la urgencia de adquirir equipos médicos modernos.'
                }
            ]
        },
        pleno:
        {

            idsYoutube: ['cOAzSJ4SqTg'],
            linkInstagram: ['https://www.instagram.com/p/C9oZMYzurXG'],
            eventoImagen: [
                {
                    linkImagen: ['https://res.cloudinary.com/dl6oea68u/image/upload/v1722437609/VamosMA/tmfuit86bcp9wpijesyj.jpg'],
                    titulo: 'Reunión con el Ministro de Salud para Mejorar la Atención en Veraguas',
                    descripcion: 'Mantuvimos una reunión con el Ministro de Salud, Fernando Boyd, donde expusimos las urgentes necesidades de Veraguas. Discutimos las problemáticas del hospital Luis "Chicho" Fábrega, incluyendo la inestabilidad laboral del personal, la necesidad de mejorar la infraestructura, el banco de sangre y la urgencia de adquirir equipos médicos modernos.'
                }
            ]
        },
    },
]


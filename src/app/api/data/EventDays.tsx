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
    LinkArticulo?: string; // URL de la noticia
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
                            linkImagen: ['https://res.cloudinary.com/dl6oea68u/image/upload/v1723493842/VamosMA/okdvyqw2otghhzb2ce37.jpg'],
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
    {
        date: new Date(2024, 7, 9),
        eventos: [
            {
                nombre: "Otros",
                event: {
                    eventoImagen: [
                        {
                            linkImagen: ['https://res.cloudinary.com/dl6oea68u/image/upload/v1723495867/VamosMA/xocmeimbht0htosf3zuq.jpg'],
                            titulo: 'Visita a la Sala de Hemodiálisis en la Policlínica Horacio Díaz Gómez',
                            descripcion: 'Durante nuestra visita a la sala de hemodiálisis, conversamos directamente con los pacientes y el personal médico, observando de primera mano las condiciones en las que reciben tratamiento. Esta experiencia nos permitió comprender mejor las necesidades urgentes de insumos y equipos médicos, y reafirmar nuestro compromiso de buscar soluciones para mejorar la atención y calidad de vida de los pacientes.'
                        }
                    ]
                }
            },
        ]
    },
    {
        date: new Date(2024, 7, 12),
        eventos: [
            {
                nombre: "Pleno",
                event: {

                }
            },
        ]
    },
    {
        date: new Date(2024, 7, 13),
        eventos: [
            {
                nombre: "Pleno",
                event: {

                }
            },

        ]
    },
    {
        date: new Date(2024, 7, 14),
        eventos: [
            {
                nombre: "Pleno",
                event: {
                    idsYoutube: ['IDk0v8GkFjs', 'hVvN445FqMk'],
                    eventoImagen: [
                        {
                            linkImagen: ['https://res.cloudinary.com/dl6oea68u/image/upload/v1724082808/VamosMA/j3x13wpwjh62qmp9eqzx.jpg'],
                            titulo: 'Presentación de Anteproyecto que Modifica la Ley 16 de 1995: Reorganización del Instituto de Deportes y Normativas Antidopaje',
                            descripcion: 'Este anteproyecto de ley modifica la Ley 16 de 1995 para reorganizar el Instituto Nacional de Deportes, incluyendo los artículos 15K, 15L, y 15M, con la finalidad de velar por el cumplimiento de las normas nacionales e internacionales sobre el uso y control de sustancias y métodos prohibidos, según la Organización Nacional Antidopaje de Panamá (ONAD-PAN).'
                        }
                    ]
                }
            },
            {
                nombre: "Salud",
                event: {
                }
            },
        ]
    },
    {
        date: new Date(2024, 7, 19),
        eventos: [
            {
                nombre: "Pleno",
                event: {
                    idsYoutube: ['mGtMdRQjr2M'],
                }
            },

        ]
    },
    {
        date: new Date(2024, 7, 20),
        eventos: [
            {
                nombre: "Pleno",
                event: {
                    idsYoutube: ['iiXg9wc1apY'],
                }
            },
            {
                nombre: "Otros",
                event: {
                    eventoImagen: [
                        {
                            linkImagen: ['https://res.cloudinary.com/dl6oea68u/image/upload/v1724250419/VamosMA/bfehzihcav0lbggmujch.jpg'],
                            titulo: 'Entrevistas Públicas para Contralor y Subcontralor',
                            descripcion: 'Participé en las entrevistas de los candidatos a Contralor y Subcontralor, organizadas por la Bancada Independiente Vamos, con el objetivo de evaluar y seleccionar a los aspirantes más capacitados. Las entrevistas se realizaron de forma pública para garantizar transparencia y permitir que la ciudadanía y la Asamblea Nacional sigan el proceso.'
                        }
                    ]
                }
            }

        ]
    },
    {
        date: new Date(2024, 7, 21),
        eventos: [
            {
                nombre: "Pleno",
                event: {

                }
            },
            {
                nombre: "Educación",
                event: {
                    eventoImagen: [
                        {
                            linkImagen: ['https://res.cloudinary.com/dl6oea68u/image/upload/v1724428214/VamosMA/eixourckgaobvydic8ls.jpg'],
                            titulo: 'Compromiso en la Comisión de Educación, Cultura y Deportes',
                            descripcion: 'Participé en las sesiones de la Comisión, donde se realizaron los prohijamientos de diversos anteproyectos presentados, trabajando para impulsar iniciativas que fortalezcan la educación, la cultura y el deporte en nuestra comunidad.'
                        }
                    ]
                }
            },
            {
                nombre: "Salud",
                event: {
                    eventoImagen: [
                        {
                            linkImagen: ['https://res.cloudinary.com/dl6oea68u/image/upload/v1724426339/VamosMA/pb1b7jt6x9ka1is0nmxl.jpg'],
                            titulo: 'Participación en la Comisión de Trabajo, Salud y Desarrollo Social',
                            descripcion: 'Presente en las sesiones de la Comisión de Trabajo, Salud y Desarrollo Social, contribuyendo al análisis y discusión de las propuestas de expertos sobre la Caja de Seguro Social (IVM) para el bienestar laboral y la salud de todos los asegurados.'
                        }
                    ]
                }
            }

        ]
    },
    {
        date: new Date(2024, 7, 22),
        eventos: [
            {
                nombre: "Pleno",
                event: {
                    idsYoutube: ['_s0qFTmxopQ'],
                }
            },
        ]
    },
    {
        date: new Date(2024, 7, 26),
        eventos: [
            {
                nombre: "Pleno",
                event: {
                    idsYoutube: ['x6KiN-jglrM'],
                }
            },
        ]
    },
    {
        date: new Date(2024, 7, 27),
        eventos: [
            {
                nombre: "Pleno",
                event: {
                    idsYoutube: ['fzIuMcxqRuk'],
                }
            },
        ]
    },
    {
        date: new Date(2024, 7, 28),
        eventos: [
            {
                nombre: "Pleno",
                event: {

                }
            },
            {
                nombre: "Salud",
                event: {

                }
            }
        ]
    },
];

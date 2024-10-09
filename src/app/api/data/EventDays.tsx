import { id } from 'date-fns/locale';
import { X } from 'lucide-react';

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
            },
            {
                nombre: "Otros",
                event: {
                    eventoImagen: [
                        {
                            linkImagen: ['https://res.cloudinary.com/dl6oea68u/image/upload/v1725029566/VamosMA/j9husmfuqtgslzqjwuzk.jpg'],
                            titulo: 'Fortaleciendo la Integridad Deportiva en Panamá',
                            descripcion: 'Conversatorio con la World Anti-Doping Agency (WADA), se revisaron políticas actuales, analizaron casos recientes de dopaje y se exploraron nuevas estrategias para mejorar la eficacia de las pruebas en Panamá. Durante el evento, se discutieron aspectos técnicos y administrativos para fortalecer los mecanismos de control antidopaje y garantizar la integridad en el deporte, reafirmando el compromiso con la transparencia y la ética.'
                        }
                    ]
                }
            }
        ]
    },
    {
        date: new Date(2024, 7, 29),
        eventos: [
            {
                nombre: "Pleno",
                event: {

                }
            },
        ]
    },
    {
        date: new Date(2024, 7, 30),
        eventos: [
            {
                nombre: "Otros",
                event: {
                    eventoImagen: [
                        {
                            linkImagen: ['https://res.cloudinary.com/dl6oea68u/image/upload/v1725377705/VamosMA/zndjy5uvbboghmujvula.jpg'],
                            titulo: 'Compromiso por el Desarrollo Integral de Veraguas',
                            descripcion: 'Hoy, los alcaldes y diputados de la provincia de Veraguas sostuvimos una segunda reunión con el objetivo de avanzar en la creación de una hoja de ruta que aborde temas prioritarios para nuestra región. Durante el encuentro, se discutieron aspectos clave relacionados con el desarrollo social, la seguridad, la economía, la salud y el medio ambiente. Este esfuerzo colaborativo busca fortalecer nuestras estrategias y garantizar un crecimiento sostenible y equitativo para todos los ciudadanos de Veraguas.'
                        }
                    ]
                }
            },
        ]
    },
    {
        date: new Date(2024, 8, 2),
        eventos: [
            {
                nombre: "Pleno",
                event: {
                    idsYoutube: ['qQbpDe7s9Pw'],
                }
            },

        ]
    },
    {
        date: new Date(2024, 8, 3),
        eventos: [

            {
                nombre: "Otros",
                event: {
                    idsYoutube: ['w2golsrih60'],
                }
            },
            {
                nombre: "Educación",
                event: {
                    idsYoutube: ['fgnPvgsvijE'],
                    linkInstagram: ['https://www.instagram.com/p/C_dn6BFPMeH/?img_index=1'],
                }
            },
            {
                nombre: "Pleno",
                event: {
                    idsYoutube: ['iYeJIxKYz5A'],
                }
            }

        ]
    },
    {
        date: new Date(2024, 8, 4),
        eventos: [
            {
                nombre: "Pleno",
                event: {
                    idsYoutube: ['KxEozh5XW_E'],
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
        date: new Date(2024, 8, 5),
        eventos: [
            {
                nombre: "Pleno",
                event: {
                    idsYoutube: ['Tpfb_yJw1zM'],
                }
            }

        ]
    },
    {
        date: new Date(2024, 8, 6),
        eventos: [
            {
                nombre: "Otros",
                event: {
                    eventoImagen: [
                        {
                            linkImagen: ['https://res.cloudinary.com/dl6oea68u/image/upload/v1726082122/VamosMA/popjfx1aslqndbozj3lv.jpg'],
                            titulo: 'Reunión de Participación Ciudadana en Santiago',
                            descripcion: 'Durante la reunión de "Participación Ciudadana" en Santiago, se conversó con los residentes sobre sus preocupaciones, se debatieron proyectos y se abordaron problemas de la comunidad. Fue un espacio para intercambiar ideas y buscar soluciones de manera conjunta.'
                        }
                    ]
                }
            }

        ]
    },
    {
        date: new Date(2024, 8, 9),
        eventos: [
            {
                nombre: "Pleno",
                event: {
                    idsYoutube: ['lurjre9JPcA'],
                }
            }

        ]
    },
    {
        date: new Date(2024, 8, 10),
        eventos: [
            {
                nombre: "Educación",
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
        date: new Date(2024, 8, 11),
        eventos: [
            {
                nombre: "Pleno",
                event: {
                    idsYoutube: ['Yo1ahgwdBgA'],
                }
            },


        ]
    },
    {
        date: new Date(2024, 8, 12),
        eventos: [
            {
                nombre: "Otros",
                event: {
                    idsYoutube: ['dA9YO5yFV_4'],
                }
            }, {
                nombre: "Pleno",
                event: {
                }


            }, {
                nombre: "Salud",
                event: {
                    eventoImagen: [
                        {
                            linkImagen: ['https://res.cloudinary.com/dl6oea68u/image/upload/v1726592452/VamosMA/esr3pm0equfoknhf63nq.jpg'],
                            titulo: 'Progreso del Anteproyecto de Ley sobre el Trastorno del Espectro Autista (TEA)',
                            descripcion: 'En la subcomisión de trabajo, salud y desarrollo social, se discutió a fondo el anteproyecto de ley sobre el Trastorno del Espectro Autista (TEA), con aportes de expertos y comisiones. Las sesiones incluyeron estudios de impacto y testimonios de familias, abordando temas clave como el acceso a servicios médicos, educación especializada e inclusión laboral. Se evaluaron los mecanismos de implementación y la necesidad de medidas de seguimiento para asegurar que la ley cumpla con sus objetivos y beneficie a las personas con TEA.'
                        }
                    ]
                }

            }

        ]
    },
    {
        date: new Date(2024, 8, 16),
        eventos: [

            {
                nombre: "Pleno",
                event: {
                    idsYoutube: ['HOef8pPqvYc'],
                }
            },
            {
                nombre: "Educación",
                event: {
                    eventoImagen: [
                        {
                            linkImagen: ['https://res.cloudinary.com/dl6oea68u/image/upload/v1726593428/VamosMA/u9couwabayreyrkytmyi.jpg'],
                            titulo: 'Propuesta para Establecer el "Día del Futbolista" en Panamá',
                            descripcion: 'La subcomisión de Educación, Cultura y Deporte analizó en detalle el anteproyecto de ley que propone la creación del "Día del Futbolista" en Panamá. Durante las sesiones, expertos del ámbito deportivo y cultural destacaron cómo esta celebración no solo honraría a los futbolistas nacionales, sino también promovería la importancia del deporte en la sociedad. Se evaluaron los beneficios culturales y sociales de la propuesta, así como los aspectos logísticos para su implementación, tomando como referencia experiencias de otros países.'
                        }
                    ]
                }
            }

        ]
    },
    {
        date: new Date(2024, 8, 17),
        eventos: [

            {
                nombre: "Pleno",
                event: {
                }
            },


        ]
    },
    {
        date: new Date(2024, 8, 18),
        eventos: [

            {
                nombre: "Salud",
                event: {

                }
            },
            {
                nombre: "Educación",
                event: {

                }
            },
            {
                nombre: "Pleno",
                event: {
                    idsYoutube: ['hNa8nkydhS4'],
                }
            },


        ]
    },
    {
        date: new Date(2024, 8, 19),
        eventos: [

            {
                nombre: "Pleno",
                event: {

                }
            },
        ]
    },
    {
        date: new Date(2024, 8, 23),
        eventos: [
            {
                nombre: "Pleno",
                event: {
                    idsYoutube: ['psA1mqZVr8U'],
                }
            },

            {
                nombre: "Otros",
                event: {
                    eventoImagen: [
                        {
                            linkImagen: ['https://res.cloudinary.com/dl6oea68u/image/upload/v1727189228/VamosMA/emrmdketarv2jwvpk2d7.webp'],
                            titulo: 'Un Hito en la Bancada Vamos para el Deporte Nacional',
                            descripcion: 'Con este Proyecto de Ley 76 se hace historia, siendo la primera ley de la Coalición Vamos. Luego de su aprobación en tercer debate, esta ley modifica la Ley 16 de 1995, con el fin de reorganizar el Instituto Nacional de Deportes y actualizar las normas antidopaje en Panamá. Ahora, solo queda esperar la sanción del ejecutivo, que debe ocurrir en un plazo de 30 días, para fortalecer el apoyo a nuestros deportistas y atletas.'
                        }
                    ],
                    linkInstagram: ['https://www.instagram.com/p/DASLsWPOqR1/'],
                }
            },
        ]
    },
    {
        date: new Date(2024, 8, 24),
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
                            linkImagen: ['https://res.cloudinary.com/dl6oea68u/image/upload/v1727795304/VamosMA/d5vvmc01mej6bpavv8jk.jpg'],
                            titulo: 'Análisis de Proyectos de Ley sobre Becas Avanza en la Subcomisión de Educación',
                            descripcion: 'La subcomisión de Educación de la Asamblea Nacional realizó un análisis de tres proyectos de ley relacionados con el otorgamiento de becas. El debate se centró en la transparencia del proceso y en la eliminación de auxilios económicos para asegurar que las becas lleguen a quienes más lo necesitan. Además, se propusieron modificaciones para priorizar becas por méritos y créditos educativos, y garantizar el uso adecuado de los fondos públicos. La discusión continuará la próxima semana para finalizar el articulado.'
                        }
                    ],

                }
            }

        ]
    },
    {
        date: new Date(2024, 8, 25),
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
            },
        ]
    },
    {
        date: new Date(2024, 8, 26),
        eventos: [
            {
                nombre: "Pleno",
                event: {
                    idsYoutube: ['GwQinUCQ9mM'],

                }
            },
        ]
    },
    {
        date: new Date(2024, 8, 27),
        eventos: [
            {
                nombre: "Otros",
                event: {
                    eventoImagen: [
                        {
                            linkImagen: ['https://res.cloudinary.com/dl6oea68u/image/upload/v1727796888/VamosMA/dhlcalbj3df01hvyo54u.jpg'],
                            titulo: 'Participación en la Jornada de Actualización sobre Protección Laboral',
                            descripcion: 'Participamos en la Jornada de Actualización sobre Protección Laboral en Enfermedades Crónicas, donde se abordó la importancia de la Ley 59 y el Decreto Ejecutivo modificado por la Ley 25 de 2018. Estos marcos protegen a los trabajadores diagnosticados con enfermedades crónicas, garantizando su derecho a mantener su puesto de trabajo en igualdad de condiciones.'
                        }
                    ],


                }
            },
        ]
    },
    {
        date: new Date(2024, 8, 30),
        eventos: [
            {
                nombre: "Pleno",
                event: {
                    idsYoutube: ['srRjb-8z09c'],

                }
            },
        ]
    },
    {
        date: new Date(2024, 9, 1),
        eventos: [
            {
                nombre: "Pleno",
                event: {
                }
            },
        ]
    },
    {
        date: new Date(2024, 9, 2),
        eventos: [
            {
                nombre: "Pleno",
                event: {
                }
            },
            {
                nombre: "Educación",
                event: {
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
        date: new Date(2024, 9, 3),
        eventos: [
            {
                nombre: "Pleno",
                event: {
                }
            },
            {
                nombre: "Otros",
                event: {
                    eventoImagen: [
                        {
                            linkImagen: ['https://res.cloudinary.com/dl6oea68u/image/upload/v1728057177/VamosMA/v5uinslkm5syzqv3juma.jpg'],
                            titulo: 'Reunión con Directivos de la LPF, Miembros y Diputados sobre la Ley 383',
                            descripcion: 'Durante la reunión entre los directivos de la Liga Panameña de Fútbol (LPF), miembros de la organización y diputados de la Asamblea Nacional, se discutió la Ley 383 del 5 de junio de 2023, la cual establece incentivos tributarios para el deporte. En el encuentro se expusieron diversas ideas y se intercambiaron opiniones, reafirmando el compromiso de transformar el deporte en una cultura sólida y promover su crecimiento como una industria en Panamá.'
                        }
                    ],
                }
            }
        ]
    },
    {
        date: new Date(2024, 9, 7),
        eventos: [
            {
                nombre: "Pleno",
                event: {
                    idsYoutube: ['prGNIoGOuSk'],
                }
            },
        ]
    },
    {
        date: new Date(2024, 9, 8),
        eventos: [
            {
                nombre: "Pleno",
                event: {

                }
            },
        ]
    },
    {
        date: new Date(2024, 9, 9),
        eventos: [
            {
                nombre: "Educación",
                event: {

                }
            },
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
];

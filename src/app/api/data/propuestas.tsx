import { LawProposalState } from "@/interface/states";

export type IPropuestas = {
    id: number;
    titulo: string;
    subtitulo: string;
    progress: number;
    link: string;
    propuestas: {
        id: number;
        titulo: string;
        text: string;
        link: string;
        estado: LawProposalState;
        ver: boolean;
        text2?: string | undefined;
        text3?: string | undefined;
        text4?: string | undefined;
        text5?: string | undefined;
        text6?: string | undefined;
    }[];
}

export const propuestas: IPropuestas[] = [
    {
        id: 1,
        titulo: 'Deporte',
        subtitulo: 'Fomentando el Deporte y la Salud a Nivel Nacional',
        progress: 0,
        link: 'https://example.com/salud',
        propuestas: [
            {
                id: 1,
                titulo: 'Reforma a la Ley de Pandeporte',
                text: 'Reforma a la ley de Pandeporte para crear una Secretaría Provincial de Deporte en cada provincia, asegurando la distribución efectiva de recursos y la implementación de programas deportivos a nivel nacional.',
                link: '/Propuesta1',
                estado: LawProposalState.NoIniciado,
                ver: false
            },
            {
                id: 2,
                titulo: 'Ley de Alto Rendimiento y Medicina Deportiva',
                text: 'Esta ley apoya a los deportistas de élite, fomenta el desarrollo de talentos deportivos, asegura la formación de especialistas en medicina deportiva y establece programas de rehabilitación para mejorar la atención médica de los deportistas.',
                link: 'pdfs/AnteproyectodeAltoRendimientoDeportivoyMedicinaDeportiva.pdf',
                estado: LawProposalState.Prohijado,
                ver: true
            },
            {
                id: 3,
                titulo: 'Reforma a la Carrera de Educación Física',
                text: 'Reformar la carrera de educación física, permitiendo que profesionales formados desarrollen deportistas en diversas disciplinas de manera científica, mejorando la calidad de la preparación deportiva en el país.',
                link: '/Propuesta1',
                estado: LawProposalState.NoIniciado,
                ver: false
            },



        ]
    },
    {
        id: 2,
        titulo: 'Educación',
        subtitulo: 'Revolucionando la Educación para el Futuro de Nuestro País',
        progress: 10,
        link: 'https://example.com/salud',
        propuestas: [
            {
                id: 1,
                titulo: 'Reforma a la Ley Orgánica de Educación',
                text: 'Propuesta para actualizar los objetivos de la ley, dinamizar los contenidos didácticos, fortalecer y mejorar el rol del docente y administrativo, incluir profesionales especialistas, actualizar materias, modernizar metodologías de enseñanza y generar nuevos formatos de ambientes educativos.',
                link: '/Propuesta1',
                estado: LawProposalState.NoIniciado,
                ver: false
            },
            {
                id: 2,
                titulo: 'Educación de Emprendimiento en Escuelas',
                text: 'Impulsar la inclusión de la educación de emprendimiento en las escuelas, fomentando habilidades empresariales y la innovación desde temprana edad.',
                link: '/Propuesta1',
                estado: LawProposalState.NoIniciado,
                ver: false
            },
            {
                id: 3,
                titulo: 'Regulaciones para Otorgamiento de Becas',
                text: 'Proponer regulaciones para que las becas de estudio se otorguen por mérito y no por afiliaciones políticas, asegurando que los estudiantes beneficiados sean acompañados y puedan servir al país en sus diversas áreas prioritarias.',
                link: 'pdfs/ReformaparalaTransparenciayEquidadenAuxiliosEconomicos.pdf',

                estado: LawProposalState.Prohijado,
                ver: true
            },
            {
                id: 4,
                titulo: 'Prácticas Profesionales para Estudiantes de Último Año',
                text: 'Propuesta de ley para que los estudiantes en su último año de licenciatura realicen prácticas en empresas o instituciones públicas, obteniendo un mínimo de un año de experiencia laboral.',
                link: '/Propuesta1',
                estado: LawProposalState.NoIniciado,
                ver: false
            },
            {
                id: 5,
                titulo: 'Inclusión de la Inteligencia Artificial en el Sistema Educativo',
                text: 'Implementación de la inteligencia artificial (IA) en el sistema educativo para mejorar la gestión de la educación, empoderar a gestores, docentes y estudiantes, mejorar el aprendizaje y la evaluación, y garantizar que la IA se utilice para empoderar a los docentes y proteger sus derechos.',
                text2: ' Revisar y adecuar los planes de estudio para reflejar los cambios pedagógicos y de evaluación con la adopción de la IA, analizar y revisar el rol de los docentes, definir las habilidades necesarias para utilizar herramientas de IA y garantizar capacitación continua para los docentes en el uso eficaz de la IA.',
                link: '/Propuesta1',
                estado: LawProposalState.NoIniciado,
                ver: false
            },
        ]
    },
    {
        id: 3,
        titulo: 'Servicios Básicos',
        subtitulo: 'Asegurando Servicios Básicos y Sostenibles',
        progress: 0,
        link: 'https://example.com/salud',
        propuestas: [
            {
                id: 1,
                titulo: 'Establecer parámetros para una política de reciclaje',
                text: 'Implementación de la inteligencia artificial (IA) en el sistema educativo para mejorar la gestión de la educación, empoderar a gestores, docentes y estudiantes, mejorar el aprendizaje y la evaluación, y garantizar que la IA se utilice para empoderar a los docentes y proteger sus derechos.',
                text2: 'Objetivos: Promover el reciclaje, cultura de segregación, economía circular, correcta disposición de la basura, mejorar recolección, mantener limpios parques y plazas, reducir contaminación ambiental, crear ambientes sanos, preservar medio ambiente, y ahorrar energía al reciclar.',
                link: '/Propuesta1',
                estado: LawProposalState.NoIniciado,
                ver: false
            },
            {
                id: 2,
                titulo: 'Ley de acceso y conservación del agua',
                text: 'Establecer medidas para el acceso y conservación del agua.',
                text2: 'Incentivar su reciclaje.',
                link: '/Propuesta1',
                estado: LawProposalState.NoIniciado,
                ver: false
            },
            {
                id: 3,
                titulo: 'Reforma de la Ley 77 del IDAAN',
                text: 'Implementar reformas específicas en la Ley 77 del IDAAN para mejorar su efectividad y cumplimiento.',
                link: '/Propuesta1',
                estado: LawProposalState.NoIniciado,
                ver: false
            },
        ]
    },
    {
        id: 4,
        titulo: 'Desempleo',
        subtitulo: 'Combatiendo el Desempleo y Mejorando la Calidad de Vida',
        progress: 0,
        link: 'https://example.com/salud',
        propuestas: [
            {
                id: 1,
                titulo: 'Archivo nacional de nombramiento',
                text: 'Propuesta para despolitizar los nombramientos en el sector público.',
                text2: 'Restricciones: Ninguna persona inscrita en algún partido político podrá aspirar a trabajar en el estado.',
                text3: 'Prohibición de recomendaciones para puestos de trabajo por parte de figuras políticas como diputados, representantes, alcaldes, ministros, presidentes o vicepresidentes.',
                link: '/Propuesta1',
                estado: LawProposalState.NoIniciado,
                ver: false
            },
        ]
    },

    {
        id: 5,
        titulo: 'Justicia',
        subtitulo: 'Fortaleciendo la Justicia y la Seguridad Ciudadan',
        progress: 0,
        link: 'https://example.com/salud',
        propuestas: [
            {
                id: 1,
                titulo: 'Reforma al código agrario',
                text: 'Creación de un tribunal supremo agrario.',
                link: '/Propuesta1',
                estado: LawProposalState.NoIniciado,
                ver: false
            },
            {
                id: 2,
                titulo: 'Ley para acortar la mora judicial',
                text: 'Propuesta de ley para reducir la demora en los procesos judiciales.',
                link: '/Propuesta1',
                estado: LawProposalState.NoIniciado,
                ver: false
            },
            {
                id: 3,
                titulo: 'Archivo nacional de agresores y depredadores sexuales',
                text: 'Propuesta para crear un registro nacional de agresores y depredadores sexuales.',
                link: '/Propuesta1',
                estado: LawProposalState.NoIniciado,
                ver: false
            },
        ]
    },
    {
        id: 6,
        titulo: 'Anticorrupción',
        subtitulo: 'Luchando Contra la Corrupción',
        progress: 0,
        link: 'https://example.com/salud',
        propuestas: [
            {
                id: 1,
                titulo: 'Ley anticorrupción',
                text: 'Vetar de por vida para ejercer cargos públicos a personas condenadas por corrupción.',
                link: '/Propuesta1',
                estado: LawProposalState.NoIniciado,
                ver: false
            },
            {
                id: 2,
                titulo: 'Incremento de penas por cobro indebido de salarios',
                text: 'Aumentar las penas para funcionarios que cobren salarios sin trabajar.',
                text2: 'Imponer penas de prisión a los servidores públicos que realicen dichos nombramientos.',
                link: '/Propuesta1',
                estado: LawProposalState.NoIniciado,
                ver: false
            },
            {
                id: 3,
                titulo: 'Declaración jurada de bienes',
                text: 'Requerir a todos los funcionarios públicos (presidentes, diputados, alcaldes, representantes, ministros, magistrados del tribunal electoral, cónsules, miembros del servicio exterior) presentar una declaración jurada de bienes.',
                text2: 'Supervisar que los bienes adquiridos estén acordes al salario obtenido al final de su gestión.',
                link: '/Propuesta1',
                estado: LawProposalState.NoIniciado,
                ver: false
            },
            {
                id: 4,
                titulo: 'Reforma de la ley de contrataciones públicas',
                text: 'Inhabilitar permanentemente a empresas condenadas por corrupción para licitar con el estado.',
                link: '/Propuesta1',
                estado: LawProposalState.NoIniciado,
                ver: false
            },
        ]
    },
    {
        id: 7,
        titulo: 'Salud',
        subtitulo: 'Mejorando la Salud Pública y la Calidad de Vida',
        progress: 0,
        link: 'https://example.com/salud',
        propuestas: [
            {
                id: 1,
                titulo: 'Fortalecimiento Integral del Sistema de Salud',
                text: 'Mejoramiento de centros de salud y construcción de hospitales con tecnología avanzada.',
                text2: 'Acceso rápido y gratuito a atención médica en centros básicos de atención primaria.',
                text3: 'Dotación de capital humano, nombramiento de médicos de tiempo completo, personal técnico idóneo y de especialidades.',
                text4: 'Correcto abastecimiento de insumos médicos, revisión de políticas de compra, importación y comercialización de fármacos.',
                text5: 'Mejora continua de la digitalización de la administración de salud pública, con información disponible a los usuarios.',
                text6: 'Creación de un registro de personas con discapacidades, enfermedades raras y crónicas para un balance real de la población y optimizar la atención médica y suministro de medicamentos.',
                link: '/Propuesta1',
                estado: LawProposalState.NoIniciado,
                ver: false
            },
            {
                id: 2,
                titulo: 'Reforma del código sanitario',
                text: 'Mejor planificación en el manejo de enfermedades infecciosas.',
                text2: 'Reglamentación de los estados de emergencia sanitarios.',
                link: '/Propuesta1',
                estado: LawProposalState.NoIniciado,
                ver: false
            },

        ]
    },
    {
        id: 8,
        titulo: 'Institucionalidad',
        subtitulo: 'Fortaleciendo la Transparencia y la Eficiencia del Gobierno',
        progress: 0,
        link: 'https://example.com/salud',
        propuestas: [
            {
                id: 1,
                titulo: 'Eliminación del fuero penal electoral',
                text: 'Proponer una ley para eliminar el fuero penal electoral.',
                text2: 'Reglamentación de los estados de emergencia sanitarios.',
                link: '/Propuesta1',
                estado: LawProposalState.NoIniciado,
                ver: false
            },
            {
                id: 2,
                titulo: 'Fortalecimiento de la ley de transparencia',
                text: 'Asegurar la entrega rápida de información a los ciudadanos.',
                text2: 'Aumentar la claridad sobre la planilla estatal.',
                text3: 'Prohibir que el órgano ejecutivo decrete la confidencialidad de las actas de sus reuniones.',
                link: '/Propuesta1',
                estado: LawProposalState.NoIniciado,
                ver: false
            },
            {
                id: 3,
                titulo: 'Fortalecimiento de la carrera administrativa',
                text: 'Fortalecer la estructura y funcionamiento de la carrera administrativa.',
                link: '/Propuesta1',
                estado: LawProposalState.NoIniciado,
                ver: false
            },
            {
                id: 4,
                titulo: 'Creación de la carrera municipal',
                text: 'Proponer un proyecto de ley para establecer la carrera municipal.',
                link: '/Propuesta1',
                estado: LawProposalState.NoIniciado,
                ver: false
            },

        ]
    },
    {
        id: 9,
        titulo: 'Reglamento Interno de la Asamblea',
        subtitulo: 'Reformando y Recuperando la Integridad de la Asamblea Nacional',
        progress: 0,
        link: 'https://example.com/salud',
        propuestas: [
            {
                id: 1,
                titulo: 'Reforma del reglamento interno de la Asamblea Nacional',
                text: 'Descuento salarial a diputados que no asistan al pleno.',
                text2: 'Eliminación de viáticos para viajes al exterior y vuelos en primera clase.',
                text3: 'Devolución de viáticos no utilizados para giras al interior de la república, con detalle del uso si fue utilizado.',
                text4: 'Prohibición del nepotismo.',
                link: '/Propuesta1',
                estado: LawProposalState.NoIniciado,
                ver: false
            },
            {
                id: 2,
                titulo: 'Mecanismos de participación ciudadana',
                text: 'Establecer canales para que los ciudadanos presenten sus preocupaciones e ideas.',
                text2: 'Transformar las propuestas ciudadanas en proyectos y leyes.',
                link: '/Propuesta1',
                estado: LawProposalState.NoIniciado,
                ver: false
            },

        ]
    },
]
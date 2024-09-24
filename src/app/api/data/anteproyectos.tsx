import { Category } from "@/interface/category"
import { LawProposalState } from "@/interface/states"

export interface IAnteProyecto {
    id: number
    titulo: string
    descripcion: string
    fecha: string
    categoria: string
    proponente: string,
    icon: string,
    link: string
    estado?: LawProposalState
}

export const Anteproyectos: IAnteProyecto[] = [
    {
        id: 3,
        titulo: 'Reorganización del Instituto de Deportes y Normativas Antidopaje',
        // titulo: 'Reforma Integral para la Transparencia y Equidad en la Asignación de Auxilios Económicos',
        // titulo:'Que modifica la Ley 1 del 11 de enero de 1965 y prohíbe el acceso a Auxilios Económicos a funcionarios de Alto Mando y Jurisdicción ya sus familiares con parentesco hasta el cuarto grado de consanguinidad y segundo de afinidad',

        descripcion: 'Este anteproyecto modifica la Ley 16 de 1995 para reorganizar el Instituto Nacional de Deportes, en los artículos 15K, 15L, y 15M para asegurar el cumplimiento de normas antidopaje según la ONAD-PAN y el código mundial antidopaje vigente.',
        fecha: 'Tue Aug 14 2024 22:12:41 GMT-0500 (hora estándar oriental)',
        categoria: Category.Educacion,
        proponente: 'H.D. Miguel Ángel Campos Lima',
        icon: 'MdOutlineSportsSoccer',
        link: 'pdfs/AnteproyectodeLeyANTIDOPING.pdf',
        // link: 'https://drive.google.com/file/d/1bb5jZOu8J_d1grqhQDnERynxDFkHvLcR/edit',
        estado: LawProposalState.AprobadoEnTercerDebate
    },
    {
        id: 2,
        titulo: 'Alto Rendimiento Deportivo y Medicina Deportiva',
        // titulo: 'Reforma Integral para la Transparencia y Equidad en la Asignación de Auxilios Económicos',
        // titulo:'Que modifica la Ley 1 del 11 de enero de 1965 y prohíbe el acceso a Auxilios Económicos a funcionarios de Alto Mando y Jurisdicción ya sus familiares con parentesco hasta el cuarto grado de consanguinidad y segundo de afinidad',

        descripcion: 'Proporciona los recursos necesarios para mejorar el nivel competitivo de nuestros atletas, implementar la medicina deportiva preventiva, y hacer del deporte una cultura y una industria.',
        fecha: 'Tue Aug 06 2024 22:12:41 GMT-0500 (hora estándar oriental)',
        categoria: Category.Educacion,
        proponente: 'H.D. Miguel Ángel Campos Lima',
        icon: 'MdOutlineSportsSoccer',
        link: 'pdfs/AnteproyectodeAltoRendimientoDeportivoyMedicinaDeportiva.pdf',
        estado: LawProposalState.Preliminario
    },
    {
        id: 1,
        titulo: 'Transparencia y Equidad en Auxilios Económicos',
        // titulo: 'Reforma Integral para la Transparencia y Equidad en la Asignación de Auxilios Económicos',
        // titulo:'Que modifica la Ley 1 del 11 de enero de 1965 y prohíbe el acceso a Auxilios Económicos a funcionarios de Alto Mando y Jurisdicción ya sus familiares con parentesco hasta el cuarto grado de consanguinidad y segundo de afinidad',

        descripcion: 'La propuesta prohíbe el acceso a auxilios económicos a funcionarios de alto mando y sus familiares hasta el cuarto grado de consanguinidad y segundo de afinidad, promoviendo la transparencia y equidad en la distribución de recursos educativos.',
        fecha: 'Tue Jul 02 2024 22:12:41 GMT-0500 (hora estándar oriental)',
        categoria: Category.Educacion,
        proponente: 'H.D. Miguel Ángel Campos Lima',
        icon: 'SlBookOpen',
        link: 'pdfs/ReformaparalaTransparenciayEquidadenAuxiliosEconomicos.pdf',
        estado: LawProposalState.Subcomision
    },


]
// components/CienDias.jsx
import React from "react";
import Descarga from "./Descarga";
import AccordionCardList from "./AccordioncardList";
import GraficoBar from "./GraficoBar";
import SliderImage from "../SliderImage";
import SectionHeader from "./SectionHeader";
import DescargarPrimerPeriodo from "./DescargarPrimerPeriodo";

const listItems = [
  {
    id: "1",
    link: "pdfs/AnteproyectodeLeyANTIDOPING.pdf",
    estado: "Ley Sancionada",
    title: "Reorganización del Instituto de Deportes y Normativas Antidopaje",
    content:
      "Este anteproyecto modifica la Ley 16 de 1995 para reorganizar el Instituto Nacional de Deportes...",
  },
  {
    id: "2",
    link: "pdfs/AnteproyectodeAltoRendimientoDeportivoyMedicinaDeportiva.pdf",
    estado: "Preliminar",
    title: "Alto Rendimiento Deportivo y Medicina Deportiva",
    content:
      "Proporciona los recursos necesarios para mejorar el nivel competitivo de nuestros atletas...",
  },
  {
    id: "3",
    link: "pdfs/ReformaparalaTransparenciayEquidadenAuxiliosEconomicos.pdf",
    estado: "Subcomisión",
    title: "Transparencia y Equidad en Auxilios Económicos",
    content:
      "La propuesta prohíbe el acceso a auxilios económicos a funcionarios de alto mando y sus familiares...",
  },
];

const Gestion = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mt-6">
      {/* Título general o Heading principal si lo deseas */}

      {/* Contenedor del timeline */}
      <div className="relative border-l border-gray-200 ml-6">
        {/* Sección 1 */}
        <div className="mb-10 ml-6 relative">
          {/* Punto que marca el timeline */}

          {/* Encabezado reutilizable */}
          <SectionHeader
            title="Informe de la Primera Legislatura"
            dateRange="Julio 2024 - Diciembre 2024"
          />

          {/* Contenido que tenías en la primera sección */}
          <DescargarPrimerPeriodo />
          <div className="mt-6 border-t pt-4">
            {/* Aquí podrías meter más contenido si fuera necesario */}
            {/* <p className="text-gray-600">
              Detalles o acciones específicas para el primer periodo...
            </p> */}
          </div>
        </div>

        {/* Sección 2 */}
        <div className="mb-10 ml-6 relative">
          <SectionHeader
            title="Primeros 100 días de gestión"
            dateRange="Julio 2024 - Octubre 2024"
          />

          <Descarga />
          {/* Bloque de contenido con acordeón y gráfico */}
          <div className="mt-6 border-t pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="px-2">
                <AccordionCardList items={listItems} />
              </div>
              <div className="flex justify-center items-center">
                <GraficoBar />
              </div>
            </div>
            <div className="mt-6">
              <SliderImage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gestion;

import AccordionCardList from "@/components/informes/AccordioncardList";
import Descarga from "@/components/informes/Descarga";
import GraficoBar from "@/components/informes/GraficoBar";
import SliderImage from "@/components/SliderImage";

const listItems = [
  {
    id: "1",
    link: "pdfs/AnteproyectodeLeyANTIDOPING.pdf",
    estado: "Ley Sancionada",
    title: "Reorganización del Instituto de Deportes y Normativas Antidopaje",
    content:
      "Este anteproyecto modifica la Ley 16 de 1995 para reorganizar el Instituto Nacional de Deportes, en los artículos 15K, 15L, y 15M para asegurar el cumplimiento de normas antidopaje según la ONAD-PAN y el código mundial antidopaje vigente.",
  },
  {
    id: "2",
    link: "pdfs/AnteproyectodeAltoRendimientoDeportivoyMedicinaDeportiva.pdf",
    estado: "Preliminar",
    title: "Alto Rendimiento Deportivo y Medicina Deportiva",
    content:
      "Proporciona los recursos necesarios para mejorar el nivel competitivo de nuestros atletas, implementar la medicina deportiva preventiva, y hacer del deporte una cultura y una industria.",
  },
  {
    id: "3",
    link: "pdfs/ReformaparalaTransparenciayEquidadenAuxiliosEconomicos.pdf",
    estado: "Subcomisión",
    title: "Transparencia y Equidad en Auxilios Económicos",
    content:
      "La propuesta prohíbe el acceso a auxilios económicos a funcionarios de alto mando y sus familiares hasta el cuarto grado de consanguinidad y segundo de afinidad, promoviendo la transparencia y equidad en la distribución de recursos educativos.",
  },
];

const page = () => {
  return (
    <section className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-0 py-10  lg:py-16 h-full">
      <div className="sm:container">
        {/* Título y Subtítulo */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Informe de Gestión
          </h2>
          <p className="mt-2 sm:mt-4 text-lg text-gray-600">
            Transparencia y compromiso en cada acción legislativa, reflejando el
            esfuerzo constante por el bienestar de la comunidad y el desarrollo
            del país.
          </p>
        </div>
        {/* Primeros 100 días de gestión */}
        <div className="mt-10 px-3 sm:mt-16">
          <div className="flex flex-col  justify-center md:justify-start">
            <h3 className="text-2xl  font-semibold">
              Primeros 100 días de gestión
            </h3>
            <span className="text-sm text-gray-500 font-medium ml-2">
              Julio 2024 - Octubre 2024
            </span>
          </div>
          <Descarga />
          {/* Gráfico y Lista Acordeón */}
          <div className="mt-5 border-t pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Gráfico */}
              <div className="flex flex-col px-2">
                <AccordionCardList items={listItems} />
              </div>
              <div className="flex justify-center items-center">
                <GraficoBar />
              </div>

              {/* Lista Acordeón */}
            </div>
            <SliderImage />
          </div>
          <div className="border-t mt-12"></div>
        </div>
      </div>
    </section>
  );
};

export default page;

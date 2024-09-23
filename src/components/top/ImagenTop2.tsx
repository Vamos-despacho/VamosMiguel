'use client'
import Image from 'next/image';
import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const imgs = [
    {
        id: 5,
        img: 'image005.jpeg',
        title: 'Presentación de Anteproyecto que Modifica la Ley 16 de 1995: Reorganización del Instituto de Deportes y Normativas Antidopaje',
        description: 'Este anteproyecto de ley modifica la Ley 16 de 1995 para reorganizar el Instituto Nacional de Deportes, incluyendo los artículos 15K, 15L, y 15M, con la finalidad de velar por el cumplimiento de las normas nacionales e internacionales sobre el uso y control de sustancias y métodos prohibidos, según la Organización Nacional Antidopaje de Panamá (ONAD-PAN).'
    },
    {
        id: 4,
        img: 'image04.png',
        title: 'Presentación de anteproyecto: Alto Rendimiento Deportivo y Medicina Deportiva',
        description: 'Este anteproyecto busca proporcionar los recursos necesarios para elevar el nivel competitivo de nuestros atletas, implementar la medicina deportiva preventiva, y transformar el deporte en una cultura y una industria. Con un sólido respaldo en salud y entrenamiento, se garantizará el éxito internacional de nuestros deportistas y el desarrollo sostenible de nuestra industria deportiva.'
    },
    {
        id: 3,
        img: 'imagen03.jpg',
        title: 'Reunión con el Ministro de Salud para Mejorar la Atención en Veraguas',
        description: 'En reunión sostenida con el Ministro de Salud, Fernando Boyd, expusimos las urgentes necesidades de la provincia de Veraguas, específicamente las problemáticas del Hospital Regional Luis "Chicho" Fábrega, entre ellas la inestabilidad laboral del personal, la necesidad de mejorar la infraestructura, el banco de sangre y la urgencia de adquirir equipos médicos modernos.'
    },
    {
        id: 2,
        img: 'imagen02.jpg',
        title: 'Incidencia en el Pleno: Garantizando Derechos Básicos para Todos los Panameños',
        description: 'Entre las prioridades de los panameños, según las encuestas realizadas, se encuentran el agua y la educación. Es fundamental crear políticas públicas que aseguren que estos derechos lleguen a toda la población.'
    },
    {
        id: 1,
        img: 'image001.png',
        title: 'Presentación de anteproyecto: Transparencia y Equidad en Auxilios Económicos',
        description: 'Este anteproyecto propone prohibir el acceso a auxilios económicos para funcionarios de alto rango y sus familiares hasta el cuarto grado de consanguinidad y segundo de afinidad, promoviendo así la transparencia y equidad en la distribución de recursos educativos.'
    },
];

export default function ImagenTop() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imgs.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imgs.length) % imgs.length);
    };

    return (
        <div className="grid grid-cols-1 shadow-lg bg-white bg-opacity-90 md:grid-cols-2 gap-3 md:gap-6 items-center   max-w-6xl mx-auto rounded-md ">
            <div className="relative">
                <div className="relative w-full h-full overflow-hidden ">
                    <div className="relative w-full h-full transition-transform duration-500 ">
                        <Image
                            loading="lazy"
                            decoding="async"
                            src={`/images/top/${imgs[currentIndex].img}`}
                            alt={`Slide ${currentIndex + 1}`}
                            width={1000} // Asegúrate de usar dimensiones adecuadas
                            height={700}
                            sizes="(min-width: 1024px) 1200px, (min-width: 768px) 800px, 100vw"
                            className=" sm:w-[600px] h-[340px] sm:h-[500px] rounded-l-md object-cover"
                            quality={100} // Usa la máxima calidad
                        />


                    </div>
                </div>
                <button
                    onClick={handlePrevious}
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-background/60 hover:bg-background/80 p-2 rounded-full shadow-lg transition-colors border-none"
                >
                    <BsChevronCompactLeft className="w-6 h-6 text-foreground" />
                </button>
                <button
                    onClick={handleNext}
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-background/60 hover:bg-background/80 p-2 rounded-full shadow-lg transition-colors border-none"
                >
                    <BsChevronCompactRight className="w-6 h-6 text-foreground" />
                </button>
            </div>
            <div className="flex flex-col space-y-2 md:space-y-4  mr-5">
                <h2 className="text-xl md:text-3xl font-semibold text-azulv text-justify">{imgs[currentIndex].title}</h2>
                <p className=" mt-4 text-xl text-secondary-foreground  text-justify">
                    {imgs[currentIndex].description}
                </p>
            </div>
        </div>
    );
}

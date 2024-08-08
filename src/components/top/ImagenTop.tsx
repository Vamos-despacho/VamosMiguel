'use client'
import Image from 'next/image';
import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const imgs = [
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
        img: 'imagen01.png',
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
        <div className="grid grid-cols-1 bg-white md:grid-cols-2 gap-3 md:gap-8 items-center pb-0 max-w-6xl mx-auto px-4 md:px-6">
            <div className="relative">
                <div className="relative w-full h-full overflow-hidden">
                    <div className="relative w-full h-full transition-transform duration-500">
                        <Image
                            loading="lazy"
                            decoding="async"
                            src={`/images/top/${imgs[currentIndex].img}`}
                            alt={`Slide ${currentIndex + 1}`}
                            width={1200} // Asegúrate de usar dimensiones adecuadas
                            height={800}
                            sizes="(min-width: 1024px) 1200px, (min-width: 768px) 800px, 100vw"

                            className=" sm:w-[600px] h-[340px] sm:h-[500px] rounded-md object-cover"
                            quality={100} // Usa la máxima calidad
                        />


                    </div>
                </div>
                <button
                    onClick={handlePrevious}
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-background/20 hover:bg-background/75 p-2 rounded-full shadow-lg transition-colors border-none"
                >
                    <BsChevronCompactLeft className="w-6 h-6 text-foreground" />
                </button>
                <button
                    onClick={handleNext}
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-background/20 hover:bg-background/75 p-2 rounded-full shadow-lg transition-colors border-none"
                >
                    <BsChevronCompactRight className="w-6 h-6 text-foreground" />
                </button>
            </div>
            <div className=" space-y-2 md:space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{imgs[currentIndex].title}</h2>
                <p className=" mt-2 lg:mt-6 txt-sm sm:text-lg text-gray-600 text-justify tracking-tight">
                    {imgs[currentIndex].description}
                </p>
            </div>
        </div>
    );
}

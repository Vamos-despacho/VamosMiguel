'use client'
import Image from 'next/image';
import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const imgs = [
    {
        img: 'imagen01.png',
        title: 'Presentación de mi primer anteproyecto: Transparencia y Equidad en Auxilios Económicos',
        description: 'Este anteproyecto propone prohibir el acceso a auxilios económicos para funcionarios de alto rango y sus familiares, promoviendo así la transparencia y equidad en la distribución de recursos educativos.'
    },
    {
        img: 'imagen02.jpg',
        title: 'Presentación de mi segundo anteproyecto: Educación de Calidad para Todos',
        description: 'Este anteproyecto propone garantizar la educación de calidad para todos los ciudadanos, promoviendo la equidad y el acceso a oportunidades educativas para todos los niños y jóvenes.'
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
        <div className="grid grid-cols-1 bg-white md:grid-cols-2 gap-3 md:gap-8 items-center  max-w-6xl mx-auto px-4 md:px-6">
            <div className="relative">
                <div className="relative w-full h-full overflow-hidden">
                    <div className="relative w-full h-full transition-transform duration-500">
                        <Image loading='lazy' width="800" height="800" decoding='async'
                            src={`/images/top/${imgs[currentIndex].img}`}
                            alt={`Slide ${currentIndex + 1}`}
                            //className="object-cover w-full h-full transition-opacity duration-500 rounded-md"
                            // style={{ width: '100%', height: '450px' }}
                            sizes="(min-width: 1024px) 32rem, 20rem"
                            className=" aspect-square rounded-md bg-zinc-400 object-cover dark:bg-zinc-800 h-[400px]" />



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
                <p className="text-muted-foreground mt-2 lg:mt-6 text-lg text-gray-600 text-justify">
                    {imgs[currentIndex].description}
                </p>
            </div>
        </div>
    );
}

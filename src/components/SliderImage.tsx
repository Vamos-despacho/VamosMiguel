"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { IconChevronLeft } from './Icon/IconChevronLeft';
import { IconChevronRight } from './Icon/IconChevronRight';
import { imgs } from '@/app/api/data/InformeGestion';

type PropsButton = {
    onClick: () => void;
    direction: "left" | "right";
}

const ScrollButton = ({ onClick, direction }: PropsButton) => (
    <button
        className="flex p-0 m-0 w-14 h-14 bg-white rounded-full opacity-50 hover:opacity-90 justify-center items-center transition-transform duration-300 transform hover:scale-110"
        onClick={onClick}
    >
        {direction === "left" ? <IconChevronLeft /> : <IconChevronRight />}
    </button>
);

interface Pron {
    imgs: {
        id: number;
        title: string;
        description: string; // Agregamos el campo de descripción
        img: string;
    }[];
}

const SliderImage = () => {
    const divRef = useRef<HTMLDivElement | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollStart, setScrollStart] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDialogOpen, setIsDialogOpen] = useState(false); // Estado para controlar el diálogo

    // Lógica para manejar el desplazamiento con el mouse (drag)
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !divRef.current) return;
        const x = e.pageX - divRef.current.offsetLeft;
        const walk = x - startX;
        divRef.current.scrollLeft = scrollStart - walk;
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (divRef.current) {
            setIsDragging(true);
            setStartX(e.pageX - divRef.current.offsetLeft);
            setScrollStart(divRef.current.scrollLeft);
        }
    };

    const handleMouseUpOrLeave = () => {
        setIsDragging(false);
    };

    // Lógica para desplazar el carrusel con botones
    const scrollHandler = (direction: "left" | "right") => {
        if (divRef.current) {
            const scrollAmount = direction === "left" ? -400 : 400;
            divRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    // Lógica de cambio de imagen en el modal (diálogo)
    const handleImageChange = (direction: "left" | "right") => {
        setCurrentIndex((prevIndex) => {
            if (direction === "left") {
                return prevIndex > 0 ? prevIndex - 1 : imgs.length - 1;
            } else {
                return prevIndex < imgs.length - 1 ? prevIndex + 1 : 0;
            }
        });
    };

    // Función para abrir el diálogo
    const openDialog = (index: number) => {
        setCurrentIndex(index);
        setIsDialogOpen(true);
    };

    // Función para cerrar el diálogo
    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <div className="flex flex-col mt-3 py-8">
            <div className="flex relative h-auto justify-center items-center">
                {/* Botón para mover a la izquierda */}
                <div className="w-8   absolute left-0">
                    <ScrollButton onClick={() => scrollHandler("left")} direction="left" />
                </div>

                {/* Galería de imágenes en forma de carrusel */}
                <div
                    className="w-full overflow-x-hidden flex space-x-4" // Espacio entre las imágenes
                    ref={divRef}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUpOrLeave}
                    onMouseLeave={handleMouseUpOrLeave}
                    onMouseMove={handleMouseMove}
                >
                    {imgs.map((item, index) => (
                        <div
                            key={item.id}
                            className="cursor-pointer flex-shrink-0 w-40 h-40 overflow-hidden rounded-lg" // Tamaño reducido, ajustado como galería
                            onClick={() => openDialog(index)} // Abre el diálogo al hacer clic
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    ))}
                </div>

                {/* Botón para mover a la derecha */}
                <div className="w-8 absolute right-6">
                    <ScrollButton onClick={() => scrollHandler("right")} direction="right" />
                </div>

                {/* Diálogo para mostrar la imagen completa, título y descripción */}
                {isDialogOpen && (
                    <Dialog open={isDialogOpen} onOpenChange={closeDialog}>
                        <DialogContent className="flex flex-col lg:max-h-[95dvh] md:max-w-2xl lg:max-w-4xl m-auto justify-center items-center p-4 space-y-4">
                            <button onClick={() => handleImageChange("left")} className="absolute left-0 p-2 z-10">
                                <IconChevronLeft />
                            </button>

                            <div className="relative flex flex-col justify-center items-center">
                                {/* Imagen completa */}
                                <img
                                    src={imgs[currentIndex].img}
                                    alt={imgs[currentIndex].title}
                                    className="h-full w-full lg:max-h-[60vh] object-contain rounded-lg mb-4"
                                />

                                {/* Título */}
                                <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
                                    {imgs[currentIndex].title}
                                </h2>

                                {/* Descripción */}
                                <p className="text-sm text-gray-600 text-center px-4">
                                    {imgs[currentIndex].description}
                                </p>
                            </div>

                            <button onClick={() => handleImageChange("right")} className="absolute right-0 p-2">
                                <IconChevronRight />
                            </button>

                        </DialogContent>
                    </Dialog>
                )}
            </div>
        </div>
    );
};

export default SliderImage;

'use client'

import React, { useEffect, useRef, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import { IconChevronLeft } from './Icon/IconChevronLeft';
import { IconChevronRight } from './Icon/IconChevronRight';

type PropsButton = {
    onClick: () => void;
    direction: "left" | "right";
}

const ScrollButton = ({ onClick, direction }: PropsButton) => (
    <button
        className="flex p-0 m-0 opacity-40 hover:opacity-90 justify-center items-center  
          transition-transform duration-300 transform hover:scale-110"
        onClick={onClick}
    >
        {direction === "left"
            ? <IconChevronLeft />
            : <IconChevronRight />
        }
    </button>
);

const SliderArticle = ({ imgs }: { imgs: string[] }) => {
    const divRef = useRef<HTMLDivElement | null>(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isMouseDown || !divRef.current) return;
        e.preventDefault();
        const x = e.pageX - divRef.current.offsetLeft;
        const walk = x - startX;
        divRef.current.scrollLeft = scrollLeft - walk;
        updateScrollStatus();
    };

    const updateScrollStatus = () => {
        if (divRef.current) {
            const tolerance = 2; // Tolerancia de 2 píxeles para compensar diferencias de redondeo
            setIsAtStart(divRef.current.scrollLeft <= tolerance);
            setIsAtEnd(divRef.current.scrollLeft + divRef.current.clientWidth >= divRef.current.scrollWidth - tolerance);
        }
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (divRef.current) {
            setIsMouseDown(true);
            setStartX(e.pageX - divRef.current.offsetLeft);
            setScrollLeft(divRef.current.scrollLeft);
        }
    };

    const handleMouseLeaveOrUp = () => {
        setIsMouseDown(false);
    };

    const scrollHandler = (direction: "left" | "right") => {
        if (divRef.current) {
            const scrollAmount = direction === "left" ? -402 : 402;
            divRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
            setIsAnimating(true);
            setTimeout(() => setIsAnimating(false), 1000); // Ajustar el tiempo según la duración de la animación
            updateScrollStatus();
        }
    };

    const handleImageChange = (direction: "left" | "right") => {
        if (direction === "left") {
            setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : imgs.length - 1));
        } else {
            setCurrentIndex((prevIndex) => (prevIndex < imgs.length - 1 ? prevIndex + 1 : 0));
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            updateScrollStatus();
        };
        const currentDiv = divRef.current;
        currentDiv?.addEventListener("scroll", handleScroll);
        updateScrollStatus();
        return () => {
            currentDiv?.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (divRef.current && !isMouseDown && !isAnimating) {
                divRef.current.scrollBy({
                    left: 300,
                    behavior: 'smooth'
                });
                if (divRef.current.scrollLeft + divRef.current.clientWidth >= divRef.current.scrollWidth) {
                    divRef.current.scrollTo({
                        left: 0,
                        behavior: 'smooth'
                    });
                }
                updateScrollStatus();
            }
        }, 3000); // Ajustar el intervalo según sea necesario

        return () => clearInterval(interval);
    }, [isMouseDown, isAnimating]);

    return (
        <div className='flex flex-col py-8'>
            <div className='flex relative h-auto justify-center items-center'>
                <div className="w-8 absolute left-0">
                    {!isAtStart && <ScrollButton onClick={() => scrollHandler("left")} direction="left" />}
                </div>
                <div
                    className="w-full  space-x-1 overflow-x-hidden flex"
                    ref={divRef}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeaveOrUp}
                    onMouseUp={handleMouseLeaveOrUp}
                    onMouseMove={handleMouseMove}
                >
                    {imgs.map((item, index) => (
                        <Dialog key={item}>
                            <DialogTrigger>
                                <img src={item} alt="imagen" className="object-cover h-full w-full" />
                            </DialogTrigger>
                            <DialogContent className="flex flex-col lg:max-h-[95dvh] md:max-w-2xl lg:max-w-4xl m-auto justify-center items-center p-2">
                                <div className="relative flex justify-center items-center">
                                    <button onClick={() => handleImageChange("left")} className="absolute left-0 p-2">
                                        <IconChevronLeft />
                                    </button>
                                    <img src={imgs[currentIndex]} alt="imagen" className="h-full w-full" />
                                    <button onClick={() => handleImageChange("right")} className="absolute right-0 p-2">
                                        <IconChevronRight />
                                    </button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
                <div className="w-8 absolute right-12">
                    {!isAtEnd && <ScrollButton onClick={() => scrollHandler("right")} direction="right" />}
                </div>
            </div>
        </div>
    );
};

export default SliderArticle;

'use client'

import React, { useEffect, useRef, useState } from 'react';
import { propuestas } from '../../app/api/data/propuestas'
import { IconChevronLeft } from '../Icon/IconChevronLeft';
import { IconChevronRight } from '../Icon/IconChevronRight';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { ChevronRight, RocketIcon, ShieldIcon } from 'lucide-react';
import Link from 'next/link';
import { LawProposalState } from '@/interface/states';

interface LawProposalProps {
    title: string;
    subtitulo: string;
    progress: number;
    link?: string;
}

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

const CardPropuestas = () => {
    const divRef = useRef<HTMLDivElement | null>(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

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
            setTimeout(() => setIsAnimating(false), 1000); // Adjust the timeout based on the animation duration
            updateScrollStatus();
        }
    };


    return (
        <div className='flex flex-col sm:py-8 sm:pb-16'>

            <h2 className='block px-3  pl-8 sm:pl-16  font-display tracking-tight [text-wrap:balance] text-2xl font-medium sm:text-4xl text-azulv'>

                Propuestas de Campaña
            </h2>

            <div className='flex mt-6 sm:mt-12 relative h-auto justify-center items-center'>
                <div className="w-8 absolute left-0 ">
                    {!isAtStart && <ScrollButton onClick={() => scrollHandler("left")} direction="left" />}
                </div>
                <div
                    className='container mx-auto grid grid-cols-1 gap-4 sm:gap-9 sm:grid-cols-2 lg:grid-cols-3'
                >
                    {propuestas.map((item, index) => (
                        <Dialog key={item.id} >
                            <DialogTrigger className=''>
                                <div className="bg-card rounded-lg shadow-md p-4 sm:p-6 h-36">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-primary rounded-full p-2 text-primary-foreground">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                                />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-semibold">{item.titulo}</h3>
                                    </div>
                                    <p className="mt-4 text-sm text-start text-muted-foreground ">
                                        {item.subtitulo}
                                    </p>
                                </div>


                            </DialogTrigger>

                            <DialogContent className="flex flex-col max-h-[95dvh] p-2">
                                <DialogHeader>
                                    <DialogTitle className='pl-3 pt-2'>{item.titulo}</DialogTitle>
                                </DialogHeader>
                                <DialogDescription className="px-2 flex-grow overflow-y-auto">
                                    {item.propuestas?.map((propuesta, index) => (
                                        <article key={propuesta.id} className={`flex flex-col min-h-[110px]items-start p-3 mb-3  transition-colors rounded-sm shadow-md border-gray-200 border hover:bg-gray-100
                                        ${propuesta.estado !== LawProposalState.NoIniciado ? 'hover:bg-teal-50' : ''}`}>


                                            <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                                <span>{propuesta.titulo}</span>
                                            </h3>
                                            <div className='pl-5 pt-1'>

                                                <p className="mt-0 text-sm text-zinc-600 dark:text-zinc-400 text-justify list-item">{propuesta.text}</p>
                                                {
                                                    propuesta.text2 && (

                                                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 text-justify list-item">{propuesta.text2}</p>
                                                    )
                                                }
                                                {
                                                    propuesta.text3 && (

                                                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 text-justify list-item">{propuesta.text3}</p>
                                                    )
                                                }
                                                {
                                                    propuesta.text4 && (

                                                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 text-justify list-item">{propuesta.text4}</p>
                                                    )
                                                }
                                                {
                                                    propuesta.text5 && (

                                                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 text-justify list-item">{propuesta.text5}</p>
                                                    )
                                                }
                                                {
                                                    propuesta.text6 && (

                                                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 text-justify list-item">{propuesta.text6}</p>
                                                    )
                                                }
                                            </div>
                                            <div className="flex w-full justify-between items-center mt-1">
                                                <Link href={propuesta.link} className="flex items-center justify-center">
                                                    <p className={`flex items-center font-medium text-xs ${propuesta.ver ? 'cursor-pointer text-blue-400' : 'cursor-default text-gray-500'}`}>
                                                        Descargar Proyecto
                                                    </p>
                                                    <ChevronRight className={`w-3 h-3 relative mt-0.5 z-10 ${propuesta.ver ? 'cursor-pointer text-blue-400 hover:to-blue-600' : 'cursor-default text-gray-500'}`} />
                                                </Link>
                                                <p className={`border border-gray-100 bg-white rounded-sm p-1 mt-1 text-xs 
                                                     ${propuesta.estado !== LawProposalState.NoIniciado ? 'text-teal-500 ' : 'bg-gray-100'}`}>{propuesta.estado}</p>
                                            </div>
                                        </article>
                                    ))}
                                </DialogDescription>
                                <DialogFooter>
                                    {/* Aquí puedes agregar contenido del footer si es necesario */}
                                </DialogFooter>
                            </DialogContent>

                        </Dialog>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default CardPropuestas;

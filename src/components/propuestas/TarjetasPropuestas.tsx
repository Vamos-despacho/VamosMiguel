'use client';

import React from 'react';
import { propuestas } from '../../app/api/data/propuestas';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { LawProposalState } from '@/interface/states';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { LucideSchool } from "lucide-react";
import { BsHeartPulse } from "react-icons/bs";
import { PiUsersFourLight } from 'react-icons/pi';
import { IoBookOutline } from "react-icons/io5";
import { PiBriefcase } from "react-icons/pi";

import { IoIosMore } from "react-icons/io";
const IconWithCheck: React.FC<{ icon: React.ElementType }> = ({ icon: IconComponent }) => (
    <div className=" relative  p-1 rounded-lg ">
        <div className="flex items-center justify-center h-full">
            <IconComponent className="w-10 h-10" />
        </div>
    </div>
);
import { TbHeartHandshake } from "react-icons/tb";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { GiTap } from "react-icons/gi";
import { PiProhibitBold } from "react-icons/pi";
import { MdOutlineBalance } from "react-icons/md";
import { RiGovernmentLine } from "react-icons/ri";
import { CgFileDocument } from "react-icons/cg";


const renderIcon = (eventName: string) => {
    switch (eventName) {
        case 'Salud':
            return <div className=" relative  p-1 rounded-lg ">
                <div className="flex items-center justify-center h-full">
                    <TbHeartHandshake className="w-6 h-6" />
                </div>
            </div>;
        case 'Educación':
            return <div className=" relative  p-1  rounded-lg ">
                <div className="flex items-center justify-center h-full">
                    <IoBookOutline className="w-6 h-6" />
                </div>
            </div>

        case 'Desempleo':
            return <div className=" relative  p-1 rounded-lg ">
                <div className="flex items-center justify-center h-full">
                    <PiBriefcase className="w-6 h-6" />
                </div>
            </div>
        case 'Deporte':
            return <div className=" relative  p-1 rounded-lg ">
                <div className="flex items-center justify-center h-full">
                    <MdOutlineSportsSoccer className="w-6 h-6" />
                </div>
            </div>
        case 'Servicios Básicos':
            return <div className=" relative  p-1 rounded-lg ">
                <div className="flex items-center justify-center h-full">
                    <GiTap className="w-6 h-6" />
                </div>
            </div>
        case 'Anticorrupción':
            return <div className=" relative  p-1 rounded-lg ">
                <div className="flex items-center justify-center h-full">
                    <PiProhibitBold className="w-6 h-6" />
                </div>
            </div>
        case 'Justicia':
            return <div className=" relative  p-1 rounded-lg ">
                <div className="flex items-center justify-center h-full">
                    <MdOutlineBalance className="w-6 h-6" />
                </div>
            </div>
        case 'Institucionalidad':
            return <div className=" relative  p-1 rounded-lg ">
                <div className="flex items-center justify-center h-full">
                    <RiGovernmentLine className="w-6 h-6" />
                </div>
            </div>
        case 'Reglamento Interno de la Asamblea':
            return <div className=" relative  p-1 rounded-lg ">
                <div className="flex items-center justify-center h-full">
                    <CgFileDocument className="w-6 h-6" />
                </div>
            </div>

        default:
            return null;
    }
};

const CardPropuestas = () => {
    return (

        <div className='mx-auto max-w-7xl sm:px-6 px-0 lg:px-8   sm:py-12 md:mb-10 '>
            <h2 className='block px-3 font-display tracking-tight [text-wrap:balance] text-3xl font-medium sm:text-4xl text-azulv'>

                Propuestas de Campaña
            </h2>

            <div className='flex mt-6 sm:mt-12 relative h-auto justify-center items-center'>
                <div className='px-3 sm:container justify-center mx-auto grid grid-cols-2 gap-4 sm:gap-9 sm:grid-cols-2 lg:grid-cols-3'>
                    {propuestas.map((item, index) => (
                        <Dialog key={item.id}>
                            <DialogTrigger className=''>
                                <div className="bg-card rounded-lg shadow-md p-2 sm:p-5 sm:h-36">
                                    <div className="flex flex-col sm:flex-row items-center gap-2">
                                        <div className="bg-primary rounded-full p-1 text-primary-foreground">

                                            {
                                                renderIcon(item.titulo)
                                            }

                                        </div>
                                        <h3 className="sm:text-lg font-semibold">{item.titulo}</h3>
                                    </div>
                                    <p className="hidden sm:block mt-2 md:mt-4 text-sm text-start text-muted-foreground ">
                                        {item.subtitulo}
                                    </p>
                                </div>
                            </DialogTrigger>

                            <DialogContent className="flex flex-col max-h-[95dvh] p-2">
                                <DialogHeader>
                                    <DialogTitle className='pl-3 pt-2'>{item.titulo}</DialogTitle>
                                </DialogHeader>
                                <DialogDescription className="px-2 flex-grow overflow-y-auto">
                                    {item.propuestas?.map((propuesta) => (
                                        <article key={propuesta.id} className={`flex flex-col min-h-[110px] items-start p-3 mb-3 transition-colors rounded-sm shadow-md border-gray-200 border hover:bg-gray-100 ${propuesta.estado !== LawProposalState.NoIniciado ? 'hover:bg-teal-50' : ''}`}>
                                            <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                                <span>{propuesta.titulo}</span>
                                            </h3>
                                            <div className='pl-5 pt-1'>
                                                <p className="mt-0 text-sm text-zinc-600 dark:text-zinc-400 text-justify list-item">{propuesta.text}</p>
                                                {propuesta.text2 && (<p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 text-justify list-item">{propuesta.text2}</p>)}
                                                {propuesta.text3 && (<p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 text-justify list-item">{propuesta.text3}</p>)}
                                                {propuesta.text4 && (<p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 text-justify list-item">{propuesta.text4}</p>)}
                                                {propuesta.text5 && (<p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 text-justify list-item">{propuesta.text5}</p>)}
                                                {propuesta.text6 && (<p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 text-justify list-item">{propuesta.text6}</p>)}
                                            </div>
                                            <div className="flex w-full justify-between items-center mt-1">
                                                <Link href={propuesta.link} className="flex items-center justify-center">
                                                    <p className={`flex items-center font-medium text-xs ${propuesta.ver ? 'cursor-pointer text-blue-400' : 'cursor-default text-gray-500'}`}>
                                                        Descargar Proyecto
                                                    </p>
                                                    <ChevronRight className={`w-3 h-3 relative mt-0.5 z-10 ${propuesta.ver ? 'cursor-pointer text-blue-400 hover:to-blue-600' : 'cursor-default text-gray-500'}`} />
                                                </Link>
                                                <p className={`border border-gray-100 bg-white rounded-sm p-1 mt-1 text-xs ${propuesta.estado !== LawProposalState.NoIniciado ? 'text-teal-500 ' : 'bg-gray-100'}`}>
                                                    {propuesta.estado}
                                                </p>
                                            </div>
                                        </article>
                                    ))}
                                </DialogDescription>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardPropuestas;



const IconEducation = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 8l10 6 10-6-10-6zm0 8l6 3-6 3-6-3 6-3zm0 6v4m0-4l6 3-6-3-6 3 6-3z" />
        </svg>

    );
}
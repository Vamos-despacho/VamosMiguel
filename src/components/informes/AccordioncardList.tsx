'use client'
import React, { useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CustomDialog } from '../anteproyecto/EmergenteProyecto';
import { ChevronRight } from 'lucide-react';

interface ListItem {
    id: string;
    title: string;
    content: string;
    link: string;
    estado: string;
}

interface AccordionCardListProps {
    items: ListItem[];
}

const AccordionCardList: React.FC<AccordionCardListProps> = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentTitle, setCurrentTitle] = useState('');
    const [currentLink, setCurrentLink] = useState('');

    const handleOpenDialog = (titulo: string, link: string) => {
        setCurrentTitle(titulo);
        setCurrentLink(link);
        setIsOpen(true);
    };
    return (
        <div className='h-[472px]  justify-center flex flex-col items-center' >
            <div>

                <div className='pb-3'>
                    <CardTitle>Proyectos de ley</CardTitle>

                </div>

                <Accordion type="single" collapsible className="w-full max-w-md mx-auto">
                    {items.map((item) => (
                        <AccordionItem key={item.id} value={item.id}>
                            <AccordionTrigger >
                                <h3 className={`text-base font-semibold text-start md:tracking-tight dark:text-zinc-100`}>
                                    <span>
                                        {item.title}
                                    </span>
                                </h3>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="pl-3">
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400 text-justify">{item.content}</p>
                                </div>
                                <div className="flex w-full justify-between items-center mt-3">
                                    <div className="flex items-center justify-center pl-2 cursor-pointer">
                                        <p
                                            className={`flex items-center font-medium text-xs cursor-pointer text-blue-500  `}
                                            onClick={() => handleOpenDialog(item.title, item.link)}
                                        >
                                            Descargar Proyecto
                                        </p>
                                        <ChevronRight
                                            className='w-3 h-3 relative mt-0.5 z-10 cursor-pointer text-blue-400 hover:text-blue-600 '
                                            onClick={() => handleOpenDialog(item.title, item.link)}
                                        />
                                    </div>
                                    <p className={`border border-gray-100 bg-white rounded-sm p-1 mt-1 text-xs px-2  text-teal-500 `}>
                                        {item.estado}
                                    </p>
                                </div>
                            </AccordionContent>
                            {
                                item.link && (
                                    <CustomDialog
                                        title={currentTitle}
                                        isOpen={isOpen}
                                        onClose={() => setIsOpen(false)}
                                        pdfFile={currentLink} // URL completa del archivo PDF
                                    />
                                )
                            }
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>

        </div >
    );
};

export default AccordionCardList;
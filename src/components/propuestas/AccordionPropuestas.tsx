import React, { FC, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LawProposalState } from "@/interface/states";
import { ChevronRight } from "lucide-react";
import { CustomDialog } from "../anteproyecto/EmergenteProyecto";

interface AccordionProps {
    items: {
        link?: string;
        id: string;
        titulo: string;
        text: string[];
        ver: boolean;
        estado: string;
    }[];
}

const ProposalAccordion: FC<AccordionProps> = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentTitle, setCurrentTitle] = useState('');
    const [currentLink, setCurrentLink] = useState('');

    const handleOpenDialog = (titulo: string, link: string) => {
        setCurrentTitle(titulo);
        setCurrentLink(link);
        setIsOpen(true);
    };

    return (
        <Accordion type="single" collapsible className="w-full p-2">
            {items.map((item, index) => (
                <AccordionItem key={item.id} value={`item-${index}`}>
                    <AccordionTrigger className={`text-base font-semibold text-start md:tracking-tight dark:text-zinc-100 ${item.estado !== LawProposalState.NoIniciado ? 'bg-teal-50' : ''}`}>
                        <h3 className={`text-base font-semibold text-start md:tracking-tight dark:text-zinc-100`}>
                            <span>
                                {item.titulo}
                            </span>
                        </h3>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="pl-5 pt-1">
                            {item.text.map((text, idx) => (
                                <p key={idx} className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 text-justify list-item">{text}</p>
                            ))}
                        </div>
                        <div className="flex w-full justify-between items-center mt-1">
                            <div className="flex items-center justify-center pl-2">
                                <p
                                    className={`flex items-center font-medium text-xs ${item.ver ? 'cursor-pointer text-blue-400' : 'cursor-default text-gray-500'}`}
                                    onClick={() => item.ver && item.link ? handleOpenDialog(item.titulo, item.link) : null}
                                >
                                    Descargar Proyecto
                                </p>
                                <ChevronRight
                                    className={`w-3 h-3 relative mt-0.5 z-10 ${item.ver ? 'cursor-pointer text-blue-400 hover:text-blue-600' : 'cursor-default text-gray-500'}`}
                                    onClick={() => item.ver && item.link ? handleOpenDialog(item.titulo, item.link) : null}
                                />
                            </div>
                            <p className={`border border-gray-100 bg-white rounded-sm p-1 mt-1 text-xs px-2 ${item.estado !== LawProposalState.NoIniciado ? 'text-teal-500 ' : 'bg-gray-100'}`}>
                                {item.estado}
                            </p>
                        </div>
                    </AccordionContent>
                    {item.link && (
                        <CustomDialog
                            title={currentTitle}
                            isOpen={isOpen}
                            onClose={() => setIsOpen(false)}
                            pdfFile={currentLink} // URL completa del archivo PDF
                        />
                    )}
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default ProposalAccordion;

'use client';

import React, { useState, useEffect } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { IMesDocument } from '@/interface/activites';
import { SchoolIcon } from 'lucide-react';
import { BsHeartPulse } from 'react-icons/bs';
import { PiUsersFourLight } from 'react-icons/pi';
import { IoIosMore } from 'react-icons/io';
import BtnDeleteAlert from '../BtnDeleteAlert';
import { updateComsionMonth } from '@/libs/event/actions';

interface ShowMonthProps {
    month: IMesDocument[];
}

const iconMap: Record<string, React.ComponentType> = {
    SchoolIcon,
    BsHeartPulse,
    PiUsersFourLight,
    IoIosMore,
};

const formatFecha = (fecha: Date) => {
    return new Date(fecha).toLocaleDateString("es-ES", { year: "numeric", month: "long" });
};

const ShowMonth: React.FC<ShowMonthProps> = ({ month }) => {
    const [formValues, setFormValues] = useState<Record<string, number>>({});

    useEffect(() => {
        // Inicializar formValues con los valores de la data
        const initialValues: Record<string, number> = {};
        month.forEach((mes) => {
            mes.categorias.forEach((categoria) => {
                if (categoria.categoria.label !== 'Otros') {
                    initialValues[categoria.categoria._id.toString()] = categoria.asistencia || 0; // Asigna el valor de la data, o 0 si no hay valor
                }
            });
        });
        setFormValues(initialValues);
    }, [month]);

    const handleInputChange = (id: string, value: number) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    };

    const handleFilterItems = (id: string) => {
        // Implementación de filtro
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const id = formData.get('idEvento')?.toString();
        if (!id) return;

        const resp = await updateComsionMonth(id, formValues);
        console.log(formValues);
    };

    if (!month || month.length === 0) return null;

    return (
        <div className='max-w-sm ml-3 gap-1'>
            {month.map((mes) => (
                <Accordion key={mes._id.toString()} type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className='flex px-3 bg-gray-100 justify-between items-center'>
                            <span>{formatFecha(mes.month)}</span>
                            <div className='flex gap-2'>
                                {mes.categorias.map((comision) => {
                                    const IconComponent = iconMap[comision.categoria.icon];
                                    return (
                                        <div key={comision.categoria._id.toString()} className="px-2 py-1 rounded-md flex justify-center items-center">
                                            {IconComponent ? <IconComponent /> : <span>Icon not found</span>}
                                        </div>
                                    );
                                })}
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='flex flex-col px-4 gap-2'>
                            <form onSubmit={handleSubmit}>
                                {mes.categorias.map((categoria) => (
                                    <div key={categoria.categoria._id.toString()} className='flex justify-between border-b bg-white p-1 mt-2'>
                                        <input type="hidden" name="idEvento" value={mes._id.toString()} />

                                        <label>{categoria.categoria.label}</label>
                                        {categoria.categoria.label !== 'Otros' && (
                                            <input
                                                type='number'
                                                className='border rounded-md p-1 w-16 text-center'
                                                value={formValues[categoria.categoria._id.toString()] || ''}
                                                onChange={(e) => handleInputChange(categoria.categoria._id.toString(), Number(e.target.value))}
                                            />
                                        )}
                                    </div>
                                ))}
                                <div className='flex justify-around mt-2 pb-2'>
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                                        Guardar
                                    </button>
                                    <BtnDeleteAlert
                                        id={mes._id.toString()}
                                        link='deleteMonth'
                                        msg={formatFecha(mes.month)}
                                        onClickDelete={() => handleFilterItems(mes._id.toString())}
                                    />
                                </div>
                            </form>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            ))}
        </div>
    );
};

export default ShowMonth;

import { propuestas } from '@/app/api/data/propuestas';
import React from 'react';
import ProposalAccordion from './AccordionPropuestas';

export const PropuestasPage = () => {
    return (
        <div className="container mx-auto p-2 sm:p-4 ">
            {propuestas.map((propuesta, index) => (
                <div
                    key={propuesta.id}
                    className={`mb-8 md:mb-4 md:p-14 border-l border-t  ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                    <div className=" pl-3 pt-3">
                        <h2 className="text-2xl font-bold text-gray-700 ">{propuesta.titulo}</h2>
                    </div>
                    <div className='px-1 md:px-2'>
                        <ProposalAccordion
                            items={propuesta.propuestas.map(p => ({
                                id: p.id.toString(), // Convertir número a cadena
                                titulo: p.titulo,
                                text: [p.text, p.text2, p.text3, p.text4, p.text5, p.text6].filter((t): t is string => t !== undefined),
                                ver: p.ver,
                                estado: p.estado.toString(),
                                link: p.link
                            }))}
                        />
                    </div>
                </div>
            ))}

            {/* <div>
                <h2 className="text-2xl font-bold text-gray-700">Propuestas de Campaña</h2>
                {propuestas.map((propuesta, index) => (
                    <div
                        key={propuesta.id}
                        className={`mb-8 md:mb-12 p-6 md:p-8 border-l border-t  ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                        <div className=" ">
                            <h2 className="text-2xl font-bold text-gray-700 ">Titulo: {propuesta.titulo}</h2>
                            <h2 className="text-2xl font-bold text-gray-700 ">Descripción: {propuesta.subtitulo}</h2>
                        </div>
                        <div className='px-1 md:px-2'>
                            {propuesta.propuestas.map(p => (
                                <div key={p.id} className="mb-4">
                                    <h3 className="text-xl font-bold text-gray-700">{p.titulo}</h3>
                                    <p className="text-gray-600">{p.text}</p>
                                    <p className="text-gray-600">{p.text2}</p>
                                    <p className="text-gray-600">{p.text3}</p>
                                    <p className="text-gray-600">{p.text4}</p>
                                    <p className="text-gray-600">{p.text5}</p>
                                    <p className="text-gray-600">{p.text6}</p>


                                </div>
                            )
                            )}

                        </div>
                    </div>
                )
                )}
            </div> */}
        </div>
    );
}

import { FC } from "react";

import { propuestas } from '../../app/api/data/propuestas';

import ProposalAccordion from "./AccordionPropuestas";

const ProposalCard: FC = () => (
    <div className="grid gap-10 gap-y-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
        {propuestas.map((propuesta) => (
            <div key={propuesta.id} className="bg-white border border-neutral-50 shadow-lg rounded-lg p-7 min-h-[450px]">
                <div className="flex justify-center items-center">
                    <h2 className="text-2xl font-semibold">{propuesta.titulo}</h2>
                </div>
                <div className="mt-2 p-2">
                    <ProposalAccordion items={propuesta.propuestas.map(p => ({
                        id: p.id.toString(), // Convertir número a cadena
                        titulo: p.titulo,
                        text: [p.text, p.text2, p.text3, p.text4, p.text5, p.text6].filter((t): t is string => t !== undefined),
                        ver: p.ver,
                        estado: p.estado.toString()
                    }))} />
                </div>
            </div>
        ))}
    </div>
);

export default ProposalCard;


// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
// } from "@/components/ui/accordion"

// import { propuestas } from '../../app/api/data/propuestas'
// import { ChevronRight } from "lucide-react"
// import { LawProposalState } from "@/interface/states"

// const TarjetaPropuestasPage = () => {
//     return (
//         <div className='grid gap-10 gap-y-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
//             {propuestas.map((propuesta) => (
//                 <div key={propuesta.id} className='bg-white border border-neutral-50 shadow-lg rounded-lg p-7  min-h-[300px]'>
//                     <div className=" flex justify-center items-center">
//                         <h2 className='text-2xl font-semibold'>{propuesta.titulo}</h2>
//                         {/* <p className='mt-1 text-gray-600'>{propuesta.subtitulo}</p> */}
//                     </div>
//                     <div className='mt-2 p-2'>
//                         {propuesta.propuestas.map((propuesta, index) => (
//                             <div key={propuesta.id} className='flex items-center'>
//                                 <Accordion type="single" collapsible className="w-full">
//                                     <AccordionItem value={`item-${index}`}>
//                                         <AccordionTrigger>
//                                             <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
//                                                 <span>{propuesta.titulo}</span>
//                                             </h3>
//                                             {/* {propuesta.titulo} */}
//                                         </AccordionTrigger>
//                                         <AccordionContent>
//                                             <div className='pl-5 pt-1'>

//                                                 <p className="mt-0 text-sm text-zinc-600 dark:text-zinc-400 text-justify list-item">{propuesta.text}</p>
//                                                 {
//                                                     propuesta.text2 && (

//                                                         <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 text-justify list-item">{propuesta.text2}</p>
//                                                     )
//                                                 }
//                                                 {
//                                                     propuesta.text3 && (

//                                                         <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 text-justify list-item">{propuesta.text3}</p>
//                                                     )
//                                                 }
//                                                 {
//                                                     propuesta.text4 && (

//                                                         <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 text-justify list-item">{propuesta.text4}</p>
//                                                     )
//                                                 }
//                                                 {
//                                                     propuesta.text5 && (

//                                                         <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 text-justify list-item">{propuesta.text5}</p>
//                                                     )
//                                                 }
//                                                 {
//                                                     propuesta.text6 && (

//                                                         <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400 text-justify list-item">{propuesta.text6}</p>
//                                                     )
//                                                 }
//                                             </div>
//                                             <div className="flex w-full justify-between items-center mt-1 ">
//                                                 <div className="flex items-center justify-center pl-2">
//                                                     <p className={`flex items-center font-medium text-xs ${propuesta.ver ? 'cursor-pointer text-blue-400' : 'cursor-default text-gray-500'}`}>
//                                                         Descargar Proyecto
//                                                     </p>
//                                                     <ChevronRight className={`w-3 h-3 relative mt-0.5 z-10 ${propuesta.ver ? 'cursor-pointer text-blue-400 hover:to-blue-600' : 'cursor-default text-gray-500'}`} />
//                                                 </div>
//                                                 <p className={`border border-gray-100 bg-white rounded-sm p-1 mt-1 text-xs 
//                                                      ${propuesta.estado !== LawProposalState.NoIniciado ? 'text-teal-500 ' : 'bg-gray-100'}`}>{propuesta.estado}</p>
//                                             </div>
//                                         </AccordionContent>
//                                     </AccordionItem>
//                                 </Accordion>

//                                 <p className='ml-2'></p>
//                             </div>
//                         ))}



//                     </div>
//                 </div>

//             ))}
//         </div>

//     )
// }

// export default TarjetaPropuestasPage
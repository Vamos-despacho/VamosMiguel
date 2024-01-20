
"use client"
import Deporte from "@/components/propuestas/Deporte";
import PropuestasPDF from "@/components/propuestas/PropuestasPDF";
import { Button } from "@/components/ui/button"

import { useState } from "react";
const propuestas = [
    { nombre: 'Deporte', pag: 1 },
    { nombre: 'Educación', pag: 2 },
    { nombre: 'Salud', pag: 3 },
    { nombre: 'Servicios Básicos', pag: 4 },
    { nombre: 'Desempleo', pag: 5 },
    { nombre: 'Justicia', pag: 6 },
    { nombre: 'Anticorrupción', pag: 7 },
    { nombre: 'Institucionalidad', pag: 8 }
]

const Propuestas = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };
    return (
        <div className="mx-auto ">
            <div className="mx-auto flex justify-center items-center  ">
                <div >
                    <h1>
                        <span className=" block font-semibold  text-black mb-8 lg:text-6xl text-3xl sm:text-4xl ">
                            Propuestas de campaña</span>
                    </h1>
                </div>
            </div>

            <div className="mx-auto w-screen px-2 mb-16 ">
                <div className="grid md:grid-cols-4 grid-cols-2 md:gap-y-2 gap-y-1 gap-x-1 sm:gap-y-3 h-auto mx-auto max-w-4xl ">
                    {
                        propuestas.map((propuesta, index) => (


                            <Button
                                arial-label='Ver'
                                key={index}
                                className={`rounded-md border border-slate-200 hover:border-slate-300 hover:bg-slate-200 ${currentPage === propuesta.pag ? 'bg-white text-black' : 'bg-slate-300 text-gray-800'}`}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {propuesta.nombre}
                            </Button>

                        ))
                    }
                </div>
                {/* <Deporte pag={currentPage} /> */}

                <PropuestasPDF pag={currentPage} />

            </div>


        </div>
    )
}
export default Propuestas
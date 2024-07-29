'use client'
import React, { useState } from 'react'
import { Anteproyectos } from '../api/data/anteproyectos'
import { Card } from '@/components/ui/card'
import CardAnteProyecto from '@/components/anteproyecto/CardAnteProyecto'
import PropuestasPDF from '@/components/propuestas/PropuestasPDF'
import Link from 'next/link'


const AnteProyectos = () => {
    const [isOpen, setIsOpen] = useState(true)
    return (
        // <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-6 min-h-[100dvh]'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8 mt-10 sm:mt-32 lg:mt-20 min-h-[100dvh] pb-20'>
            <div className='mx-auto max-w-2xl lg:max-w-none'>
                <div className=''>

                    <h2 className='block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-azulv'>
                        Anteproyectos
                    </h2>
                    <div className="mt-8 ">
                        <p className="mb-3 text-xl font-light  text-neutral-700">
                            Descubre nuestras propuestas legislativas, orientadas a mejorar la calidad de vida y abordar los desafíos actuales de manera efectiva.
                        </p>
                        <p className="mb-4 text-xl text-neutral-700 font-light  font-base">
                            Participa con tus comentarios y sugerencias para formular leyes más efectivas y pertinentes que reflejen las necesidades de nuestra comunidad en la sección de
                            <Link href='/participacion-ciudadana'
                                className=' hover:shadow-sm hover:border ml-1 text-xl rounded-lg px-2 py-1 text-blue-500 cursor-pointer'
                            >
                                Participación Ciudadana.
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className=' mx-auto max-w-7xl md:px-6 lg:px-2 mt-16'>
                <div className='mx-auto max-w-2xl lg:max-w-none'>
                    <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>

                        {
                            Anteproyectos.map((anteproyecto) => (
                                <CardAnteProyecto key={anteproyecto.id} {...anteproyecto} />
                            ))

                        }
                    </div>
                </div>
            </div>


        </div >
    )
}

export default AnteProyectos
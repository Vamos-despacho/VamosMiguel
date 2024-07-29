"use client"
import TarjetaPropuestasPage from '@/components/propuestas/TarjetaPropuestasPage'
import React from 'react'

import { PropuestasPage } from '@/components/propuestas/PropuestasPage';

const Proyectos = () => {
    return (
        <div className='mx-auto max-w-7xl sm:px-6 px-0 lg:px-8   sm:py-20 py-6 min-h-[100dvh]'>
            <h2 className='block px-3 font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-azulv'>

                Propuestas de Campaña
            </h2>
            {/* <TarjetaPropuestasPage /> */}
            <div className='mt-6'>

                <PropuestasPage />
            </div>
        </div>
    )
}

export default Proyectos
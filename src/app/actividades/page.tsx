'use client'
import Calendario from '@/components/calendario/Calendario'




import React from 'react'


const ActividadesPage = () => {
    return (
        <div className='mx-auto w-full max-w-7xl justify-center items-center h-full  sm:py-20 py-6 space-y-1 pb-16'>
            <div className=" px-2 sm:px-10 mb-8">
                <h2 className='block px-3 font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-azulv'>
                    Actividades Legislativas
                </h2>
                <p className="text-muted-foreground mt-4">
                    Revisa un resumen de las actividades y sesiones en el pleno y en las comisiones. Garantizamos la transparencia y el cumplimiento de las responsabilidades legislativas.
                </p>
            </div>



            <Calendario />

        </div>
    )
}

export default ActividadesPage
import FormParticipacionCiudadana from '@/components/ciudadana/ParticipacionForm'
import React from 'react'

const PageParticipacionCiudadana = () => {
    return (
        <div className='mx-auto max-w-7xl px-6 lg:px-8 mt-10 sm:mt-32 lg:mt-20 pb-10 min-h-[100dvh]'>
            <div className='mx-auto max-w-2xl lg:max-w-none'>
                <div className='max-w-3xl'>

                    <h2 className='block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-azulv'>
                        Participación Ciudadana
                    </h2>
                    <div className="mt-6 ">
                        <p className="mb-4 text-2xl font-display text-neutral-700">
                            Queremos escuchar tus ideas y sugerencias para mejorar nuestras leyes y hacer que reflejen mejor las necesidades de nuestra comunidad.                         </p>
                        <p className="mb-4 text-2xl text-neutral-700  font-display">
                            Por favor, completa el siguiente formulario para enviarnos tus propuestas.
                        </p>
                    </div>
                </div>
            </div>
            <div className=' mx-auto max-w-7xl md:px-6 lg:px-2 mt-10'>
                <FormParticipacionCiudadana />
            </div>


        </div >
    )
}

export default PageParticipacionCiudadana
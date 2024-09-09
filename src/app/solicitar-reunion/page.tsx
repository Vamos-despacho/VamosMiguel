import SolicitarReunion from '@/components/reunion/SolicitarReunion'
import React from 'react'

const SolicitarReunionP = () => {
    return (
        <div className='mx-auto max-w-7xl px-6 lg:px-8 mt-8 sm:mt-14 lg:mt-16 pb-10 min-h-[100dvh]'>
            <div className='mx-auto max-w-3xl lg:max-w-none'>
                <div className=''>

                    <h2 className='block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-azulv'>
                        Solicitar Reunión
                    </h2>
                    <div className="mt-6 ">
                        <p className="mb-4 text-xl font-display text-neutral-700">
                            Solicite una reunión para conversar sobre sus inquietudes, ideas o proyectos. Su opinión es valiosa y ayudará a orientar la labor legislativa en beneficio de la comunidad.
                        </p>
                        {/* <p className="mb-4 text-xl font-display text-neutral-700">
                            Solicita una reunión para discutir tus inquietudes, ideas o proyectos. Tu voz es importante en el proceso legislativo y estamos aquí para escucharte y explorar cómo tus propuestas pueden contribuir al bienestar de la comunidad.
                        </p> */}
                        <p className="mb-1 text-xl text-neutral-600  font-display">
                            Completa el siguiente formulario para solicitar una reunión.
                        </p>
                    </div>
                </div>
            </div>
            <div className=' mx-auto max-w-7xl md:px-6 lg:px-2 mt-10 pb-10'>
                <SolicitarReunion />
            </div>


        </div >
    )
}

export default SolicitarReunionP
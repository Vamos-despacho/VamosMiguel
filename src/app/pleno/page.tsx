import { VideoPleno } from '@/components/pleno/VideoPleno'
import React from 'react'

const PlenoPage = () => {
    return (
        <div className='mx-auto max-w-7xl px-6 lg:px-8 mt-6 sm:mt-32 lg:mt-14 min-h-[100dvh] pb-16'>
            <div className='mx-auto max-w-2xl lg:max-w-none'>
                <div className='pb-4'>

                    <h2 className='block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-azulv'>
                        Actividad Legislativa
                    </h2>
                    <div className="mt-6 ">
                        <p className="mb-4 text-xl font-display text-neutral-700 ">
                            Accede a las intervenciones en el pleno, que incluyen debates clave, propuestas legislativas y la presentación de anteproyectos. Mantente informado sobre el trabajo y las contribuciones en el ámbito legislativo.                        </p>

                    </div>
                </div>
                <div className=' mx-auto max-w-7xl md:px-6 lg:px-2 mt-6'>
                    <div className='mx-auto max-w-2xl lg:max-w-none'>
                        <VideoPleno />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PlenoPage
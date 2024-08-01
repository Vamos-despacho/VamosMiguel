import { VideoPleno } from '@/components/pleno/VideoPleno'
import React from 'react'

const PlenoPage = () => {
    return (
        <div className='mx-auto w-full max-w-7xl justify-center items-center h-full  sm:py-20 py-6 space-y-1 pb-16'>
            {/* <div className='mx-auto max-w-2xl lg:max-w-none'> */}
            <div className=" px-2 sm:px-10 mb-8">

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
            {/* </div> */}
        </div>

    )
}

export default PlenoPage
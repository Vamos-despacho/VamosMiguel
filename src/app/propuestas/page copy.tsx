import React from 'react'

const Propuestas = () => {
    return (
        <div>
            <div className='mx-auto max-w-xl md:text-center'>
                <h2 className='font-display text-3xl tracking-tight text-slate-900 sm:text-4xl'
                > Propuestas de Campaña</h2>
            </div>

            <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">

                <li className='lg:col-span-1 items-center justify-center bg-lime-300'>
                    <ul className='flex flex-col gap-y-6 sm:gap-y-8'>
                        <li className='justify-center'>
                            <figure className="relative flex  justify-center rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                                <h1>Deporte</h1>
                            </figure>
                        </li>
                    </ul>
                </li>

                <li className=' lg:col-span-2'>
                    <ul className='flex flex-col gap-y-6 sm:gap-y-8'>
                        <li>

                            <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                                <p>Reforma a la ley de pandeporte para que cada provincia cuente con una secretaria provincial de deporte, para una supervisión de que los recursos lleguen a provincias del interior y que se cuente con mas programas para que el deporte sea incentivado a nivel nacional.</p>
                                <p>Presentar y aprobar ley que establezca el alto rendimiento deportivo.</p>
                                <p>Presentar y aprobar ley que reforme la carrera de educación física para que quienes se formen en ella puedan desarrollar deportistas de diferentes disciplinas de una manera científica.</p>
                                <p>Proponer ley que fomente y reglamente la medicina deportiva para que especialistas sean formados con los altos estándares y programas de rehabilitación en lesiones deportivas </p>
                            </figure>
                        </li>
                    </ul>
                </li>

            </ul>
        </div>

    )
}

export default Propuestas
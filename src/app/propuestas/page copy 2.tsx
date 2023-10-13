import React from 'react'

const Propuestas = () => {
    return (
        <div>
            {/* <div className='mx-auto max-w-xl md:text-center'>
                <h2 className='font-display text-3xl tracking-tight text-slate-900 sm:text-4xl'
                > Propuestas de Campaña</h2>
            </div> */}
            <div className="mx-auto max-w-2xl lg:max-w-none pb-10 pt-10">
                <div >
                    <h1>
                        <span className="mt-10 block font-asdFont   lg:text-5xl  sm:text-4xl">
                            Propuestas de campaña</span>
                    </h1>
                </div>
            </div>
            <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
                <div style={{ opacity: 1 }}>
                    <article>
                        <div className="grid grid-cols-3 gap-x-8 gap-y-8 py-14 
                        relative before:absolute after:absolute before:bg-neutral-950
                         after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-32 after:left-36 after:right-0 after:top-0 after:h-px">
                            <div className='col-span-full  sm:gap-x-8 lg:col-span-1  items-center  justify-start flex'>
                                <div className="sm:flex sm:items-center sm:gap-x-6 lg:block ">
                                    <p className='mt-6 pl-6 text-lg font-semibold sm:mt-0 lg:mt-8'>Deporte</p>
                                </div>
                            </div>
                            <div className='col-span-full lg:col-span-2 lg:max-w-2xl'>
                                {/* <p className='font-asdFont text-3xl font-medium pb-5'>
                                    Un Futuro Deportivo Más Brillante: Nuestra Visión Integral para el Deporte en el País
                                </p> */}

                                <ul className='space-y-4 text-base first-line: text-neutral-600  '>
                                    <li>
                                        <p>Reforma a la ley de pandeporte para que cada provincia cuente con una secretaria provincial de deporte, para una supervisión de que los recursos lleguen a provincias del interior y que se cuente con mas programas para que el deporte sea incentivado a nivel nacional.</p>
                                    </li>
                                    <li>
                                        <p>Presentar y aprobar ley que establezca el alto rendimiento deportivo.</p>
                                    </li>
                                    <li>
                                        <p>Presentar y aprobar ley que reforme la carrera de educación física para que quienes se formen en ella puedan desarrollar deportistas de diferentes disciplinas de una manera científica.</p>
                                    </li>
                                    <li>
                                        <p>Proponer ley que fomente y reglamente la medicina deportiva para que especialistas sean formados con los altos estándares y programas de rehabilitación en lesiones deportivas.</p>
                                    </li>
                                </ul>

                            </div>
                        </div>

                    </article>
                    <article>
                        <div className="grid grid-cols-3 gap-x-8 gap-y-8 py-14 
                        relative before:absolute after:absolute before:bg-neutral-950
                         after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-32 after:left-36 after:right-0 after:top-0 after:h-px">
                            <div className='col-span-full  sm:gap-x-8 lg:col-span-1  items-center  justify-start flex'>
                                <div className="sm:flex sm:items-center sm:gap-x-6 lg:block ">
                                    <p className='mt-6 pl-6 text-lg font-semibold sm:mt-0 lg:mt-8'>Educación</p>
                                </div>
                            </div>
                            <div className='col-span-full lg:col-span-2 lg:max-w-2xl'>
                                {/* <p className='font-asdFont text-3xl font-medium pb-5'>
                                    Un Futuro Deportivo Más Brillante: Nuestra Visión Integral para el Deporte en el País
                                </p> */}

                                <ul className='space-y-4 text-base first-line: text-neutral-600  '>
                                    <li>
                                        <p>Reforma a la ley de pandeporte para que cada provincia cuente con una secretaria provincial de deporte, para una supervisión de que los recursos lleguen a provincias del interior y que se cuente con mas programas para que el deporte sea incentivado a nivel nacional.</p>
                                    </li>
                                    <li>
                                        <p>Presentar y aprobar ley que establezca el alto rendimiento deportivo.</p>
                                    </li>
                                    <li>
                                        <p>Presentar y aprobar ley que reforme la carrera de educación física para que quienes se formen en ella puedan desarrollar deportistas de diferentes disciplinas de una manera científica.</p>
                                    </li>
                                    <li>
                                        <p>Proponer ley que fomente y reglamente la medicina deportiva para que especialistas sean formados con los altos estándares y programas de rehabilitación en lesiones deportivas.</p>
                                    </li>
                                </ul>


                            </div>
                        </div>

                    </article>
                </div>
            </div>

        </div>

    )
}

export default Propuestas
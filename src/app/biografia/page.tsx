import Image from 'next/image'
import React from 'react'

const Trayectoria = () => {
    return (
        <div className="mx-auto w-full max-w-7xl lg:px-8 ">
            <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                    <div className="grid grid-cols-1 gap-y-16 
                    lg:grid-cols-2 lg:grid-rows-[auto_1fr] 
                    lg:gap-y-12" >
                        <div className='lg:pl-20'>
                            <div className="max-w-xs px-2.5 lg:max-w-none" >
                                <Image alt='Miguel Angel' loading='lazy' width="800" height="800" decoding='async' data-nimg="1"
                                    sizes="(min-width: 1024px) 32rem, 20rem"
                                    src='/images/MiguelAngel.jpeg'
                                    className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800" />
                            </div>
                        </div>
                        <div className='lg:order-first lg:row-span-2'>
                            <h1 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl text-justify">
                                Miguel Ángel Campos Lima
                            </h1>
                            <h1 className="text-2xl font-semibold tracking-tight text-zinc-700 dark:text-zinc-100 sm:text-lg text-justify mt-1">
                                Candidato a Diputado independiente del circuito 9-1</h1>
                            <div className="mt-6 space-y-3 text-base text-zinc-600 dark:text-zinc-600 text-justify antialiased">
                                <p>Nacido el 1 de septiembre de 1998 en la Barriada San Vicente. Con 25 años de edad, su vida ha estado marcada por un fuerte compromiso con la institucionalidad y el servicio público </p>
                                <p>Miguel Ángel se graduó de bachiller en Ciencias y Letras del prestigioso Colegio San Vicente de Paúl, donde demostró su dedicación y pasión por el aprendizaje. Posteriormente, continuó su formación académica y obtuvo el título de Licenciado en Derecho y Ciencias Políticas, consolidando así su interés en la legislación y la política.</p>
                                <p>Su sed de conocimiento lo llevó a especializarse aún más en el ámbito político al obtener un diplomado en Asesor Político y Descentralización Pública. Además, su habilidad para comunicarse en dos idiomas lo convierte en un individuo bilingüe, lo que amplía su alcance y capacidad de colaboración en contextos internacionales.</p>
                                <p>Miguel Ángel Campos Lima es conocido por sus destacadas habilidades para trabajar en equipo y liderar con naturalidad. Su capacidad para desempeñarse bajo presión, junto con una inquebrantable voluntad para alcanzar sus metas, lo distinguen como un individuo comprometido y resiliente.</p>
                                <p>Su incursión en la política no es casualidad, sino una elección consciente motivada por su firme creencia en el poder de la juventud para aportar conocimientos y soluciones que impulsen el desarrollo de su país. Miguel Ángel aspira a ocupar un cargo como Diputado para aprovechar su influencia legislativa y proponer proyectos de ley que transformen la vida de las personas, mejorando su calidad de vida y promoviendo un futuro más prometedor para todos. Su determinación y pasión por el servicio público son ejemplos claros de su compromiso con el bienestar de la sociedad.</p>
                            </div>
                        </div>
                        <div className='lg:pl-20'>
                            <ul role='list'>
                                <li className="flex">
                                    <a className="group flex text-sm font-medium text-zinc-800
                                transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500" href="https://twitter.com/miguel3965">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-zinc-800 transition group-hover:fill-teal-500">
                                            <path d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z"></path>
                                        </svg>
                                        <span className="ml-4">Twitter</span>
                                    </a>
                                </li>
                                <li className="mt-4 flex">
                                    <a className="group flex text-sm font-medium text-zinc-800 
                                transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500" href="https://www.instagram.com/miguel3965">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-zinc-800 transition group-hover:fill-teal-500">
                                            <path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z"></path>
                                            <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"></path>
                                        </svg>
                                        <span className="ml-4">Instagran</span>
                                    </a>
                                </li>
                                <li className="mt-4 flex">
                                    <a className="group flex text-sm font-medium text-zinc-800 
                                transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500" href="https://www.facebook.com/miguelangel.camposlima">
                                        <svg viewBox="0 0 24 22" aria-hidden="true" className="h-6 w-6 flex-none fill-zinc-800 transition group-hover:fill-teal-500">
                                            <path
                                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />

                                        </svg>
                                        <span className="ml-4">Facebook</span>
                                    </a>
                                </li>


                                <li className="mt-8 border-t border-gray-300 pt-8 dark:border-zinc-700/40 flex">
                                    <a className="group flex text-sm font-medium text-zinc-800 
                                    transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                                        href="mailto:miguel@gmail.com">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-zinc-800 transition group-hover:fill-teal-500">
                                            <path fillRule="evenodd" d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"></path>
                                        </svg>
                                        <span className="ml-4">vamosmiguelangel@gmail.com</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trayectoria
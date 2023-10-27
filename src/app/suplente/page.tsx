import Image from 'next/image'
import React from 'react'

const Suplente = () => {
    return (
        <div className="mx-auto w-full max-w-7xl lg:px-8 ">
            <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-2xl lg:max-w-5xl">
                    <div className="grid grid-cols-1 gap-y-16 
                    lg:grid-cols-2 lg:grid-rows-[auto_1fr] 
                    lg:gap-y-12" >
                        <div className='lg:pr-20'>
                            <div className="max-w-xs px-2.5 lg:max-w-none" >
                                <Image width="800" height="800" decoding='async' data-nimg="1"
                                    alt='Sara Gómez' loading='lazy'
                                    sizes="(min-width: 1024px) 32rem, 20rem"
                                    src='/images/SaraItzela.jpeg'
                                    className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800" />
                            </div>
                        </div>
                        <div className=' lg:row-span-2'>
                            <h1 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl text-justify">
                                Sara Itzela Gómez Castillo </h1>
                            <h1 className="text-2xl font-semibold tracking-tight text-zinc-700 dark:text-zinc-100 sm:text-lg text-justify mt-1">
                                Candidata a Diputada Suplente independiente del circuito 9-1</h1>
                            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-600 text-justify antialiased ">
                                <p>Nacida un 14 de septiembre de 1966 y actualmente reside en Canto del Llano. Su trayectoria académica incluye estudios en el Instituto Urracá, posteriormente obtuvo su título de Licenciada en Farmacia, con una especialización en Farmacia Clínica y un enfoque especial en Atención Farmacéutica de la Universidad de Panamá.</p>
                                <p>Desde 1994 hasta la fecha, ha contribuido al Ministerio de Salud, ejerciendo con compromiso y dedicación sus funciones como farmacéutica. Además, ha continuado su formación con estudios en Docencia Superior y Alta Gerencia en la Universidad Latina.</p>
                                <p>Con más de 14 años de experiencia como docente, ha desempeñado un papel crucial como coordinadora de la carrera de Licenciatura en Farmacia en la Universidad Latina. Es miembro activo del Colegio Nacional de Farmacéuticos y de la Asociación de Farmacéuticos al Servicio del Estado, desempeñando un rol en la junta directiva del capítulo de Provincias Centrales.</p>
                                <p>A lo largo de su carrera, ha ocupado diversas posiciones, incluyendo la de regente y coordinadora de farmacia regional. Su lema de vida es claro y conmovedor: Servir y dejar huellas de bien en la vida. Esta dedicación y pasión por el servicio son rasgos que la definen y la convierten en una persona valiosa en nuestro entorno político y social.</p>
                            </div>
                        </div>
                        <div className='lg:pr-20'>
                            <ul role='list'>
                                <li className="flex">
                                    <a className="group flex text-sm font-medium text-zinc-800 
                                transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500" href="https://www.instagram.com/saragomez.vamos/">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-zinc-600 transition group-hover:fill-teal-500">
                                            <path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z"></path>
                                            <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"></path>
                                        </svg>
                                        <span className="ml-4">Instagran</span>
                                    </a>
                                </li>
                                <li className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-700/40 flex">
                                    <a className="group flex text-sm font-medium text-zinc-800 
                                    transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                                        href="mailto:sara@gmail.com">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none fill-zinc-600 transition group-hover:fill-teal-500">
                                            <path fillRule="evenodd" d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"></path>
                                        </svg>
                                        <span className="ml-4">sara@gmail.com</span>
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

export default Suplente
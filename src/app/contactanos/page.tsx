import { EnvelopeClosedIcon, MobileIcon } from '@radix-ui/react-icons';

import {
    Card,
    CardContent,

} from "@/components/ui/card";
import ContactForm from '@/components/ContactForm';
const Contactanos = () => {
    return (
        <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h3 className="block font-semibold font-display text-xl text-neutral-950">
                    Contáctanos
                </h3>
                <h3 className="mt-2 max-w-5xl text-xl font-medium tracking-tighter text-neutral-900 text-wrap:balance sm:text-5xl">
                    Si tienes algún comentario o consulta, dejanos un mensaje.
                </h3>
                <div className="mt-2 max-w-3xl text-xl text-neutral-900">
                    <span className="">¡Valoramos mucho tu opinión!</span>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
                        {/* Formulario */}

                        <div className="pt-10 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                            <h2 className="font-display text-lg font-semibold text-neutral-950">Contacto</h2>
                            <div className="mt-3 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">

                                <Card className='pt-2 shadow-md ' >
                                    <CardContent>
                                        <h3 className="font-semibold mt-3 text-neutral-900">Miguel Ángel</h3>
                                        <div className='space-y-3'>
                                            <div className='flex space-x-2 items-end ms-1 mt-3 '>
                                                <a
                                                    className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                                                    href="mailto:miguel@gmail.com"
                                                >
                                                    <EnvelopeClosedIcon className="h-5 w-4 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                                                    <span className=" font-light ms-2  ">vamosmiguelangel@hotmail.com</span>
                                                </a>
                                            </div>
                                            <div className='flex space-x-2 items-end ms-1 '>

                                                <MobileIcon className="h-5 w-4 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                                                <span className="text-neutral-600 hover:text-neutral-950 font-light ">6693-0138</span>

                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card className='pt-2 shadow-md '>
                                    <CardContent>
                                        <h3 className="font-semibold mt-3 text-neutral-900">Sara Itzela</h3>
                                        <div className='space-y-3'>
                                            <div className='flex space-x-2 items-end ms-1 mt-3 '>
                                                <a
                                                    className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                                                    href="mailto:miguel@gmail.com"
                                                >
                                                    <EnvelopeClosedIcon className="h-5 w-4 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                                                    <span className=" font-light ms-2  ">vamossaraitzela@gmail.com</span>
                                                </a>
                                            </div>
                                            {/* <div className='flex space-x-2 items-end ms-1 '>

                                                <MobileIcon className="h-5 w-4 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                                                <span className="text-neutral-600 hover:text-neutral-950 font-light ">65056248</span>

                                            </div> */}
                                        </div>
                                    </CardContent>
                                </Card>






                            </div>
                            <div className="mt-16 pt-10 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                                <h2 className="font-display text-base font-semibold text-neutral-950">Siguenos</h2>
                                <div className=''>
                                    <ul role='list' className='flex space-x-4 mt-3 ms-2'>

                                        <li className="flex">
                                            <a
                                                className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                                                href="https://twitter.com/miguel3965"
                                            >
                                                <svg viewBox="0 0 22 22" aria-hidden="true" className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500">
                                                    <path d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z"></path>
                                                </svg>
                                            </a>
                                        </li>

                                        <li className="flex">
                                            <a
                                                className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                                                href="https://www.instagram.com/miguelangelcamposlima"
                                            >
                                                <svg viewBox="0 0 22 22" aria-hidden="true" className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500">
                                                    <path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673a2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67c.163-.421.358-.72.673-1.036c.315-.315.615-.51 1.035-.673c.317-.123.794-.27 1.671-.31c.95-.043 1.234-.052 3.637-.052Z"></path>
                                                    <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"></path>
                                                </svg>
                                            </a>
                                        </li>

                                        <li className="flex">
                                            <a
                                                className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                                                href="https://www.facebook.com/miguelangel.camposlima"
                                            >
                                                <svg viewBox="0 0 22 22" aria-hidden="true" className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500">
                                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="" style={{ opacity: 1, transform: 'none' }}>
                            <ContactForm />
                        </div>



                    </div>
                </div>
            </div>


        </>
    );
};

export default Contactanos;

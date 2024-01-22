
import Link from 'next/link'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Image from 'next/image'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import SesionObtions from './SesionObtions'


const Navbar = async () => {


    return (


        <nav className=" sticky top-0 shadow-md shadow-slate-900/5   bg-white  z-50   ">
            <div className='flex w-screen  max-w-7xl m-auto md:px-2 px-4 py-2 md:justify-between items-center  '>
                <div className=' flex w-screen md:w-auto justify-between'>
                    <Link href="/" className="flex items-center">
                        <Image src="/logovm.png" width='180' height='150' className=" mb-2 w-36 h-auto lg:w-48 md:w-44  " alt="Vamos Panamá" />

                        {/* <Image src="/v.png" width='30' height='30' className="h-10 mb-2 mr-1" alt="Vamos Panamá" /> */}
                        {/* <span className="self-center font-display text-2xl font-semibold text text-gray-800 whitespace-nowrap dark:text-white">Miguel Ángel</span> */}
                    </Link>
                    <div className="flex items-center md:order-2">
                        <div data-collapse-toggle="navbar-user"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500
                        rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2
                        focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700
                        dark:focus:ring-gray-600"
                            aria-controls="navbar-user" aria-expanded="false">
                            <DropdownMenu >
                                <DropdownMenuTrigger>
                                    <HamburgerMenuIcon className="w-7 h-7" />

                                </DropdownMenuTrigger>
                                <DropdownMenuContent className='w-screen shadow-none border-none h-screen  p-0 mt-2 bg-neutral-50 bg-opacity-50 backdrop-blur-sm' >
                                    <div className='bg-white  py-3 ps-3 space-y-2 ' >
                                        <Link
                                            href="/#biografia">
                                            <DropdownMenuItem>
                                                <span className="relative z-10">Biografía</span>
                                            </DropdownMenuItem>
                                        </Link>
                                        <Link
                                            href="/#suplente">
                                            <DropdownMenuItem>
                                                <span className="relative z-10">Suplente</span>
                                            </DropdownMenuItem>
                                        </Link>
                                        {/* <Link
                                            href="/#propuestas">
                                            <DropdownMenuItem>
                                                <span className="relative z-10">Propuestas</span>
                                            </DropdownMenuItem>
                                        </Link> */}
                                        <Link
                                            href="/#articulos">
                                            <DropdownMenuItem>
                                                <span className="relative z-10">Artículos</span>
                                            </DropdownMenuItem>
                                        </Link>
                                        <Link
                                            href="/#contactanos">
                                            <DropdownMenuItem>
                                                <span className="relative z-10">Contáctanos</span>
                                            </DropdownMenuItem>
                                        </Link>
                                        <Link
                                            href="/transparencia">
                                            <DropdownMenuItem>
                                                <span className="relative z-10">Transparencia</span>
                                            </DropdownMenuItem>
                                        </Link>

                                        <Link className="relative   rounded-lg  transition-colors delay-150 hover:text-gray-900 hover:bg-slate-100  hover:delay-0"
                                            href="https://docs.google.com/forms/d/e/1FAIpQLSfCFq1gpT_aZC0X-jzSx2TRfpbi9Zhl-8uZYv6sITcMSvf5EA/viewform">
                                            <DropdownMenuItem>
                                                <span className="relative z-10 text-amarillov  lg:text-lg font-semibold">Voluntariado</span>
                                            </DropdownMenuItem>
                                        </Link>


                                    </div>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <div className=' absolute right-20 top-6'>
                                <SesionObtions />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto " id="navbar-user">
                    <div className=" hidden md:flex lg:gap-10 md:gap-8 ">
                        {/* <Link className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
                            href="/">
                            <span className="relative z-10">Inicio</span>
                        </Link> */}
                        <Link className="relative -mx-3 rounded-lg  lg:px-1 py-2  transition-colors delay-150 hover:text-gray-900 hover:bg-slate-100  hover:delay-0"
                            href="/#biografia">
                            <span className="relative z-10 text-azulv lg:text-lg lg:font-medium">Biografía</span>
                        </Link>
                        <Link className="relative -mx-3 rounded-lg  lg:px-1 py-2  transition-colors delay-150 hover:text-gray-900 hover:bg-slate-100  hover:delay-0"
                            href="/#suplente">
                            <span className="relative z-10 text-azulv lg:text-lg lg:font-medium">Suplente</span>
                        </Link>
                        {/* <Link className="relative -mx-3 rounded-lg  lg:px-1 py-2  transition-colors delay-150 hover:text-gray-900 hover:bg-slate-100  hover:delay-0"
                            href="/#propuestas">
                            <span className="relative z-10 text-azulv lg:text-lg lg:font-medium">Propuestas</span>
                        </Link> */}
                        <Link className="relative -mx-3 rounded-lg  lg:px-1 py-2   transition-colors delay-150 hover:text-azulv hover:bg-slate-100  hover:delay-0"
                            href="/#articulos">
                            <span className="relative z-10 text-azulv lg:text-lg lg:font-medium">Artículos</span>
                        </Link>
                        <Link className="relative -mx-3 rounded-lg  lg:px-1 py-2  transition-colors delay-150 hover:text-gray-900 hover:bg-slate-100  hover:delay-0"
                            href="/#contactanos">
                            <span className="relative z-10 text-azulv lg:text-lg lg:font-medium">Contáctanos</span>
                        </Link>
                        <Link className="relative -mx-3 rounded-lg  lg:px-1 py-2  transition-colors delay-150 hover:text-gray-900 hover:bg-slate-100  hover:delay-0"
                            href="/transparencia">
                            <span className="relative z-10 text-azulv lg:text-lg lg:font-medium">Transparencia</span>
                        </Link>
                        <Link className="relative -mx-3 rounded-lg  lg:px-1 py-2  transition-colors delay-150 hover:text-gray-900 hover:bg-slate-100  hover:delay-0"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfCFq1gpT_aZC0X-jzSx2TRfpbi9Zhl-8uZYv6sITcMSvf5EA/viewform">
                            <span className="relative z-10 text-amarillov  lg:text-lg font-semibold">Voluntariado</span>
                        </Link>


                        <div className=' '>
                            <SesionObtions />
                        </div>

                    </div>

                </div>
            </div>
        </nav>


    )
}

export default Navbar
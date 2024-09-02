
'use client'
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
import Navigation from './menu/Navigation'
import { DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger } from '@radix-ui/react-dropdown-menu'
import { NavigationDropdown } from './menu/NavigationDropdown'
import { usePathname } from 'next/navigation'


const Navbar = () => {
    const pathname: string = usePathname()
    console.log(pathname)
    const hideNavbarAndFooter = ['/linkss', '/links'];

    if (hideNavbarAndFooter.includes(pathname)) return null

    return (


        <nav className=" sticky top-0 shadow-md shadow-slate-900/5   bg-white  z-50   ">
            <div className='flex w-screen  max-w-7xl m-auto md:px-2 px-4 py-2 md:justify-between items-center  '>
                <div className=' flex w-screen md:w-auto justify-between'>
                    <Link href="/" className="flex items-center">
                        <Image src="/logovm.png" width='170' height='140' className=" mb-2 w-32 h-auto lg:w-44 md:w-44  " alt="Vamos Panamá" />

                        {/* <Image src="/v.png" width='30' height='30' className="h-10 mb-2 mr-1" alt="Vamos Panamá" /> */}
                        {/* <span className="self-center font-display text-2xl font-semibold text text-gray-800 whitespace-nowrap dark:text-white">Miguel Ángel</span> */}
                    </Link>
                    <NavigationDropdown />
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto " id="navbar-user">
                    <div className=" hidden md:flex lg:gap-10 md:gap-8 ">
                        <Navigation />
                        {/* <Link className="relative -mx-3 rounded-lg  lg:px-1 py-2  transition-colors delay-150 hover:text-gray-900 hover:bg-slate-100  hover:delay-0"
                            href="/#biografia">
                            <span className="relative z-10 text-azulv lg:text-lg lg:font-medium">Biografía</span>
                        </Link>
                        <Link className="relative -mx-3 rounded-lg  lg:px-1 py-2  transition-colors delay-150 hover:text-gray-900 hover:bg-slate-100  hover:delay-0"
                            href="/#suplente">
                            <span className="relative z-10 text-azulv lg:text-lg lg:font-medium">Suplente</span>
                        </Link>
                     
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
                        </Link> */}


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
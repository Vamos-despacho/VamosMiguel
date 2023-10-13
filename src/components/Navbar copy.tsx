import React from 'react'
import { ModeToggle } from '@/components/ModeToggle'
import Link from 'next/link'


const NavbarC = () => {
    return (

        <header className='supports-backdrop-blur:bg-background/60 sticky 
        top-0 mt-3 z-50 w-full  '>

            <div className=' flex h-14 items-center'>

                <div className='flex justify-around  w-screen'>
                    <Link href="/" className='mr-6 flex items-center space-x-2' >VamosMiguelAngel</Link>
                    <div className='mr-4 hidden md:flex '>

                        <nav
                            className="flex items-center space-x-4 lg:space-x-6"

                        >
                            <Link
                                href="/"
                                className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0">
                                <span className="relative z-10">Inicio</span>
                            </Link>
                            <Link
                                href="/"
                                className="text-sm font-medium transition-colors hover:text-primary">
                                Inicio
                            </Link>
                            <Link href="/trayectoria"
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            >
                                Trayectoria
                            </Link>
                            <Link href="/suplente"
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary" >
                                Suplente
                            </Link>
                            <Link href="/propuestas"
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary" >
                                Propuestas
                            </Link>
                            <Link href="/contactanos"
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary" >
                                Contáctanos
                            </Link>
                            <Link href="/blog"
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary" >
                                Blog
                            </Link>
                        </nav>
                        <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end mr-5'>
                            <ModeToggle />

                        </div>
                    </div>
                    <button
                        className='inline-flex items-center 
                    justify-center rounded-md font-medium
                    transition-colors focus-visible:outline-none 
                    focus-visible:ring-ring disabled:pointer-events-none
                    disabled:opacity-50 hover:text-accent-foreground
                    h-9 py-2 mr-2 px-0 text-base hover:bg-transparent 
                    focus-visible:bg-transparent focus-visible:ring-0 
                    focus-visible:ring-offset-0 md:hidden'
                        type='button' aria-haspopup="dialog" aria-expanded="false" aria-controls='radix-:R15hja:' data-state='closed'
                    >****</button>
                </div>
            </div>

        </header>
    )
}

export default NavbarC
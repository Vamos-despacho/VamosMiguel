import Link from 'next/link';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { ChevronRightIcon } from 'lucide-react';
export const NavigationDropdown = () => {
    return (


        <div className="flex items-center md:order-2">
            <div data-collapse-toggle="navbar-user"
                className="inline-flex items-center p-4 w-10 h-10 justify-center text-sm text-gray-500
                rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2
                focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700
                dark:focus:ring-gray-600"
                aria-controls="navbar-user" aria-expanded="false">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <HamburgerMenuIcon className="w-7 h-7" />
                    </DropdownMenuTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuContent className='w-screen shadow-none border-none h-screen bg-neutral-50 bg-opacity-50 backdrop-blur-sm'>
                            <div className='w-[325px] bg-white p-0 m-0'>
                                <div className='bg-white py-2 ps-1 space-y-1 w-[120px] h-screen'>
                                    <Link href="/biografia">
                                        <DropdownMenuItem>
                                            <span className="relative z-10">Biografía</span>
                                        </DropdownMenuItem>
                                    </Link>


                                    <DropdownMenuSub>
                                        <DropdownMenuSubTrigger>Despacho</DropdownMenuSubTrigger>
                                        <DropdownMenuSubContent >
                                            <Link href="/suplente">  <DropdownMenuItem>Diputada Suplente</DropdownMenuItem>  </Link>


                                            <DropdownMenuItem>Equipo </DropdownMenuItem>

                                        </DropdownMenuSubContent>
                                    </DropdownMenuSub>


                                    <Link href="/articulos">
                                        <DropdownMenuItem>
                                            <span className="relative z-10">Artículos</span>
                                        </DropdownMenuItem>
                                    </Link>

                                    <Link href="/propuestas">
                                        <DropdownMenuItem>
                                            <span className="relative z-10">Propuestas</span>
                                        </DropdownMenuItem>
                                    </Link>

                                    <DropdownMenuSub>
                                        <DropdownMenuSubTrigger>Labor Legislativa</DropdownMenuSubTrigger>

                                        <DropdownMenuSubContent >
                                            <DropdownMenuSub>
                                                <Collapsible className=" bg-slate-50">
                                                    <CollapsibleTrigger className="flex bg-white w-full items-center justify-between gap-x-4 text-sm p-2">
                                                        <span>Atención Ciudadana</span>
                                                        <ChevronRightIcon className="h-4 w-4 transition-transform [&[data-state=open]]:rotate-90" />
                                                    </CollapsibleTrigger>
                                                    <CollapsibleContent>
                                                        <div className="grid gap-0 ps-4 p-3 py-1 ">
                                                            <Link href="/reunion">
                                                                <DropdownMenuItem>
                                                                    <span className="relative z-10">Solicitar Reunión</span>
                                                                </DropdownMenuItem>
                                                            </Link>

                                                            <Link href="/participacion-ciudadana">
                                                                <DropdownMenuItem>
                                                                    <span className="relative z-10">Participación Ciudadana</span>
                                                                </DropdownMenuItem>
                                                            </Link>



                                                        </div>
                                                    </CollapsibleContent>
                                                </Collapsible>

                                            </DropdownMenuSub>
                                            <Link href="/anteproyectos">
                                                <DropdownMenuItem>Anteproyectos</DropdownMenuItem>
                                            </Link>
                                            <Link href="/pleno">
                                                <DropdownMenuItem>
                                                    <span className="relative z-10">Pleno</span>
                                                </DropdownMenuItem>
                                            </Link>
                                            <Link href="/comisiones">
                                                <DropdownMenuItem>Comisiones</DropdownMenuItem>
                                            </Link>
                                            <Link href="/actividades">
                                                <DropdownMenuItem>Actividades Legislativas</DropdownMenuItem>
                                            </Link>
                                            {/* <Link href="/informe">
                                                <DropdownMenuItem>Informe de Gestion</DropdownMenuItem>
                                            </Link> */}
                                        </DropdownMenuSubContent>

                                    </DropdownMenuSub>



                                    <Link href="/contactanos">
                                        <DropdownMenuItem>
                                            <span className="relative z-10">Contáctanos</span>
                                        </DropdownMenuItem>
                                    </Link>
                                    <Link href="/transparencia">
                                        <DropdownMenuItem>
                                            <span className="relative z-10">Transparencia</span>
                                        </DropdownMenuItem>
                                    </Link>
                                </div>
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenuPortal>
                </DropdownMenu>

            </div>

        </div>
    )
}

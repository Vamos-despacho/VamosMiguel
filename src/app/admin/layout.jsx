import React from 'react';
import './dashboard.css';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { EyeOpenIcon, Pencil1Icon, TextAlignJustifyIcon, ViewHorizontalIcon } from '@radix-ui/react-icons';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const ArticlesLayout = ({ children }) => {
    return (
        <div className="dashboard-container">

            <div className="navigation ">
                <div className='dropdown space-y-2'>
                    <h2 className='font-semibold ms-2' >Articulos</h2>
                    <div className=''>
                        <Link href="/admin/articulos/ver-articulos" className='w-full'>
                            <Button variant="ghost" className=" w-full justify-start">
                                <EyeOpenIcon className='mr-2' />
                                Ver Articulos
                            </Button>
                        </Link>
                    </div>
                    <div className=''>
                        <Link href="/admin/articulos/crear-articulo">
                            <Button variant="ghost" className=" w-full justify-start">
                                <Pencil1Icon className='mr-2' />
                                Crear Articulo
                            </Button>
                        </Link>
                    </div>
                    <h2 className='font-semibold ms-2 pt-3' >Categorías</h2>

                    <div className=''>
                        <Link href="/admin/categorias/ver-categorias" className='w-full'>
                            <Button variant="ghost" className=" w-full justify-start">
                                <EyeOpenIcon className='mr-2' />
                                Ver Categorias
                            </Button>
                        </Link>
                    </div>
                    <div className=''>
                        <Link href="/admin/categorias/crear-categoria">
                            <Button variant="ghost" className=" w-full justify-start">
                                <Pencil1Icon className='mr-2' />
                                Crear Categoria
                            </Button>
                        </Link>
                    </div>
                    <h2 className='font-semibold ms-2 pt-3' >Etiquetas</h2>

                    <div className=''>
                        <Link href="/admin/etiquetas/ver-etiquetas" className='w-full'>
                            <Button variant="ghost" className=" w-full justify-start">
                                <EyeOpenIcon className='mr-2' />
                                Ver Etiquetas
                            </Button>
                        </Link>
                    </div>
                    <div className=''>
                        <Link href="/admin/etiquetas/crear-etiqueta">
                            <Button variant="ghost" className=" w-full justify-start">
                                <Pencil1Icon className='mr-2' />
                                Crear Etiqueta
                            </Button>
                        </Link>
                    </div>

                </div>
                <div className='dropdownBtn'>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <TextAlignJustifyIcon className='mr-2 h-8 w-8' />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent >
                            <DropdownMenuLabel>Articulos</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <Link href="/admin/articulos/ver-articulos" className='w-full'>
                                <DropdownMenuItem>

                                    <EyeOpenIcon className='mr-2' />
                                    Ver Articulos

                                </DropdownMenuItem>
                            </Link>
                            <Link href="/admin/articulos/crear-articulo">
                                <DropdownMenuItem>

                                    <Pencil1Icon className='mr-2' />
                                    Crear Articulo

                                </DropdownMenuItem>
                            </Link>
                            <DropdownMenuSeparator />
                            <DropdownMenuLabel>Categorías</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuLabel>Etiquetas</DropdownMenuLabel>
                            <DropdownMenuSeparator />


                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>


            </div>



            <div className="">
                {/* Contenido principal (children) */}
                {children}
            </div>
        </div >
    );
};

export default ArticlesLayout;

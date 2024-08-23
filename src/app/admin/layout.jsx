
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
import { AdminProvider } from './context/AdminContext';

const ArticlesLayout = ({ children }) => {

    return (
        <div className="dashboard-container">

            <div className="navigation ">
                <div className='dropdown '>
                    <h2 className='font-semibold ms-2' >Eventos</h2>
                    <div className=''>
                        <Link href="/admin/event/ver" className='w-full'>
                            <Button arial-label='Ver' variant="ghost" className=" w-full justify-start">
                                <EyeOpenIcon className='mr-2' />
                                Ver
                            </Button>
                        </Link>
                    </div>
                    <div className=''>
                        <Link href="/admin/event/crear">
                            <Button arial-label='Crear' variant="ghost" className=" w-full justify-start">
                                <Pencil1Icon className='mr-2' />
                                Crear
                            </Button>
                        </Link>
                    </div>
                    <div className=''>
                        <Link href="/admin/event/asistencia" className='w-full'>
                            <Button arial-label='Ver' variant="ghost" className=" w-full justify-start">
                                <EyeOpenIcon className='mr-2' />
                                Asistencia
                            </Button>
                        </Link>
                    </div>
                    <div className=''>
                        <Link href="/admin/event/crear-comision" className='w-full'>
                            <Button arial-label='Ver' variant="ghost" className=" w-full justify-start">
                                <EyeOpenIcon className='mr-2' />
                                Crear Comisión
                            </Button>
                        </Link>
                    </div>
                    <h2 className='font-semibold ms-2' >Articulos</h2>
                    <div className=''>
                        <Link href="/admin/articulos/ver-articulos" className='w-full'>
                            <Button arial-label='Ver' variant="ghost" className=" w-full justify-start">
                                <EyeOpenIcon className='mr-2' />
                                Ver
                            </Button>
                        </Link>
                    </div>
                    <div className=''>
                        <Link href="/admin/articulos/crear-articulo">
                            <Button arial-label='Crear' variant="ghost" className=" w-full justify-start">
                                <Pencil1Icon className='mr-2' />
                                Crear
                            </Button>
                        </Link>
                    </div>
                    <h2 className='font-semibold ms-2 pt-3' >Categorías</h2>

                    <div className=''>
                        <Link href="/admin/categorias/ver-categorias" className='w-full'>
                            <Button arial-label='Ver' variant="ghost" className=" w-full justify-start">
                                <EyeOpenIcon className='mr-2' />
                                Ver
                            </Button>
                        </Link>
                    </div>
                    <div className=''>
                        <Link href="/admin/categorias/crear-categoria">
                            <Button arial-label='Crear' variant="ghost" className=" w-full justify-start">
                                <Pencil1Icon className='mr-2' />
                                Crear
                            </Button>
                        </Link>
                    </div>
                    <div >

                        <h2 className='font-semibold ms-2 pt-3' >Etiquetas</h2>
                    </div>

                    <div className=''>
                        <Link href="/admin/etiquetas/ver-etiquetas" className='w-full'>
                            <Button arial-label='Ver' variant="ghost" className=" w-full justify-start">
                                <EyeOpenIcon className='mr-2' />
                                Ver
                            </Button>
                        </Link>
                    </div>
                    <div className=''>
                        <Link href="/admin/etiquetas/crear-etiqueta">
                            <Button arial-label='Crear' variant="ghost" className=" w-full justify-start">
                                <Pencil1Icon className='mr-2' />
                                Crear
                            </Button>
                        </Link>
                    </div>
                    <div className=''>
                        <Link href="/admin/fotos">
                            <Button arial-label='Crear' variant="ghost" className=" w-full justify-start">
                                <Pencil1Icon className='mr-2' />
                                Subir Fotos
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
                                    Ver
                                </DropdownMenuItem>
                            </Link>
                            <Link href="/admin/articulos/crear-articulo">
                                <DropdownMenuItem>
                                    <Pencil1Icon className='mr-2' />
                                    Crear
                                </DropdownMenuItem>
                            </Link>
                            <DropdownMenuSeparator />
                            <DropdownMenuLabel>Categorías</DropdownMenuLabel>
                            <Link href="/admin/categorias/ver-categorias" className='w-full'>
                                <DropdownMenuItem>
                                    <EyeOpenIcon className='mr-2' />
                                    Ver
                                </DropdownMenuItem>
                            </Link>
                            <Link href="/admin/categorias/crear-categoria">
                                <DropdownMenuItem>
                                    <Pencil1Icon className='mr-2' />
                                    Crear
                                </DropdownMenuItem>
                            </Link>
                            <DropdownMenuSeparator />
                            <DropdownMenuLabel>Etiquetas</DropdownMenuLabel>
                            <Link href="/admin/etiquetas/ver-etiquetas" className='w-full'>
                                <DropdownMenuItem>
                                    <EyeOpenIcon className='mr-2' />
                                    Ver
                                </DropdownMenuItem>
                            </Link>
                            <Link href="/admin/etiquetas/crear-etiqueta">
                                <DropdownMenuItem>
                                    <Pencil1Icon className='mr-2' />
                                    Crear
                                </DropdownMenuItem>
                            </Link>
                            <DropdownMenuSeparator />


                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>


            </div>



            <div className="">
                {/* Contenido principal (children) */}
                <AdminProvider>

                    {children}
                </AdminProvider>
            </div>
        </div >
    );
};

export default ArticlesLayout;

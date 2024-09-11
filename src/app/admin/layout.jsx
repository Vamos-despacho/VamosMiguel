import './dashboard.css';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { EyeOpenIcon, Pencil1Icon, TextAlignJustifyIcon } from '@radix-ui/react-icons';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AdminProvider } from './context/AdminContext';
import { ImageIcon } from 'lucide-react';

const ArticlesLayout = ({ children }) => {
    return (
        <div className="dashboard-container flex flex-col lg:flex-row">
            <div className="navigation flex-shrink-0">
                <div className='dropdown space-y-4'>
                    {/* Eventos */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="w-full justify-start">
                                <TextAlignJustifyIcon className='mr-2 h-5 w-5' />
                                Eventos
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-48">
                            <DropdownMenuItem asChild>
                                <Link href="/admin/event/ver" className='w-full flex items-center'>
                                    <EyeOpenIcon className='mr-2' />
                                    Ver Eventos
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/admin/event/crear" className='w-full flex items-center'>
                                    <Pencil1Icon className='mr-2' />
                                    Crear Evento
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/admin/event/crear-mes" className='w-full flex items-center'>
                                    <Pencil1Icon className='mr-2' />
                                    Crear Mes
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/admin/event/ver-mes" className='w-full flex items-center'>
                                    <EyeOpenIcon className='mr-2' />
                                    Ver Mes
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/admin/event/crear-comision" className='w-full flex items-center'>
                                    <Pencil1Icon className='mr-2' />
                                    Crear Comisión
                                </Link>
                            </DropdownMenuItem>

                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Deportistas */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="w-full justify-start">
                                <TextAlignJustifyIcon className='mr-2 h-5 w-5' />
                                Atletas
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-48">
                            {/* <DropdownMenuItem asChild>
                                <Link href="/admin/atletas/crear-provincia" className='w-full flex items-center'>
                                    <Pencil1Icon className='mr-2' />
                                    Crear Provincia
                                </Link>
                            </DropdownMenuItem> */}
                            <DropdownMenuItem asChild>
                                <Link href="/admin/atletas/crear-evento" className='w-full flex items-center'>
                                    <Pencil1Icon className='mr-2' />
                                    Crear Evento
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/admin/atletas/ver-evento" className='w-full flex items-center'>
                                    <Pencil1Icon className='mr-2' />
                                    Ver Evento
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/admin/atletas/crear-atleta" className='w-full flex items-center'>
                                    <Pencil1Icon className='mr-2' />
                                    Crear Atleta
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Artículos */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="w-full justify-start">
                                <TextAlignJustifyIcon className='mr-2 h-5 w-5' />
                                Artículos
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-48">
                            <DropdownMenuItem asChild>
                                <Link href="/admin/articulos/ver-articulos" className='w-full flex items-center'>
                                    <EyeOpenIcon className='mr-2' />
                                    Ver Artículos
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/admin/articulos/crear-articulo" className='w-full flex items-center'>
                                    <Pencil1Icon className='mr-2' />
                                    Crear Artículo
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Categorías */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="w-full justify-start">
                                <TextAlignJustifyIcon className='mr-2 h-5 w-5' />
                                Categorías
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-48">
                            <DropdownMenuItem asChild>
                                <Link href="/admin/categorias/ver-categorias" className='w-full flex items-center'>
                                    <EyeOpenIcon className='mr-2' />
                                    Ver Categorías
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/admin/categorias/crear-categoria" className='w-full flex items-center'>
                                    <Pencil1Icon className='mr-2' />
                                    Crear Categoría
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Etiquetas */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="w-full justify-start">
                                <TextAlignJustifyIcon className='mr-2 h-5 w-5' />
                                Etiquetas
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-48">
                            <DropdownMenuItem asChild>
                                <Link href="/admin/etiquetas/ver-etiquetas" className='w-full flex items-center'>
                                    <EyeOpenIcon className='mr-2' />
                                    Ver Etiquetas
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/admin/etiquetas/crear-etiqueta" className='w-full flex items-center'>
                                    <Pencil1Icon className='mr-2' />
                                    Crear Etiqueta
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Subir Fotos */}
                    <div className='ml-4'>
                        <Link href="/admin/fotos" className='w-full flex items-center'>
                            <ImageIcon className='mr-2' />
                            Subir Fotos
                        </Link>
                    </div>
                </div>
            </div>

            <div className="content flex-grow">
                <AdminProvider>
                    {children}
                </AdminProvider>
            </div>
        </div>
    );
};

export default ArticlesLayout;

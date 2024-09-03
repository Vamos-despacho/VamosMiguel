import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TiSocialFacebook, TiSocialTwitter, TiSocialYoutube, TiSocialLinkedin } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { IoShareSocialOutline, IoDocumentTextOutline } from "react-icons/io5";
import ShareButton from '../../components/Share';

const socialLinks = [
    { href: "https://www.instagram.com/miguelangelcamposlima", label: "Instagram", icon: SlSocialInstagram },
    { href: "https://x.com/miguel3965", label: "Twitter", icon: TiSocialTwitter },
    { href: "https://www.facebook.com/miguelangel.camposlima", label: "Facebook", icon: TiSocialFacebook },
    { href: "https://www.youtube.com/channel/UCuexZ8gpDzoGJOrcY-YEqkw", label: "Youtube", icon: TiSocialYoutube },
    // { href: "#", label: "LinkedIn", icon: TiSocialLinkedin },
];

const links = [
    { href: "/", label: "Mi Página Web", icon: LinkIcon },
];

const anteProyectos = [
    {
        href: "/pdfs/AnteproyectodeAltoRendimientoDeportivoyMedicinaDeportiva.pdf",
        label: "Alto Rendimiento Deportivo y Medicina Deportiva",
        icon: IoDocumentTextOutline
    },
    {
        href: "/pdfs/AnteproyectodeLeyANTIDOPING.pdf",
        label: "Reorganización del Instituto de Deportes y Normativas Antidopaje",
        icon: IoDocumentTextOutline
    },
];

export default function Component() {
    return (
        <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <div className="text-center space-y-6 py-8">
                <div className="flex items-center justify-center">
                    <Avatar className="w-40 h-40 border-4 border-gray-100 shadow-lg">
                        <AvatarImage
                            src="/images/MiguelAngel3.jpg"
                            sizes="(min-width: 1024px) 32rem, 20rem"
                            alt="Profile"
                        />
                        <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold">Miguel Ángel Campos Lima</h2>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">
                        Diputado independiente del circuito 9-1
                    </p>
                </div>
                <div className="flex gap-3 justify-center pb-4">
                    {socialLinks.map(({ href, label, icon: Icon }) => (
                        <Link
                            key={label}
                            href={href}
                            className="flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-blue-500 dark:hover:bg-blue-400 transition-colors"
                            aria-label={label}
                        >
                            <Icon className="h-6 w-6 text-gray-800 dark:text-gray-100" />
                        </Link>
                    ))}
                </div>
                <div className="grid gap-4 pt-4">
                    {links.map(({ href, label, icon: Icon }) => (
                        <Link
                            key={label}
                            href={href}
                            className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md hover:bg-blue-500 dark:hover:bg-blue-400 transition-colors"
                        >
                            <Icon className="h-5 w-5" />
                            <span>{label}</span>
                        </Link>
                    ))}
                </div>
                <div className="grid gap-4 py-4">
                    <h2 className="font-semibold text-lg">Anteproyectos</h2>
                    {anteProyectos.map(({ href, label, icon: Icon }) => (
                        <Link
                            key={label}
                            href={href}
                            className="flex items-center gap-3 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md hover:bg-blue-500 dark:hover:bg-blue-400 transition-colors"
                        >
                            <Icon className="h-6 w-6 flex-shrink-0" /> {/* Asegura que el ícono no cambie de tamaño */}
                            <span className="flex-grow">{label}</span> {/* Asegura que el texto tome el espacio disponible */}
                        </Link>
                    ))}
                </div>

                {/* <Button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                    <IoShareSocialOutline className="h-5 w-5" />
                    Compartir
                </Button> */}
                <ShareButton />
            </div>
        </div>
    );
}

function LinkIcon(props: any) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
    );
}

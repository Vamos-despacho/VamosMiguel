import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TiSocialFacebook, TiSocialTwitter, TiSocialYoutube, TiSocialLinkedin } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineSportsSoccer } from 'react-icons/md';

// Reusable icon components
const socialLinks = [
    { href: "https://www.instagram.com/miguelangelcamposlima", label: "Instagram", icon: SlSocialInstagram },
    { href: "#", label: "Twitter", icon: TiSocialTwitter },
    { href: "#", label: "Facebook", icon: TiSocialFacebook },
    { href: "#", label: "Youtube", icon: TiSocialYoutube },
    { href: "#", label: "LinkedIn", icon: TiSocialLinkedin },
];
const links = [
    { href: "/", label: "Mi Página Web", icon: LinkIcon },
    { href: "/pdfs/AnteproyectodeAltoRendimientoDeportivoyMedicinaDeportiva.pdf", label: "Alto Rendimiento Deportivo y Medicina Deportiva", icon: MdOutlineSportsSoccer },

];

export default function Component() {
    return (
        <div className="bg-background text-foreground p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <div className="text-center space-y-4 py-8">
                <div className="flex items-center justify-center">
                    <Avatar className="w-56 h-56 border-4 border-background">
                        <AvatarImage
                            src="/images/MiguelAngel3.jpg"
                            sizes="(min-width: 1024px) 32rem, 20rem"
                            alt="Profile"
                        />
                        <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                </div>
                <div className="flex flex-col items-center pb-2">
                    <h2 className="text-2xl font-bold">Miguel Ángel Campos Lima</h2>
                    <h2 className="font-semibold tracking-tight text-zinc-700 dark:text-zinc-100 sm:text-base text-justify mt-1">
                        Diputado independiente del circuito 9-1
                    </h2>
                </div>
                <div className="flex gap-1 justify-center pb-2">
                    {socialLinks.map(({ href, label, icon: Icon }) => (
                        <Link
                            key={label}
                            href={href}
                            className="flex items-center gap-1 bg-muted px-4 py-2 rounded-md hover:bg-muted-foreground hover:text-muted transition"
                        >
                            <Icon className="h-5 w-5" />

                        </Link>
                    ))}
                </div>
                <div className="grid gap-4 py-1">
                    {links.map(({ href, label, icon: Icon }) => (
                        <Link
                            key={label}
                            href={href}
                            className="flex justify-between items-center gap-1 bg-muted px-4 py-2 rounded-md hover:bg-muted-foreground hover:text-muted transition"
                        >
                            <Icon className="h-6 w-6" />
                            <span>{label}</span>
                            <span></span>
                        </Link>
                    ))}
                </div>
                <Button className="w-full">
                    <IoShareSocialOutline className="h-5 w-5 mr-1" /> Share
                </Button>
            </div>
        </div>
    );
}

// Simplified SVG icons as components
function LinkIcon(props: any) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
    );
}

import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TeamMember {
    name: string;
    role: string;
    salary: string;
    imgSrc: string;
}

const teamMembers: TeamMember[] = [
    { name: "Antonio Sanmartin", role: "JEFE DE DESPACHO", salary: "$0,00", imgSrc: "/equipo/Antonio3.webp" },
    { name: "Alexandra Flores", role: "ADMINISTRADORA DE DESPACHO", salary: "$0,00", imgSrc: "/equipo/Alexandra4.webp" },
    { name: "Aracely Achille", role: "ASESORA LEGAL", salary: "$0,00", imgSrc: "/equipo/Aracely4.webp" },
    { name: "Christhian Peñalba", role: "DESARROLLADOR WEB Y CONTENIDO DIGITAL", salary: "$0,00", imgSrc: "/equipo/Christhian1.webp" },
    { name: "Jose Moscoso", role: "PRODUCTOR AUDIOVISUAL", salary: "$0,00", imgSrc: "/equipo/Jose1.webp" },
    { name: "Marco Rodríguez", role: "INVESTIGADOR EN POLÍTICAS PÚBLICAS", salary: "$0,00", imgSrc: "equipo/Marco1.webp" },
];

const EquipoTrabajo: React.FC = () => {
    return (
        <section className="bg-white py-8">
            <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 lg:py-16">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                    <div className="lg:col-span-1 ">
                        <h2 className="block  font-display tracking-tight [text-wrap:balance] text-4xl font-semibold sm:text-4
                        xl text-azulv">
                            Equipo de Trabajo
                        </h2>
                        <p className="mt-2 text-lg font-display text-neutral-500">Despacho 209</p>
                    </div>
                    <div className="mt-10 lg:mt-0 lg:col-span-2">
                        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {teamMembers.map(({ name, role, salary, imgSrc }, index) => (
                                <li key={index} className="flex flex-col items-center text-center space-y-3">
                                    {/* <img
                                        className="rounded-lg object-cover shadow-lg w-32 h-32"
                                        src={imgSrc}
                                        alt={name}
                                    /> */}
                                    <Avatar className="w-36  h-36 border-4 border-gray-100 shadow-lg">
                                        <AvatarImage
                                            src={imgSrc}
                                            sizes="(min-width: 1024px) rem, 20rem"
                                            alt="Profile"
                                        />
                                        <AvatarFallback>AC</AvatarFallback>
                                    </Avatar>
                                    <div className="text-lg leading-6 font-medium">
                                        <h3 className="text-lg font-semibold tracking-tight text-slate-900">{name}</h3>
                                        <p className="text-neutral-600 text-xs">{role}</p>
                                        {/* <p className="text-gray-500 text-xs">{salary}</p> */}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EquipoTrabajo;

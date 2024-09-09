import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TeamMember {
    name: string;
    role: string;
    salary: string;
    imgSrc: string;
}

const teamMembers: TeamMember[] = [
    { name: "Antonio Sanmartin", role: "JEFE DE DESPACHO", salary: "$0,00", imgSrc: "/placeholder.jpg" },
    { name: "Alexandra Flores", role: "ADMINISTRADORA DE DESPACHO", salary: "$0,00", imgSrc: "/placeholder.jpg" },
    { name: "Aracely Achille", role: "ASESOR LEGAL", salary: "$0,00", imgSrc: "/placeholder.jpg" },
    { name: "Christhian Peñalba", role: "GESTOR DE TECNOLOGÍA Y CONTENIDOS DIGITALES", salary: "$0,00", imgSrc: "/placeholder.jpg" },
    { name: "Jose Moscoso", role: "PRODUCTOR AUDIOVISUAL", salary: "$0,00", imgSrc: "/placeholder.jpg" },
    { name: "Marco Rodríguez", role: "INVESTIGADOR", salary: "$0,00", imgSrc: "/placeholder.jpg" },
];

const EquipoTrabajo: React.FC = () => {
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 lg:py-16">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                    <div className="lg:col-span-1 ">
                        <h2 className="block  font-display tracking-tight [text-wrap:balance] text-3xl font-medium sm:text-4
                        xl text-azulv">
                            Equipo de Trabajo
                        </h2>
                        <p className="mt-4 text-xl font-display text-neutral-700">Despacho 209</p>
                    </div>
                    <div className="mt-10 lg:mt-0 lg:col-span-2">
                        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {teamMembers.map(({ name, role, salary, imgSrc }, index) => (
                                <li key={index} className="flex flex-col items-center text-center space-y-4">
                                    {/* <img
                                        className="rounded-lg object-cover shadow-lg w-32 h-32"
                                        src={imgSrc}
                                        alt={name}
                                    /> */}
                                    <Avatar className="w-28 h-28 border-4 border-gray-100 shadow-lg">
                                        <AvatarImage
                                            src={imgSrc}
                                            sizes="(min-width: 1024px) rem, 20rem"
                                            alt="Profile"
                                        />
                                        <AvatarFallback>AC</AvatarFallback>
                                    </Avatar>
                                    <div className="text-lg leading-6 font-medium">
                                        <h3 className="text-base font-semibold tracking-tight text-slate-900">{name}</h3>
                                        <p className="text-neutral-600 text-sm">{role}</p>
                                        <p className="text-gray-500 text-sm">{salary}</p>
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

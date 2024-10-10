'use client';
import { MdOutlineBalance } from "react-icons/md";

import { SchoolIcon } from "lucide-react";
import { BsHeartPulse } from "react-icons/bs";
import { PiUsersFourLight } from "react-icons/pi";
import { IoIosMore } from "react-icons/io";
import { IMesDocument } from "@/interface/activites";
import { getMonthShow } from "@/libs/event/actions";
import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";

// Define un tipo que incluya tanto los componentes de Lucide como los de react-icons
type IconComponent = React.ComponentType<any>;

// Mapa de iconos
const iconMap: Record<string, IconComponent> = {
    SchoolIcon: SchoolIcon as unknown as IconComponent, // Conversión de tipo
    BsHeartPulse: BsHeartPulse as unknown as IconComponent,
    PiUsersFourLight: PiUsersFourLight as unknown as IconComponent,
    IoIosMore: IoIosMore as unknown as IconComponent,
    MdOutlineBalance: MdOutlineBalance as unknown as IconComponent,
};

async function fetchData(currentDate: Date) {
    try {
        const resp = await getMonthShow(currentDate);

        if (resp.status === 200 && resp.data) {
            return JSON.parse(resp.data);
        } else if (resp.status === 404) {
            console.warn('Mes no encontrado');
            return [];
        } else {
            console.error('Error desconocido al obtener el mes:', resp.message || 'Sin mensaje');
            return [];
        }
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        return [];
    }
}

const IconsBD: React.FC<{ currentDate: Date }> = ({ currentDate }) => {
    const [categorias, setCategorias] = useState<IMesDocument | null>(null);
    const [loading, setLoading] = useState(true);

    const handleGetMonth = async () => {
        const resp = await fetchData(currentDate);
        setCategorias(resp);
        setLoading(false); // Actualiza el estado de carga cuando se obtienen los datos
    };

    useEffect(() => {
        handleGetMonth();
    }, [currentDate, handleGetMonth]);

    if (loading) {
        // Muestra un marcador de posición mientras se carga
        return (
            <section className="w-full px-4 py-3">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 md:gap-4 justify-center items-center mx-auto">
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="bg-muted rounded-full p-2 mb-1 flex items-center justify-center h-8 w-8">
                                <span className="animate-pulse bg-gray-200 h-full w-full rounded-full"></span>
                            </div>
                            <div className="text-xs text-gray-200 text-center bg-gray-100 h-2 w-20 rounded"></div>
                            <div className="text-xs text-muted-foreground h-2 bg-gray-100 w-16 rounded"></div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section className="w-full px-4 py-1">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 md:gap-4 justify-center items-center mx-auto">
                {categorias?.categorias.map((categoria, index) => {
                    const IconComponent = iconMap[categoria.categoria.icon];

                    return (
                        <div key={index} className="flex flex-col items-center">
                            <div className="bg-muted rounded-full p-2 mb-1 flex items-center justify-center">
                                {IconComponent ? <IconComponent /> : <span>Icono no encontrado</span>}
                            </div>
                            <div className="text-xs text-gray-800 text-center">{categoria.categoria.label}</div>
                            <div className={`text-xs text-muted-foreground h-3 ${categoria.categoria.key === 'Otros' ? 'opacity-0' : 'opacity-100'}`}>
                                {categoria.asistencia !== 0 ? `${categoria.asistencia}% Asistencia` : ''}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default IconsBD;

'use client';

import React, { useEffect, useState } from "react";
import { MdOutlineBalance } from "react-icons/md";
import { SchoolIcon } from "lucide-react";
import { BsHeartPulse } from "react-icons/bs";
import { PiUsersFourLight } from "react-icons/pi";
import { IoIosMore } from "react-icons/io";

import { IMesDocument } from "@/interface/activites";
import { getMonthShow } from "@/libs/event/actions";

type IconComponent = React.ComponentType<{ size?: string | number }>;

const iconMap: Record<string, IconComponent> = {
    SchoolIcon: SchoolIcon,
    BsHeartPulse: BsHeartPulse,
    PiUsersFourLight: PiUsersFourLight,
    IoIosMore: IoIosMore,
    MdOutlineBalance: MdOutlineBalance,
};

async function fetchData(currentDate: Date): Promise<IMesDocument | null> {
    try {
        const resp = await getMonthShow(currentDate);

        if (resp.status === 200 && resp.data) {
            return JSON.parse(resp.data);
        } else if (resp.status === 404) {
            console.warn('Mes no encontrado');
            return null;
        } else {
            console.error('Error desconocido al obtener el mes:', resp.message || 'Sin mensaje');
            return null;
        }
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        return null;
    }
}

const IconsBD: React.FC<{ currentDate: Date }> = ({ currentDate }) => {
    const [categorias, setCategorias] = useState<IMesDocument | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleGetMonth = async () => {
            setLoading(true);
            const resp = await fetchData(currentDate);
            setCategorias(resp);
            setLoading(false);
        };
        handleGetMonth();
    }, [currentDate]);

    const baseSize = 24;
    const iconSize = baseSize * 1.05;

    if (loading) {
        return (
            <section className="w-full px-4 py-3">
                {/* Componente de carga */}
            </section>
        );
    }

    if (!categorias) {
        return (
            <section className="w-full px-4 py-3">
                <p>No hay datos disponibles.</p>
            </section>
        );
    }

    return (
        <section className="w-full sm:px-4 sm:py-1">
            <div className="grid grid-cols-4  md:gap-4 justify-center items-center mx-auto">
                {categorias.categorias.map((categoria, index) => {
                    const IconComponent = iconMap[categoria.categoria.icon];

                    return (
                        <div key={index} className="flex flex-col items-center">
                            <div className="bg-muted rounded-full p-1 sm:p-3 mb-1 flex items-center justify-center">
                                {IconComponent ? (
                                    <IconComponent size={iconSize} />
                                ) : (
                                    <span>Icono no encontrado</span>
                                )}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-800 text-center">
                                {categoria.categoria.label}
                            </div>
                            <div
                                className={`text-xs text-muted-foreground h-3 ${categoria.categoria.key === 'Otros' ? 'opacity-0' : 'opacity-100'
                                    }`}
                            >
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

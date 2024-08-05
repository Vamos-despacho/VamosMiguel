// Icons.tsx
import { SchoolIcon } from "lucide-react";
import { BsHeartPulse } from "react-icons/bs";
import { PiUsersFourLight } from "react-icons/pi";
import { IoIosMore } from "react-icons/io";
import React from "react";

interface Asistencia {
    Pleno: number;
    Salud: number;
    Educación: number;
    Otros: number;
}

type Meses = 'Julio' | 'Agosto'; // Define todos los meses relevantes

const asistenciaData: Record<Meses, Asistencia> = {
    Julio: {
        Pleno: 100,
        Salud: 100,
        Educación: 100,
        Otros: 0,
    },
    Agosto: {
        Pleno: 0,
        Salud: 0,
        Educación: 0,
        Otros: 0,
    },
    // Agrega aquí los datos para otros meses si es necesario
};

const iconData = [
    {
        icon: PiUsersFourLight,
        label: "Pleno",
        label2: "Pleno",
    },
    {
        icon: BsHeartPulse,
        label: "Comisión de Salud",
        label2: "Salud",
    },
    {
        icon: SchoolIcon,
        label: "Comisión de Educación",
        label2: "Educación",
    },
    {
        icon: IoIosMore,
        label: "Otros",
        label2: "Otros",
    },
];

interface IconsProps {
    currentDate: Date;
}

const Icons: React.FC<IconsProps> = ({ currentDate }) => {
    const currentMonthIndex = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const getMonthName = (monthIndex: number): Meses | undefined => {
        // Aquí convertimos el índice del mes a su nombre en español
        const monthNames: Record<number, Meses> = {
            6: 'Julio',
            7: 'Agosto',
            // Agrega nombres de meses según los datos disponibles
        };
        return monthNames[monthIndex];
    };

    const isPreviousMonth = (month: number): boolean => {
        const today = new Date();
        return (currentYear < today.getFullYear()) ||
            (currentYear === today.getFullYear() && month < today.getMonth());
    };

    return (
        <section className="w-full px-4 py-1 pb-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 justify-center items-center mx-auto">
                {iconData.map((item, index) => {
                    const monthName = getMonthName(currentMonthIndex);
                    const isDataAvailable = monthName && isPreviousMonth(currentMonthIndex);
                    const percentage = monthName && isDataAvailable ? asistenciaData[monthName][item.label2 as keyof Asistencia] : 0;

                    return (
                        <div key={index} className="flex flex-col items-center">
                            <div className="bg-muted rounded-full p-2 mb-1 flex items-center justify-center">
                                <item.icon className="w-5 h-5 text-muted-foreground" />
                            </div>
                            <div className="text-xs text-gray-800 text-center">{item.label}</div>
                            <div className={`text-xs text-muted-foreground h-3  ${item.label === 'Otros' ? 'opacity-0' : 'opacity-100'}`}>
                                {isDataAvailable ? `${percentage}% Asistencia` : ''}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Icons;

import React from "react";
import { IconType } from "react-icons";

interface Categoria {
    label: string;         // Nombre visible de la categoría (Ej: "Comisión de Salud")
    key: string;           // Clave que corresponde a los datos de asistencia (Ej: "Salud")
    icon: IconType;        // Icono que representa la categoría
}

interface Asistencia {
    [key: string]: number; // Se maneja de manera dinámica para permitir diferentes categorías (Ej: Salud, Educación)
}

interface IconsProps {
    currentDate: Date;
    categorias: Categoria[];        // Recibe las categorías dinámicamente
    asistenciaData: Record<string, Asistencia>; // Datos de asistencia por mes
}

const Icons: React.FC<IconsProps> = ({ currentDate, categorias, asistenciaData }) => {
    const currentMonthIndex = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const getMonthName = (monthIndex: number): string => {
        const monthNames = [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];
        return monthNames[monthIndex];
    };

    const isPreviousMonth = (month: number): boolean => {
        const today = new Date();
        return (currentYear < today.getFullYear()) ||
            (currentYear === today.getFullYear() && month < today.getMonth());
    };

    return (
        <section className="w-full px-4 py-1">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 md:gap-4 justify-center items-center mx-auto">
                {categorias.map((categoria, index) => {
                    const monthName = getMonthName(currentMonthIndex);
                    const isDataAvailable = monthName && isPreviousMonth(currentMonthIndex);
                    const percentage = monthName && isDataAvailable ? asistenciaData[monthName]?.[categoria.key] || 0 : 0;

                    return (
                        <div key={index} className="flex flex-col items-center">
                            <div className="bg-muted rounded-full p-2 mb-1 flex items-center justify-center">
                                <categoria.icon className="w-5 h-5 text-muted-foreground" />
                            </div>
                            <div className="text-xs text-gray-800 text-center">{categoria.label}</div>
                            <div className={`text-xs text-muted-foreground h-3 ${categoria.key === 'Otros' ? 'opacity-0' : 'opacity-100'}`}>
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

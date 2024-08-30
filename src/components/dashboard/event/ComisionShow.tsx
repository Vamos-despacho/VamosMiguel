'use client';

import React, { FC } from 'react';
import { SchoolIcon } from 'lucide-react';
import { BsHeartPulse } from 'react-icons/bs';
import { PiUsersFourLight } from 'react-icons/pi';
import { IoIosMore } from 'react-icons/io';
import { MdOutlineBalance } from "react-icons/md";
interface Comision {
    _id: string;
    label: string;
    key: string;
    icon: string;
}

interface ComisionListProps {
    comisiones: Comision[];
}

// Mapa de iconos que asocia los nombres de los iconos con los componentes importados
const iconMap: Record<string, React.ComponentType> = {
    SchoolIcon: SchoolIcon,
    BsHeartPulse: BsHeartPulse,
    PiUsersFourLight: PiUsersFourLight,
    IoIosMore: IoIosMore,
    MdOutlineBalance: MdOutlineBalance,
};

const ComisionShow: FC<ComisionListProps> = ({ comisiones }) => {
    return (
        <div className="flex flex-col">
            {comisiones.map((comision) => {
                const IconComponent = iconMap[comision.icon];
                return (
                    <div key={comision._id} className="border p-4 rounded-md shadow-md flex items-center">
                        <div className="mr-4">
                            {IconComponent ? <IconComponent /> : <span>Icon not found</span>}
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">{comision.label}</h3>
                            <p className="text-gray-600">{comision.key}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ComisionShow;

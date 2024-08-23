import React from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { BsHeartPulse } from 'react-icons/bs';
import { SchoolIcon } from 'lucide-react';
import { ExitFullScreenIcon } from '@radix-ui/react-icons';
import { MdOutlineMore } from "react-icons/md";
import YoutubeReproductor from '../asistencia/YoutubeReproductor';

import { IEvent } from '@/app/api/data/EventDays';
import { TabsEvents } from './TabsEvents';
import YoutubeEvents from './YoutubeReproductorEvent';

interface EventListProps {
    events: IEvent[];
}

const iconSalud2 = (
    <div className="border relative shadow-sm w-8 h-8 rounded-lg bg-white transition-colors">
        <div className="flex items-center justify-center h-full">
            <BsHeartPulse className="w-5 h-5 text-black" />
        </div>
    </div>
);

const iconSchool2 = (
    <div className="border relative shadow-sm w-8 h-8 rounded-lg bg-white transition-colors">
        <div className="flex items-center justify-center h-full">
            <SchoolIcon className="w-6 h-6 text-black" />
        </div>
    </div>
);

const iconPleno2 = (
    <div className="border relative shadow-sm w-8 h-8 rounded-lg bg-white transition-colors">
        <div className="flex items-center justify-center h-full">
            <ExitFullScreenIcon className="w-6 h-6 text-black" />
        </div>
    </div>
);

const iconOtros = (
    <div className="border relative shadow-sm w-8 h-8 rounded-lg bg-white transition-colors">
        <div className="flex items-center justify-center h-full">
            <MdOutlineMore className="w-6 h-6 text-black" />
        </div>
    </div>
);

const renderIcon = (eventName: string) => {
    switch (eventName) {
        case 'Salud':
            return iconSalud2;
        case 'Educación':
            return iconSchool2;
        case 'Pleno':
            return iconPleno2;
        case 'Otros':
            return iconOtros;
        default:
            return null;
    }
};

const EventList: React.FC<EventListProps> = ({ events }) => {
    if (events.length === 0) {
        return null;
    }

    return (
        <div className='flex-1 flex-col h-full'>
            <div className='flex justify-end mr-2 pt-1'>
                <h3 className="text-sm font-medium text-gray-400">{format(events[0].date, 'PPPP', { locale: es })}</h3>
            </div>


            {/* <pre>{JSON.stringify(events, null, 4)}</pre> */}
            <TabsEvents events={events} />
        </div>
    );
};

export default EventList;

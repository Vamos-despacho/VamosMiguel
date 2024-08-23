import React, { useEffect, useState } from 'react';
import { format, isSameMonth, isToday } from 'date-fns';
import { IIEvent, IIEventDetails } from '@/interface/event';

interface DayProps {
    day: Date;
    currentMonth: Date;
    events: IIEvent[];
    onClick: (day: Date) => void;
    isSelected: boolean;
}

const Day: React.FC<DayProps> = ({ day, currentMonth, events, onClick, isSelected }) => {
    const [loading, setLoading] = useState(true);
    const isCurrentMonth = isSameMonth(day, currentMonth);
    const isTodayDate = isToday(day);

    useEffect(() => {
        setLoading(true);
        const eventOfDay = events.find(event => isSameDay(day, event.date));
        setLoading(false);  // Elimina el setTimeout para evitar retrasos en la carga
    }, [day, events]);

    const dayEvents = events.filter(event => isSameDay(day, event.date)).flatMap(event => event.eventos);

    const renderIcon = (eventName: string) => {
        return (
            <div className='flex justify-center items-center gap-0.5'>
                <p className='md:text-sm text-xs'>{eventName}</p>
            </div>
        );
    };

    const hasEventDetails = (eventDetails: IIEventDetails): boolean => {
        return Boolean(
            eventDetails.idsYoutube?.length ||
            eventDetails.linkInstagram?.length ||
            eventDetails.eventoImagen?.length ||
            eventDetails.anteproyecto?.trim() ||
            eventDetails.proyecto?.trim() ||
            eventDetails.reforma?.trim()
        );
    };

    return (
        <div
            onClick={() => dayEvents.length > 0 && onClick(day)}
            className={`min-h-[80px] md:h-[110px] border border-gray-200 p-0 text-center cursor-pointer 
                        ${!isCurrentMonth ? 'opacity-40' : ''} 
                        ${isTodayDate ? 'bg-green-50 border-green-300' : ''} 
                        ${isSelected ? 'bg-blue-50' : ''}`}
        >
            <div className={`flex justify-center font-medium py-0 text-base bg-slate-100 border-b
                ${!isCurrentMonth ? 'bg-white' : ''}`}>
                <div className='w-5'></div>
                <div>{format(day, 'd')}</div>
                <div className='w-5 ml-[-6px] mt-[-5px]'></div>
            </div>
            <div className='flex flex-col justify-center sm:mt-1 items-center gap-0 h-auto w-auto'>
                {loading ? (
                    <div className="spinner border-t-2 border-gray-300 rounded-full w-4 h-4 animate-spin"></div>
                ) : (
                    dayEvents.map((event, idx) => (
                        <div key={idx} className={`${hasEventDetails(event.event) ? 'text-blue-500' : ''}`}>
                            {renderIcon(event.nombre)}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

function isSameDay(date1: Date, date2: Date): boolean {
    return date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate();
}

export default Day;

import React from 'react';
import { format, isSameMonth, isToday, isSameDay } from 'date-fns';
import { IIEvent, IIEventDetails } from '@/interface/event';

interface DayProps {
    day: Date;
    currentMonth: Date;
    events: IIEvent[] | null;  // Permitir que events sea null o undefined
    onClick: (day: Date) => void;
    isSelected: boolean;
    loading: boolean;  // Nueva propiedad
}

const Day2: React.FC<DayProps> = ({ day, currentMonth, events, onClick, isSelected, loading }) => {
    const isCurrentMonth = isSameMonth(day, currentMonth);
    const isTodayDate = isToday(day);

    const dayEvents = events
        ? events.filter(event => isSameDay(day, event.date)).flatMap(event => event.eventos)
        : [];

    const renderIcon = (eventName: string) => (
        <div className='flex justify-center items-center gap-0.5'>
            <p className='md:text-sm text-xs'>{eventName}</p>
        </div>
    );

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

export default Day2;

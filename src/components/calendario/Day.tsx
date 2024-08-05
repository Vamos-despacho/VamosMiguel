import React, { useMemo } from 'react';
import { format, isSameMonth, isToday } from 'date-fns';
import { IEvent } from '@/app/api/data/EventDays';

interface DayProps {
    day: Date;
    currentMonth: Date;
    events: IEvent[];
    onClick: (day: Date) => void;
    isSelected: boolean;
}

const Day: React.FC<DayProps> = ({ day, currentMonth, events, onClick, isSelected }) => {
    const isCurrentMonth = isSameMonth(day, currentMonth);
    const isTodayDate = isToday(day);

    // Filtrar eventos del día actual
    const dayEvents = useMemo(() => {
        return events.find(event => isSameDay(day, event.date))?.eventos || [];
    }, [day, events]);

    const renderIcon = (eventName: string) => {
        switch (eventName) {
            case 'Salud':
                return <div className='flex justify-center items-center gap-0.5'>
                    <p className='md:text-sm text-xs list-disc'>Salud</p>
                </div>;
            case 'Educación':
                return <div className='flex justify-center items-center gap-0.5'>
                    <p className='md:text-sm text-xs'>Educación</p>
                </div>;
            case 'Pleno':
                return <div className='flex justify-center items-center gap-0.5'>
                    <p className='md:text-sm text-xs'>Pleno</p>
                </div>;
            case 'Otros':
                return <div className='flex justify-center items-center gap-0.5'>
                    <p className='md:text-sm text-xs'>Otros</p>
                </div>;
            default:
                return null;
        }
    };

    const hasEventDetails = (eventDetails: any): boolean => {
        return eventDetails && Object.keys(eventDetails).length > 0;
    };

    return (
        <div
            onClick={() => dayEvents.length > 0 && onClick(day)}
            className={`min-h-[80px] md:h-[120px] border border-gray-200 p-0 text-center cursor-pointer 
                        ${!isCurrentMonth ? ' opacity-75' : ''} 
                        ${isTodayDate ? 'bg-green-50 border-green-300' : ''} 
                        ${isSelected ? 'bg-blue-50' : ''} 
                        ${dayEvents.length > 0 ? '' : ''}
                        `}
        >
            <div className={`flex justify-center font-medium py-1 text-base bg-slate-100 border-b
                ${!isCurrentMonth ? 'bg-white' : ''}`}>
                <div className='w-5'></div>
                <div>
                    {format(day, 'd')}
                </div>
                <div className='w-5 ml-[-6px] mt-[-5px]'></div>
            </div>
            <div className='flex flex-col justify-start items-start md:ml-3 md:mt-3 gap-1'>
                {dayEvents.map((event, idx) => (
                    <div key={idx} className={` ${hasEventDetails(event.event) ? 'text-blue-500' : ''}`}>
                        {renderIcon(event.nombre)}
                    </div>
                ))}
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

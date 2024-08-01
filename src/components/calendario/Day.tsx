import React, { useMemo } from 'react';
import { format, isSameMonth, isToday } from 'date-fns';
import { IEvent } from '@/app/api/data/EventDays';
import { LucideSchool } from "lucide-react";
import { BsHeartPulse } from "react-icons/bs";
import { PiUsersFourLight } from 'react-icons/pi';

import { IoIosMore } from "react-icons/io";
import { BsExclamationLg } from "react-icons/bs";
import { BsExclamationCircle } from "react-icons/bs";
import { BsExclamation } from "react-icons/bs";


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

    const numberOfItems = Object.keys(events[0] || {}).length;

    // Filtrar eventos del día actual
    const dayEvents = useMemo(() => {
        return events.find(event => isSameDay(day, event.date))?.eventos || [];
    }, [day, events]);

    const renderIcon = (eventName: string) => {
        switch (eventName) {
            case 'Salud':
                return <IconWithCheck icon={BsHeartPulse} />;
            case 'Educación':
                return <IconWithCheck icon={LucideSchool} />;
            case 'Pleno':
                return <IconWithCheck icon={PiUsersFourLight} />;
            case 'Otros':
                return <IconWithCheck icon={IoIosMore} />;
            default:
                return null;
        }
    };

    return (
        <div
            onClick={() => dayEvents.length > 0 && onClick(day)}
            className={`min-h-[80px] md:h-[120px] border border-gray-200  p-0 text-center cursor-pointer 
                        ${!isCurrentMonth ? 'text-gray-400' : ''} 
                        ${isTodayDate ? 'bg-green-50 border-green-300' : ''} 
                        ${isSelected ? ' border-green-300' : ''} 
                        ${dayEvents.length > 0 ? ' ' : ''}
                        ${(dayEvents.length > 0 && numberOfItems > 2) ? 'bg-blue-50' : ''}
                        `}
        >
            <div className="flex justify-center font-medium py-1 text-base bg-slate-100 border-b ">
                <div className='w-5'></div>
                <div >

                    {format(day, 'd')}
                </div>
                <div className='w-5 ml-[-6px] mt-[-5px]'>

                    {/* {
                        (dayEvents.length > 0 && numberOfItems > 2) && (
                            <div className="flex items-center justify-center">
                                <BsExclamation className="w-5 h-5 text-green-600" />
                            </div>
                        )
                    } */}
                </div>
            </div>
            <div className='sm:grid grid-cols-2 gap-y-1 mt-2 px-2 '>
                {dayEvents.map((event, idx) => (
                    <div key={idx} className="flex items-center justify-center">
                        {renderIcon(event.nombre)}
                    </div>
                ))}

            </div>
        </div>
    );
};

const IconWithCheck: React.FC<{ icon: React.ElementType }> = ({ icon: IconComponent }) => (
    <div className=" relative  p-1.5 rounded-lg ">
        {/* <div className="absolute top-[-4px] right-[-4px] w-3 h-3 bg-green-300 rounded-full flex items-center justify-center">
            <CheckIcon className="w-2.5 h-2.5 text-white" />
        </div> */}
        <div className="flex items-center justify-center h-full">
            <IconComponent className="w-5 h-5 text-neutral-800" />


        </div>
    </div>
);

function isSameDay(date1: Date, date2: Date): boolean {
    return date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate();
}

function CheckIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    );
}

export default Day;

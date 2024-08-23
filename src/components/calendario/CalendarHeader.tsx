import React from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface CalendarHeaderProps {
    currentDate: Date;
    onPreviousMonth: () => void;
    onNextMonth: () => void;
    isFirstMonth: boolean;
    isLastMonth: boolean;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ currentDate, onPreviousMonth, onNextMonth, isFirstMonth, isLastMonth }) => {
    return (
        <div className="flex justify-between items-center px-3">
            <button
                className={`px-3 py-1 rounded-md text-sm border ${isFirstMonth ? 'border-gray-300 text-gray-400' : 'border-gray-400 text-gray-700 hover:border-gray-500 hover:text-gray-900'}`}
                onClick={onPreviousMonth}
                disabled={isFirstMonth}
            >
                Anterior
            </button>
            <h2 className='font-medium text-xl'>{format(currentDate, 'MMMM yyyy', { locale: es })}</h2>
            <button
                className={`px-3 py-1 rounded-md text-sm border ${isLastMonth ? 'border-gray-300 text-gray-400' : 'border-gray-400 text-gray-700 hover:border-gray-500 hover:text-gray-900'}`}
                onClick={onNextMonth}
                disabled={isLastMonth}
            >
                Siguiente
            </button>
        </div>


    );
};

export default CalendarHeader;

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
        <div className="flex justify-between items-center mb-4 px-3">
            <button className={`px-2.5  py-1 rounded-sm ${isFirstMonth ? 'text-gray-600' : 'bg-slate-100 shadow-sm hover:bg-green-100'}`} onClick={onPreviousMonth} disabled={isFirstMonth}>Anterior</button>
            <h2 className='font-medium text-xl'>{format(currentDate, 'MMMM yyyy', { locale: es })}</h2>
            <button className={`px-2.5  py-1 rounded-sm ${isFirstMonth ? 'bg-slate-100 shadow-sm hover:bg-green-100' : 'text-gray-600'}`} onClick={onNextMonth} disabled={isLastMonth}>Siguiente</button>
        </div>
    );
};

export default CalendarHeader;

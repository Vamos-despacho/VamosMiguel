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
            <button onClick={onPreviousMonth} disabled={isFirstMonth}>Anterior</button>
            <h2 className='font-medium'>{format(currentDate, 'MMMM yyyy', { locale: es })}</h2>
            <button onClick={onNextMonth} disabled={isLastMonth}>Siguiente</button>
        </div>
    );
};

export default CalendarHeader;

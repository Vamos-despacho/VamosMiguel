import React, { useState } from 'react';
import { format, isSameMonth, isSameDay, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isToday } from 'date-fns';

// Estilos utilizando Tailwind CSS
const dayClasses = "p-2 text-center cursor-pointer";
const todayClasses = "bg-blue-500 text-white rounded-full";
const eventClasses = "bg-yellow-200";

interface Event {
    date: Date;
    eventType: string;
    status: string;
}

interface MonthsDatabase {
    [year: number]: {
        [month: number]: Date[];
    };
}

function generateDaysArray(date: Date): Date[] {
    const monthStart = startOfMonth(date);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const daysArray = [];
    let day = startDate;
    while (day <= endDate) {
        daysArray.push(day);
        day = addDays(day, 1);
    }
    return daysArray;
}

function generateMonthsDatabase(startYear: number, startMonth: number): MonthsDatabase {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();

    const monthsDatabase: MonthsDatabase = {};

    for (let year = startYear; year <= currentYear; year++) {
        monthsDatabase[year] = {};
        const monthStart = year === startYear ? startMonth : 0;
        const monthEnd = year === currentYear ? currentMonth : 11;

        for (let month = monthStart; month <= monthEnd; month++) {
            monthsDatabase[year][month] = generateDaysArray(new Date(year, month));
        }
    }

    return monthsDatabase;
}

const monthsDatabase: MonthsDatabase = generateMonthsDatabase(2024, 4);

const events: Event[] = [
    { date: new Date(2024, 4, 10), eventType: "Pleno", status: "Asistió" },
    { date: new Date(2024, 4, 15), eventType: "Comisión de Salud", status: "Asistió" },
    { date: new Date(2024, 5, 20), eventType: "Pleno", status: "Ausente" },
    // Añadir más eventos según sea necesario
];

function Calendario() {
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [days, setDays] = useState<Date[]>(monthsDatabase[currentDate.getFullYear()][currentDate.getMonth()]);
    const [selectedDayEvents, setSelectedDayEvents] = useState<Event[]>([]);

    const isCurrentMonth = (day: Date) => isSameMonth(day, startOfMonth(currentDate));
    const isTodayDate = (day: Date) => isToday(day);
    const isSelected = (day: Date) => isSameDay(day, currentDate);

    const handlePreviousMonth = () => {
        const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
        setCurrentDate(prevMonth);
        setDays(monthsDatabase[prevMonth.getFullYear()][prevMonth.getMonth()]);
    };

    const handleNextMonth = () => {
        const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
        setCurrentDate(nextMonth);
        setDays(monthsDatabase[nextMonth.getFullYear()][nextMonth.getMonth()]);
    };

    const isFirstMonth = () => {
        const firstMonth = new Date(2024, 4); // Mayo 2024
        const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
        return prevMonth < firstMonth;
    };

    const isLastMonth = () => {
        const today = new Date();
        const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
        return nextMonth.getFullYear() === today.getFullYear() && nextMonth.getMonth() > today.getMonth();
    };

    const getEventsForDay = (day: Date) => {
        return events.filter(event => isSameDay(event.date, day));
    };

    const handleDayClick = (day: Date) => {
        const dayEvents = getEventsForDay(day);
        if (dayEvents.length > 0) {
            setSelectedDayEvents(dayEvents);
        }
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <button onClick={handlePreviousMonth} disabled={isFirstMonth()}>Anterior</button>
                <h2>{format(currentDate, 'MMMM yyyy')}</h2>
                <button onClick={handleNextMonth} disabled={isLastMonth()}>Siguiente</button>
            </div>
            <div className="grid grid-cols-7 gap-2">
                {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((dayName, index) => (
                    <div key={index} className="text-center font-bold">{dayName}</div>
                ))}
                {days.map((day, index) => (
                    <div
                        key={index}
                        onClick={() => handleDayClick(day)}
                        className={`${dayClasses} ${!isCurrentMonth(day) && 'text-gray-400'} ${isTodayDate(day) && todayClasses} ${isSelected(day) && 'bg-blue-200'} ${eventClasses}`}
                    >
                        <div className="font-bold">{format(day, 'd')}</div>
                        {getEventsForDay(day).map((event, idx) => (
                            <div key={idx} className="text-xs mt-1">
                                {event.eventType}: {event.status}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            {selectedDayEvents.length > 0 && (
                <div className="mt-4 p-4 border rounded">
                    <h3 className="text-lg font-bold">Eventos para el día {format(selectedDayEvents[0].date, 'PPP')}</h3>
                    <ul>
                        {selectedDayEvents.map((event, idx) => (
                            <li key={idx} className="mt-2">
                                <strong>{event.eventType}</strong>: {event.status}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Calendario;

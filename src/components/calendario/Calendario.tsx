import React, { useState, useMemo, useCallback } from 'react';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays } from 'date-fns';
import CalendarHeader from './CalendarHeader';
import Day from './Day';
import EventList from './EventList';
import { events, IEvent } from '@/app/api/data/EventDays';
import Icons from '../asistencia/Icons';

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

const monthInit = 6; // Junio 2024
const yearInit = 2024;
const monthsDatabase: MonthsDatabase = generateMonthsDatabase(yearInit, monthInit);

const Calendario: React.FC = () => {
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [selectedDayEvents, setSelectedDayEvents] = useState<IEvent[]>([]);

    const days = useMemo(() => {
        return monthsDatabase[currentDate.getFullYear()][currentDate.getMonth()];
    }, [currentDate]);

    const isSelected = useCallback((day: Date) => {
        return selectedDayEvents.length > 0 && selectedDayEvents[0].date.getTime() === day.getTime();
    }, [selectedDayEvents]);

    const handlePreviousMonth = useCallback(() => {
        const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
        setCurrentDate(prevMonth);
    }, [currentDate]);

    const handleNextMonth = useCallback(() => {
        const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
        setCurrentDate(nextMonth);
    }, [currentDate]);

    const isFirstMonth = useCallback(() => {
        const firstMonth = new Date(yearInit, monthInit);
        const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
        return prevMonth < firstMonth;
    }, [currentDate]);

    const isLastMonth = useCallback(() => {
        const today = new Date();
        const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
        return nextMonth.getFullYear() === today.getFullYear() && nextMonth.getMonth() > today.getMonth();
    }, [currentDate]);

    const getEventsForDay = useCallback((day: Date) => {
        return events.filter(event => event.date.getTime() === day.getTime());
    }, []);

    const handleDayClick = useCallback((day: Date) => {
        const dayEvents = getEventsForDay(day);
        if (dayEvents.length > 0) {
            setSelectedDayEvents(dayEvents);
        }
    }, [getEventsForDay]);

    return (
        <div className='flex flex-col lg:flex-row lg:max-w-[1200px] gap-2 mx-auto lg:h-[800px] '>
            <div className="p-1 sm:px-2 lg:w-[60%] border rounded-lg shadow-sm flex flex-col justify-around">

                <div className='sm:pt-2 pb-6 lg:p-0 justify-center items-center mx-auto'>
                    <Icons />

                </div>

                <CalendarHeader
                    currentDate={currentDate}
                    onPreviousMonth={handlePreviousMonth}
                    onNextMonth={handleNextMonth}
                    isFirstMonth={isFirstMonth()}
                    isLastMonth={isLastMonth()}
                />
                <div className="grid grid-cols-7 ">
                    {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((dayName, index) => (
                        <div key={index} className="text-center font-medium">{dayName}</div>
                    ))}
                    {days.map((day, index) => (
                        <Day
                            key={index}
                            day={day}
                            currentMonth={currentDate}
                            events={getEventsForDay(day)}
                            onClick={handleDayClick}
                            isSelected={isSelected(day)}
                        />
                    ))}
                </div>
                <div>

                </div>
            </div>


            <div className='lg:mt-0 p-0.5 border rounded-lg shadow-sm lg:w-[40%]'>
                {selectedDayEvents.length > 0 ? (
                    <EventList events={selectedDayEvents} />
                ) : (
                    <div className='flex justify-center items-center mt-3 p-2'>
                        <h2 className="text-lg text-gray-800 font-base mb-2">
                            Seleccione la fecha de su interés.
                        </h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Calendario;

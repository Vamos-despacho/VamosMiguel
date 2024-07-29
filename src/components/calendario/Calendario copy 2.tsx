import React, { useState } from 'react';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, format } from 'date-fns';
import { es, se } from 'date-fns/locale';
import CalendarHeader from './CalendarHeader';
import Day from './Day';
import EventList from './EventList';
import { events, IEvent } from '@/app/api/data/EventDays';


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
    const [days, setDays] = useState<Date[]>(monthsDatabase[currentDate.getFullYear()][currentDate.getMonth()]);
    const [selectedDayEvents, setSelectedDayEvents] = useState<IEvent[]>([]);

    const isSelected = (day: Date) => selectedDayEvents.length > 0 && selectedDayEvents[0].date.getTime() === day.getTime();

    console.log({ selectedDayEvents });
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
        const firstMonth = new Date(yearInit, monthInit);
        const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
        return prevMonth < firstMonth;
    };

    const isLastMonth = () => {
        const today = new Date();
        const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
        return nextMonth.getFullYear() === today.getFullYear() && nextMonth.getMonth() > today.getMonth();
    };

    const getEventsForDay = (day: Date) => {
        return events.filter(event => event.date.getTime() === day.getTime());
    };

    const handleDayClick = (day: Date) => {
        const dayEvents = getEventsForDay(day);
        if (dayEvents.length > 0) {
            setSelectedDayEvents(dayEvents);
        }
    };

    return (
        <div className='flex flex-col lg:flex-row lg:max-w-[1200px] gap-2 mx-auto lg:h-[850px] '>
            <div className="p-1 sm:px-2 lg:w-[60%] border rounded-lg shadow-sm  flex flex-col justify-center ">
                <CalendarHeader
                    currentDate={currentDate}
                    onPreviousMonth={handlePreviousMonth}
                    onNextMonth={handleNextMonth}
                    isFirstMonth={isFirstMonth()}
                    isLastMonth={isLastMonth()}
                />
                <div className="grid grid-cols-7 gap-0.5">
                    {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((dayName, index) => (
                        <div key={index} className="text-center font-bold">{dayName}</div>
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
            </div>
            <div className=' lg:mt-0 p-0.5 border rounded-lg shadow-sm lg:w-[40%] '>

                {selectedDayEvents.length > 0 ? (
                    <EventList events={selectedDayEvents} />
                )
                    : (
                        <div className='flex  justify-center items-center mt-8 p-2'>
                            <h2 className="text-lg text-gray-700 font-semibold mb-2">
                                Por favor, seleccione la fecha de su interés.</h2>

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Calendario;

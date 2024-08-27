import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays } from 'date-fns';
import CalendarHeader from './CalendarHeader';
import Day2 from './Day2';
import EventList from './EventList';
import Icons from '../asistencia/Icons';
import vamosApi from '@/app/api/vamosApi';
import { IIEvent } from '@/interface/event';
import { getActivitesDate } from '@/libs/actividades/actions';

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

const monthInit = 6;
const yearInit = 2024;
const monthsDatabase: MonthsDatabase = generateMonthsDatabase(yearInit, monthInit);

const Calendario2: React.FC = () => {
    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [selectedDayEvents, setSelectedDayEvents] = useState<IIEvent[]>([]);
    const [events, setEvents] = useState<IIEvent[]>([]);

    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    const getEventsForMonth = async (): Promise<void> => {
        try {
            const eventsData = await getActivitesDate(month + 1, year);
            console.log(eventsData);
            const formattedEvents = eventsData.map(event => ({
                ...event,
                date: new Date(event.date),
            }));
            setEvents(formattedEvents);
            console.log({ formattedEvents });

        } catch (error) {
            console.log(error);
        }
    };



    useEffect(() => {
        getEventsForMonth();
    }, [currentDate]);

    const days = useMemo(() => {
        return monthsDatabase[year][month];
    }, [year, month]);

    const isSelected = useCallback((day: Date) => {
        return selectedDayEvents.length > 0 && isSameDay(selectedDayEvents[0].date, day);
    }, [selectedDayEvents]);

    const handlePreviousMonth = useCallback(() => {
        setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1));
    }, []);

    const handleNextMonth = useCallback(() => {
        setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1));
    }, []);

    const isFirstMonth = useMemo(() => {
        const firstMonth = new Date(yearInit, monthInit);
        const prevMonth = new Date(year, month - 1);
        return prevMonth < firstMonth;
    }, [year, month]);

    const isLastMonth = useMemo(() => {
        const today = new Date();
        const nextMonth = new Date(year, month + 1);
        return nextMonth.getFullYear() === today.getFullYear() && nextMonth.getMonth() > today.getMonth();
    }, [year, month]);

    const getEventsForDay = useCallback((day: Date) => {
        return events.filter(event => isSameDay(event.date, day));
    }, [events]);

    function isSameDay(date1: Date | string, date2: Date | string): boolean {
        const d1 = new Date(date1);
        const d2 = new Date(date2);
        return d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate();
    }

    const handleDayClick = useCallback((day: Date) => {
        const dayEvents = getEventsForDay(day);
        setSelectedDayEvents(dayEvents);
    }, [getEventsForDay]);

    return (
        <div className='flex flex-col lg:flex-row lg:max-w-[1200px] gap-2 mx-auto lg:h-[730px]'>
            <div className="p-1 sm:px-2 lg:w-[60%] border rounded-lg shadow-sm flex flex-col justify-around">
                <div className='sm:pt-2 pb-1 lg:p-0 justify-center items-center mx-auto0'>
                    <Icons currentDate={currentDate} />
                </div>

                <CalendarHeader
                    currentDate={currentDate}
                    onPreviousMonth={handlePreviousMonth}
                    onNextMonth={handleNextMonth}
                    isFirstMonth={isFirstMonth}
                    isLastMonth={isLastMonth}
                />
                <div className="grid grid-cols-7">
                    {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((dayName, index) => (
                        <div key={index} className="text-center font-medium">{dayName}</div>
                    ))}
                    {days.map((day, index) => (
                        <Day2
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

            <div className='lg:mt-0 p-0.5 border rounded-lg shadow-sm lg:w-[40%]'>
                {selectedDayEvents.length > 0 ? (
                    <EventList events={selectedDayEvents} />
                ) : (
                    <div className='flex pl-3 mt-3 p-2'>
                        <div className="text-base text-gray-800 font-base mb-4">
                            <p className="text-lg">Seleccione una fecha</p>
                            <p className='font-light text-sm'>
                                Las actividades en <strong className='text-blue-500'>color azul</strong> contienen información relevante.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Calendario2;

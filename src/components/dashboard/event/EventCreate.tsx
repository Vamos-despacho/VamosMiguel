'use client';

import React, { FormEvent, useState } from 'react';
import DatePickerForm from './DatePickerform';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import vamosApi from '@/app/api/vamosApi';
import { useToast } from "@/components/ui/use-toast"
import { createEvent } from '@/libs/event/actions';

const events = ['Pleno', 'Salud', 'Educación', 'Otros'];

const EventCreate = () => {
    const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
    const [selectedDate, setSelectedDate] = useState<Date>();
    const { toast } = useToast();

    const handleDateChange = (date: Date) => {
        setSelectedDate(date);
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        setSelectedEvents(prev =>
            checked ? [...prev, value] : prev.filter(e => e !== value)
        );
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Prepara los datos para enviar
        const data = {
            date: selectedDate,
            eventos: selectedEvents.map(eventName => ({
                nombre: eventName,
                event: {} // Aquí puedes incluir más detalles si es necesario
            }))
        };

        try {
            // const response = await vamosApi.post('/events', data);
            const response = await createEvent(data);
            console.log(response);
            if (response?.status === 200) {
                toast({
                    variant: "default",
                    title: "¡Evento Creado!",
                    description: "El evento ha sido creado exitosamente.",
                })


                // Limpiar el estado del formulario
                setSelectedEvents([]);
                setSelectedDate(new Date());
                const checkboxes = document.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>;
                checkboxes.forEach(checkbox => checkbox.checked = false);
            } else {
                toast({
                    variant: "destructive",
                    title: "¡Error!",
                    description: "Ha ocurrido un error al crear el evento.",
                })
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-8 p-4 max-w-md">
            {/* Fecha */}
            <div className="space-x-2">
                <Label className="font-semibold">Fecha del evento</Label>
                <DatePickerForm
                    selectedDate={selectedDate}
                    onDateChange={handleDateChange}
                />
            </div>

            {/* Selección de evento */}
            <div className="space-y-1">
                <Label className="font-semibold">Selecciona un evento</Label>
                <div className="flex gap-4 flex-wrap">
                    {events.map(event => (
                        <div key={event} className="flex items-center">
                            <input
                                id={event}
                                name="event"
                                type="checkbox"
                                value={event}
                                onChange={handleCheckboxChange}
                                className="mr-2"
                            />
                            <Label htmlFor={event}>{event}</Label>
                        </div>
                    ))}
                </div>
            </div>

            <button
                type="submit"
                disabled={selectedEvents.length === 0 || !selectedDate}
                className={`py-2 px-4 rounded-md text-white font-semibold ${(selectedEvents.length === 0 || !selectedDate) ? 'bg-gray-300' : 'bg-blue-500'}`}
            >
                Enviar
            </button>
        </form>
    );
};

export default EventCreate;

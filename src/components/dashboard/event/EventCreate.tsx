'use client'
import React, { useState } from 'react';

import DatePickerForm from './DatePickerform';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';

const events = ['Pleno', 'Salud', 'Educación', 'Otros'];

const EventCreate = () => {
    const [selectedEvents, setSelectedEvents] = useState<string[]>([]);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        setSelectedEvents((prev) =>
            checked ? [...prev, value] : prev.filter((e) => e !== value)
        );
    };

    return (
        <div className="flex flex-col space-y-8 p-4 bg-white rounded-lg shadow-md">
            {/* Fecha */}
            <div className="space-y-1">
                <Label className="font-semibold">Fecha del evento</Label>
                <DatePickerForm />
            </div>

            {/* Selección de evento */}
            <div className="space-y-1">
                <Label className="font-semibold">Selecciona un evento</Label>
                <div className="flex gap-4 flex-wrap">
                    {events.map((event) => (
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

            {/* Mostrar EventData si hay eventos seleccionados */}
            {selectedEvents.length > 0 && (
                <div>
                    <Label className="font-semibold">Eventos seleccionados:</Label>
                    <ul className="list-disc list-inside">
                        {selectedEvents.map((event) => (
                            <li key={event}>{event}</li>
                        ))}
                    </ul>

                    {/* EventData */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                        <div className="space-y-1">
                            <Label className="font-semibold">ID de YouTube</Label>
                            <Input name="IdYoutube" type="text" className="w-full border rounded-md p-2" />
                        </div>
                        <div className="space-y-1">
                            <Label className="font-semibold">Link de Instagram</Label>
                            <Input name="linkInstagram" type="text" className="w-full border rounded-md p-2" />
                        </div>
                    </div>

                    {/* Detalles del evento */}
                    <div className="space-y-4 mt-4">
                        <Label className="font-semibold">Detalles del evento</Label>
                        <div className="space-y-2">
                            <div className="space-y-1">
                                <Label>Título</Label>
                                <Input name="TituloEvento" type="text" className="w-full border rounded-md p-2" />
                            </div>
                            <div className="space-y-1">
                                <Label>Descripción</Label>
                                <Input name="DescripcionEvento" type="text" className="w-full border rounded-md p-2" />
                            </div>
                            <div className="space-y-1">
                                <Label>Link de Imagen</Label>
                                <Input name="ImagenEvento" type="text" className="w-full border rounded-md p-2" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventCreate;

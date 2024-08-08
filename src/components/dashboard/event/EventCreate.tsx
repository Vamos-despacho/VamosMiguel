import React from 'react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "@radix-ui/react-icons";
import DatePickerForm from './DatePickerform';
import { Label } from '@radix-ui/react-label';

const events = ['Pleno', 'Salud', 'Educación', 'Otros'];

const EventCreate = () => {
    return (
        <div className='flex flex-col space-y-6 p-3'>
            <DatePickerForm />
            <div className="space-y-2">
                <Label>Selecciona un evento</Label>
                <div className="flex gap-5">
                    {events.map((event) => (
                        <div key={event} className="flex items-center">
                            <input id={event} name="event" type="checkbox" value={event} className="mr-2" />
                            <Label htmlFor={event}>{event}</Label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default EventCreate;

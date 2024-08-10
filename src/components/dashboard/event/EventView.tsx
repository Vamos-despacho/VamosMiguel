'use client'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useState } from 'react';
import { IIEvent } from '@/interface/event';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import BtnDeleteAlert from "../BtnDeleteAlert";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MdDelete } from "react-icons/md";

interface Props {
    events: IIEvent[]
}

const EventView = ({ events: initialEvents }: Props) => {
    const [events, setEvents] = useState<IIEvent[]>(initialEvents);
    const [selectedEvent, setSelectedEvent] = useState<IIEvent | null>(null);
    const [selectedEventDate, setSelectedEventDate] = useState<Date | null>(null);

    const handleEventClick = (eventoId: string, parentEvent: IIEvent) => {
        const selected = parentEvent.eventos?.find(evento => evento._id === eventoId);
        if (selected) {
            setSelectedEvent({
                ...parentEvent,
                eventos: [selected],
            });
            setSelectedEventDate(new Date(parentEvent.date));
        }
    };

    const handleDelete = async (id: string) => {
        try {
            const updatedEvents = events.filter((event) => event._id !== id);
            setEvents(updatedEvents);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const getMostRecentEventDate = () => {
        const dates = events.map(event => new Date(event.date));
        return new Date(Math.max(...dates.map(date => date.getTime())));
    };

    const mostRecentDate = getMostRecentEventDate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Lógica para manejar la sumisión del formulario
    }

    return (
        <div className="flex p-3 flex-col sm:flex-row">

        </div>
    );
}

export default EventView;

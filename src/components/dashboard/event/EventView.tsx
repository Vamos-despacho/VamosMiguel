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
        console.log(parentEvent)
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
    const handleDeleteEventDay = async (id: string) => {

        console.log(id)
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
    if (!events || events.length === 0) {
        return <p>No hay eventos disponibles.</p>;
    }

    return (
        <div className="flex p-3 flex-col sm:flex-row">
            <div className="sm:w-1/2">
                <Table>
                    <TableCaption>Lista de Eventos</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Fecha</TableHead>
                            <TableHead>Eventos</TableHead>
                            <TableHead>Borrar</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {events.map((event) => (
                            <TableRow
                                key={event._id}
                                className={`hover:bg-gray-100 ${new Date(event.date).toDateString() === mostRecentDate.toDateString() ? 'bg-green-50' : ''}`}
                            >
                                <TableCell>{format(new Date(event.date), 'PPPP', { locale: es })}</TableCell>
                                <TableCell className="flex gap-1">
                                    {event.eventos?.map((evento) => (
                                        <button
                                            key={evento._id}
                                            className={`border rounded-sm p-1 px-2 hover:bg-blue-100 ${selectedEvent?.eventos?.[0]?._id === evento._id ? 'bg-blue-100 ' : ''}`}
                                            onClick={() => handleEventClick(evento._id, event)}
                                        >
                                            {evento.nombre}
                                        </button>
                                    ))}
                                </TableCell>
                                <TableCell>
                                    <BtnDeleteAlert
                                        id={2}
                                        link={`/events/${event._id}`}
                                        onClickDelete={() => handleDelete(event._id)}
                                        msg={`Evento ${event.date}`}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {selectedEvent ? (
                <div className="sm:w-1/2 mt-4 sm:mt-0 sm:ml-4 p-5 border rounded-sm shadow-sm bg-white">
                    {selectedEventDate && (
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{format(selectedEventDate, 'PPPP', { locale: es })}</h2>
                    )}

                    <div className="flex items-end mb-4">
                        <h2 className="text-3xl font-bold text-neutral-800 ">
                            {selectedEvent.eventos?.[0]?.nombre || 'Evento no disponible'}
                        </h2>
                        <div className="pl-2 ">
                            {selectedEvent.eventos?.[0] && (
                                <BtnDeleteAlert
                                    id={2}
                                    link={`/events/eventday/${selectedEvent.eventos[0]._id}`}
                                    onClickDelete={() => handleDeleteEventDay(selectedEvent.eventos[0]._id)}
                                    msg={`Evento ${selectedEvent.eventos[0].nombre}`}
                                />
                            )}
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="youtube" className="text-gray-700 font-medium">IDs de YouTube</Label>
                                <Input
                                    name="idYoutube"
                                    id="youtube"
                                    type="text"
                                    placeholder="8VSgt-aAk7Y, 8VSgt-aAk7Y"
                                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="instagram" className="text-gray-700 font-medium">Enlace de Instagram</Label>
                                <Input
                                    name="linkInstagram"
                                    id="instagram"
                                    type="text"
                                    placeholder="'link','link'"
                                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div className="mt-2 bg-gray-100 p-3 rounded-sm space-y-4">
                                <Label htmlFor="evento" className="text-gray-800 font-medium">Detalles del Evento</Label>
                                <div className="pl-2 space-y-3">
                                    <div>
                                        <Label htmlFor="titulo" className="text-gray-600">Título</Label>
                                        <Input
                                            name="titulo"
                                            id="titulo"
                                            type="text"
                                            placeholder="Título"
                                            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="descripcion" className="text-gray-600">Descripción</Label>
                                        <Input
                                            name="descripcion"
                                            id="descripcion"
                                            type="text"
                                            placeholder="Descripción"
                                            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="urlImagen" className="text-gray-600">URL Imagen</Label>
                                        <Input
                                            name="urlImagen"
                                            id="urlImagen"
                                            type="text"
                                            placeholder="Url de la imagen"
                                            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button variant={'default'} className="w-full text-base my-4">Guardar</Button>
                    </form>
                </div>
            )
                : (
                    <div className="sm:w-1/2 mt-4 sm:mt-0 sm:ml-4 p-5 border rounded-sm shadow-sm bg-white">

                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Detalles del Evento</h2>
                        <p>Selecciona un evento para ver sus detalles</p>
                    </div>
                )}
        </div>
    );
}

export default EventView;

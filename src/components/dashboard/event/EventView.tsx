"use client"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { useState, useEffect } from 'react';
import { IIEvent, IIEventDetails } from '@/interface/event';
import { format } from 'date-fns';
import { es, se } from 'date-fns/locale';
import BtnDeleteAlert from "../BtnDeleteAlert";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import vamosApi from "@/app/api/vamosApi";
import { useToast } from "@/components/ui/use-toast"
import { IoIosAddCircleOutline } from "react-icons/io";
const eventsAdd = ['Pleno', 'Salud', 'Educación', 'Otros'];

interface Props {
    events: IIEvent[];
}

const EventView = ({ events: initialEvents }: Props) => {
    console.log(initialEvents.length)
    const { toast } = useToast()

    const [events, setEvents] = useState<IIEvent[]>(initialEvents);
    const [selectedEvent, setSelectedEvent] = useState<IIEvent | null>(null);
    const [formValues, setFormValues] = useState<IIEventDetails>({
        idsYoutube: [],
        linkInstagram: [],
        eventoImagen: [{
            linkImagen: [],
            titulo: '',
            descripcion: ''
        }]
    });

    const handleEventClick = (eventoId: string, parentEvent: IIEvent) => {
        const selected = parentEvent.eventos?.find(evento => evento._id === eventoId);
        if (selected) {
            setSelectedEvent({
                ...parentEvent,
                eventos: [selected],
            });
            setFormValues({
                idsYoutube: selected.event.idsYoutube ?? [],
                linkInstagram: selected.event.linkInstagram ?? [],
                eventoImagen: selected.event.eventoImagen ?? [{
                    linkImagen: [],
                    titulo: '',
                    descripcion: ''
                }]
            });
        }
    };

    useEffect(() => {
        // Reset form values when the selected event changes
        if (selectedEvent?.eventos?.[0]?.event) {
            setFormValues({
                idsYoutube: selectedEvent.eventos[0].event.idsYoutube ?? [],
                linkInstagram: selectedEvent.eventos[0].event.linkInstagram ?? [],
                eventoImagen: selectedEvent.eventos[0].event.eventoImagen ?? [{
                    linkImagen: [],
                    titulo: '',
                    descripcion: ''
                }]
            });
        }
    }, [selectedEvent]);

    const handleDelete = async (id: string) => {
        try {
            const updatedEvents = events.filter((event) => event._id !== id);
            setEvents(updatedEvents);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    // Obtiene la fecha más reciente
    const getMostRecentEventDate = () => {
        const dates = events.map(event => new Date(event.date));
        return new Date(Math.max(...dates.map(date => date.getTime())));
    };

    const mostRecentDate = getMostRecentEventDate();
    const handleDeleteEventDay = async (eventId: string) => {
        try {
            const updatedEvents = events.map((event) => ({
                ...event,
                eventos: event.eventos?.filter(evento => evento._id !== eventId) || [],
            }));
            setEvents(updatedEvents);
            setSelectedEvent(null);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const idEvento = formData.get('idEvento')?.toString();
        const eventDetails: IIEventDetails = {
            idsYoutube: formData.get('idYoutube')?.toString().split(',').map(id => id.trim()) || [],
            linkInstagram: formData.get('linkInstagram')?.toString().split(',').map(link => link.trim()) || [],
            eventoImagen: [{
                linkImagen: [formData.get('urlImagen')?.toString().trim() || ''],
                titulo: formData.get('titulo')?.toString() || '',
                descripcion: formData.get('descripcion')?.toString() || ''
            }]
        };

        if (idEvento) {
            try {
                const res = await vamosApi.put(`/events/eventday/${idEvento}`, eventDetails);
                console.log(res.status)
                if (res.status === 400) return toast({
                    variant: "destructive",
                    title: "¡Mensaje no enviado!",
                    description: "Hubo un error al enviar el mensaje, por favor intente de nuevo.",
                })
                if (res.status === 200) {

                    toast({
                        variant: "default",
                        title: "¡Publicación Actualizada!",
                        description: "",
                    })
                }
            } catch (error) {
                console.error('Error al actualizar el evento:', error);
            }
        } else {
            console.log('No hay datos válidos para guardar.');
        }
    };
    useEffect(() => {
        setEvents(initialEvents);
    }, [initialEvents]);




    const [selectedEvents, setSelectedEvents] = useState<string[]>([]);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        setSelectedEvents(prev =>
            checked ? [...prev, value] : prev.filter(e => e !== value)

        );
    };
    const handleAddEvent = async (eventId: string) => {

        const selectedEvent = {
            eventos: selectedEvents.map(event => ({ nombre: event }))
        }

        if (selectedEvent) {
            try {
                const res = await vamosApi.put(`/events/${eventId}`, selectedEvent);

                console.log('asdf', res.data)


                if (res.status === 400) return toast({
                    variant: "destructive",
                    title: "¡Mensaje no enviado!",
                    description: "Hubo un error al enviar el mensaje, por favor intente de nuevo.",
                })
                if (res.status === 200) {
                    const updatedEvents = events.map(event => {
                        if (event._id === eventId) {
                            return {
                                ...event,
                                eventos: res.data.eventos // Reemplazar el array eventos con el actualizado del servidor
                            };
                        }
                        return event;
                    });

                    setEvents(updatedEvents);

                    toast({
                        variant: "default",
                        title: "¡Publicación Actualizada!",
                        description: "",
                    })
                }
            } catch (error) {
                console.error('Error al actualizar el evento:', error);
            }
        } else {
            console.log('No hay datos válidos para guardar.');
        }
    }

    const [seletedEventAdd, setSeletedEventAdd] = useState([''])

    const handleSeledEventFilter = (event: IIEvent) => {
        console.log('handleseldEventFilter')
        setSelectedEvents([]);
        const eventNames = event.eventos?.map(evento => evento.nombre) || [];
        const selected = eventsAdd.filter(eventName => !eventNames.includes(eventName));

        setSeletedEventAdd(selected);
    }



    if (!events || events.length === 0) {
        return <p>No hay eventos disponibles.</p>;
    }

    return (
        <div className="flex p-1 flex-col sm:flex-row  ">
            <div className="sm:w-1/2">
                {/* <pre>{JSON.stringify(events, null, 2)}</pre> */}
                <Table>
                    {/* <TableCaption>Lista de Eventos</TableCaption> */}
                    <TableHeader>
                        <TableRow>
                            <TableHead>Fecha</TableHead>
                            <TableHead>Eventos</TableHead>
                            <TableHead>Agregar/Borrar</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {events.map((event) => (
                            <TableRow
                                key={event._id}
                                className={`hover:bg-gray-100 ${new Date(event.date).toDateString() === mostRecentDate.toDateString() ? 'bg-green-50' : ''}`}
                            >
                                <TableCell>{format(new Date(event.date), 'PP', { locale: es })}</TableCell>
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
                                    <div className="flex justify-center  gap-2">
                                        <Dialog>
                                            <DialogTrigger onClick={() => handleSeledEventFilter(event)}>
                                                <IoIosAddCircleOutline className="h-5 w-5" />
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>Selecciona un evento</DialogTitle>
                                                    <DialogDescription>
                                                        <div className="space-y-1 py-4">
                                                            <div className="flex gap-4 flex-wrap">
                                                                {seletedEventAdd.map(event => (
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
                                                            className="border p-0.5 bg-white hover:text-green-500 rounded-sm"
                                                            onClick={() => handleAddEvent(event._id)}>
                                                            Guardar
                                                        </button>
                                                    </DialogDescription>
                                                </DialogHeader>
                                            </DialogContent>
                                        </Dialog>




                                        <BtnDeleteAlert
                                            id={2}
                                            link={`/events/${event._id}`}
                                            onClickDelete={() => handleDelete(event._id)}
                                            msg={`Evento ${event.date}`}
                                        />
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>

            {selectedEvent ? (
                <div className="sm:w-1/2  px-3 border rounded-sm shadow-sm bg-white">
                    {selectedEvent.eventos?.[0] && (
                        <>
                            <h2 className="text-base font-semibold text-gray-800 mb-4">{format(new Date(selectedEvent.date), 'PPPP', { locale: es })}</h2>
                            {/* <pre>{JSON.stringify(selectedEvent.eventos[0].event, null, 3)}</pre> */}
                            <div className="flex items-end mb-1">
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
                                <div className="space-y-4">
                                    <div className="">
                                        <input type="hidden" name="idEvento" value={selectedEvent.eventos[0]._id} />
                                        <Label htmlFor="youtube" className="text-gray-700 font-medium">IDs de YouTube</Label>
                                        <Input
                                            name="idYoutube"
                                            id="youtube"
                                            type="text"
                                            placeholder="8VSgt-aAk7Y, 8VSgt-aAk7Y"
                                            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                                            value={formValues.idsYoutube}
                                            onChange={(e) => setFormValues({
                                                ...formValues,
                                                idsYoutube: e.target.value.split(',').map(id => id.trim())
                                            })}
                                        />
                                    </div>
                                    <div className="">
                                        <Label htmlFor="instagram" className="text-gray-700 font-medium">Enlace de Instagram</Label>
                                        <Input
                                            name="linkInstagram"
                                            id="instagram"
                                            type="text"
                                            placeholder="'link','link'"
                                            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                                            value={formValues.linkInstagram}
                                            onChange={(e) => setFormValues({
                                                ...formValues,
                                                linkInstagram: e.target.value.split(',').map(link => link.trim())
                                            })}
                                        />
                                    </div>
                                    <div className=" bg-gray-100 px-2 rounded-md space-y-2">

                                        <Label htmlFor="titulo" className="text-gray-700 font-medium">Evento</Label>
                                        <div className="">
                                            <Label htmlFor="titulo" className="ml-1 text-gray-700 font-medium">Título</Label>
                                            <Input
                                                name="titulo"
                                                id="titulo"
                                                type="text"
                                                placeholder="Título"
                                                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                                                value={formValues.eventoImagen?.[0]?.titulo || ''}
                                                onChange={(e) => setFormValues({
                                                    ...formValues,
                                                    eventoImagen: formValues.eventoImagen ? [{
                                                        ...formValues.eventoImagen[0],
                                                        titulo: e.target.value
                                                    }] : [{
                                                        linkImagen: [],
                                                        titulo: e.target.value,
                                                        descripcion: ''
                                                    }]
                                                })}
                                            />
                                        </div>
                                        <div className="">
                                            <Label htmlFor="descripcion" className="ml-1 text-gray-700 font-medium">Descripción</Label>
                                            <Input
                                                name="descripcion"
                                                id="descripcion"
                                                type="text"
                                                placeholder="Descripción"
                                                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                                                value={formValues.eventoImagen?.[0]?.descripcion || ''}
                                                onChange={(e) => setFormValues({
                                                    ...formValues,
                                                    eventoImagen: formValues.eventoImagen ? [{
                                                        ...formValues.eventoImagen[0],
                                                        descripcion: e.target.value
                                                    }] : [{
                                                        linkImagen: [],
                                                        titulo: '',
                                                        descripcion: e.target.value
                                                    }]
                                                })}
                                            />
                                        </div>
                                        <div className="">
                                            <Label htmlFor="urlImagen" className="ml-1 text-gray-700 font-medium">Url de la Imagen</Label>
                                            <Input
                                                name="urlImagen"
                                                id="urlImagen"
                                                type="text"
                                                placeholder="Url de la imagen"
                                                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                                                value={formValues.eventoImagen?.[0]?.linkImagen || ''}
                                                onChange={(e) => setFormValues({
                                                    ...formValues,
                                                    eventoImagen: formValues.eventoImagen ? [{
                                                        ...formValues.eventoImagen[0],
                                                        linkImagen: [e.target.value]
                                                    }] : [{
                                                        linkImagen: [e.target.value],
                                                        titulo: '',
                                                        descripcion: ''
                                                    }]
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <Button type="submit" className="w-full">Guardar</Button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            ) : (
                <div className="sm:w-1/2  px-3 border rounded-sm shadow-sm bg-white justify-center flex pt-10">

                    <p className="text-gray-700">Selecciona un evento para ver los detalles.</p>
                </div>
            )}
        </div>
    );
};

export default EventView;

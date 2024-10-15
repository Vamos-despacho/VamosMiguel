import { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { updateEvent, updateOtrosEvent } from '@/libs/salon/actions';
import DeleteEvent from './DeleteEvent';
import { IFAchievements } from '@/interface/atletas';
import DeleteOtrosEvent from './DeleteOtrosEvent';

const OtrosEventos = ({ otrosEventos, id, name }: { otrosEventos: IFAchievements[], id: string, name: string }) => {
    const [eventName, setEventName] = useState<string>(''); // Para almacenar el nombre del evento ingresado manualmente
    const [position, setPosition] = useState<string>(''); // Para almacenar la posición ingresada
    const [dicipline, setDicipline] = useState<string>(''); // Para almacenar la disciplina ingresada
    const [ano, setAno] = useState<string>('2024'); // Para almacenar el año
    const [events, setEvents] = useState<IFAchievements[]>(otrosEventos);

    // Maneja el cambio del nombre del evento
    const handleEventNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEventName(e.target.value);
    };

    // Maneja el cambio de la posición
    const handlePositionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPosition(e.target.value);
    };

    const handleDiciplineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDicipline(e.target.value);
    };

    const handleAnoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAno(e.target.value);
    };

    // Función para enviar los datos a la base de datos y agregar el nuevo evento al estado
    const handleSave = async () => {
        if (eventName) {
            const newEvent: IFAchievements = {
                dicipline,
                event: eventName,
                position,
                year: parseInt(ano),
            };

            // Actualiza la lista de eventos localmente
            setEvents([...events, newEvent]);

            // Aquí puedes hacer la petición para guardar los datos en tu backend
            const dataToSave = {
                achievements: newEvent,
                athleteId: id,
            };

            console.log('Datos guardados:', dataToSave);

            await updateOtrosEvent(dataToSave); // Llama a la función de tu backend para actualizar el evento
        }
    };

    const handleDelete = async (eventId?: string) => {
        console.log({ eventId })
        const filteredEvents = events.filter((event) => event.event !== eventId);
        setEvents(filteredEvents);
    };

    return (
        <Dialog>
            <DialogTrigger>
                <div className='flex flex-col bg-white gap-2 '>
                    {(otrosEventos.length > 0) ? (
                        otrosEventos.map((deporte, index) => (
                            <div className='flex gap-1 border border-gray-50 shadow-md p-1 rounded-sm' key={index}>
                                <span className='text-xs capitalize'>{deporte.event}</span>
                            </div>
                        ))
                    ) : <span className='flex flex-col bg-white text-sm'>Agregar eventos</span>
                    }
                </div>
            </DialogTrigger>

            <DialogContent className="flex flex-col md:max-w-2xl lg:max-w-4xl">
                <DialogTitle>Actualizar
                    <span className='ml-1 uppercase text-azulv'>{name}</span>
                </DialogTitle>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                    {events.map((evento, index) => (
                        <div className='relative flex flex-col items-start p-1 bg-gray-100 text-black rounded-md shadow-md' key={index}>
                            <span className='text-sm font-semibold capitalize mb-1'>{evento.event}</span>
                            <div className='flex items-center text-xs space-x-2'>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-14a6 6 0 110 12 6 6 0 010-12z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                                    </svg>
                                    {evento.position || 'N/A'}
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M12.293 9.707l-3-3a1 1 0 00-1.414 1.414l2.293 2.293H3a1 1 0 000 2h7.172l-2.293 2.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                                    </svg>
                                    {evento.location || 'N/A'}
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-14a6 6 0 110 12 6 6 0 010-12z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M9 10a1 1 0 012 0v2a1 1 0 11-2 0v-2z" clipRule="evenodd" />
                                    </svg>
                                    {evento.year}
                                </div>
                            </div>
                            <div className='absolute top-[-10px] right-[-7px] '>
                                {/* <MdOutlineDeleteOutline className='w-5 h-5' /> */}
                                <DeleteOtrosEvent sportEvent={evento.event} eventId={evento._id} athleteId={id} onClickDelete={handleDelete} msg='Evento' />
                            </div>
                        </div>
                    ))}
                </div>

                <DialogDescription>Agrega un nuevo evento</DialogDescription>

                <form className="mt-4 flex flex-col gap-4">
                    <div>
                        <Label htmlFor="eventName" className="text-gray-700 font-medium">Nombre del Evento</Label>
                        <Input
                            type='text'
                            name='eventName'
                            placeholder='Nombre del evento'
                            value={eventName}
                            onChange={handleEventNameChange}
                            className="p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <Label htmlFor="position" className="text-gray-700 font-medium">Posición</Label>
                        <Input
                            type='text'
                            name='position'
                            placeholder='Posición'
                            value={position}
                            onChange={handlePositionChange}
                            className="p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <Label htmlFor="dicipline" className="text-gray-700 font-medium">Deporte</Label>
                        <Input
                            type='text'
                            name='deporte'
                            placeholder='país, ciudad'
                            value={dicipline}
                            onChange={handleDiciplineChange}
                            className="p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div>
                        <Label htmlFor="ano" className="text-gray-700 font-medium">Año</Label>
                        <Input
                            type='text'
                            name='ano'
                            placeholder='2024'
                            value={ano}
                            onChange={handleAnoChange}
                            className="p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                        />
                    </div>


                    <button
                        type="button"
                        onClick={handleSave}
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                    >
                        Guardar
                    </button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default OtrosEventos;

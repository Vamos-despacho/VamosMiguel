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
import { FaRunning } from 'react-icons/fa';
import { IEventParticipation, IEventDeporte } from '@/interface/atletas'; // Ajusta según tu ruta de interfaces
import { updateEvent } from '@/libs/salon/actions';
import DeleteEvent from './DeleteEvent';

const Eventos = ({ eventos, id, name, eventsDB }: { eventos: IEventParticipation[], eventsDB: IEventDeporte[], id: string, name: string }) => {
    const [selectedEvent, setSelectedEvent] = useState<IEventDeporte | null>(null); // Para almacenar el evento seleccionado
    const [position, setPosition] = useState<string>(''); // Para almacenar la posición ingresada
    const [dicipline, setDicipline] = useState<string>(''); // Para almacenar la diciplina ingres
    const [ano, setAno] = useState<string>('2024'); // Para almacenar la diciplina ingres
    const [events, setEvents] = useState(eventos)
    // Maneja la selección del evento
    const handleEventSelect = (evento: IEventDeporte) => {
        setSelectedEvent(evento);
    };

    // Maneja el cambio de la posición
    const handlePositionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPosition(e.target.value);
    };
    const handleDiciplineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDicipline(e.target.value);
    }
    const handleAnoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAno(e.target.value);
    }

    // Función para enviar los datos a la base de datos
    const handleSave = async () => {
        if (selectedEvent) {
            const dataToSave = {
                events: {

                    event: selectedEvent._id,
                    position,
                    dicipline,
                    ano
                },
                athleteId: id, // Usamos el ID del atleta para referenciarlo
            };

            // Aquí puedes hacer la petición para guardar los datos en tu backend
            // await saveEventPosition(dataToSave); // Esta es una llamada ficticia a tu API
            console.log('Datos guardados:', dataToSave);
            updateEvent(dataToSave); // Llama a la función de tu backend para actualizar el evento
        }
    };

    const handleDelete = async (eventId: string) => {
        const filterEvent = events.filter((event) => event._id !== eventId)
        setEvents(filterEvent)

    }

    return (
        <Dialog>
            <DialogTrigger>
                <div className='flex flex-col bg-white gap-2'>
                    {(eventos.length > 0) ? (
                        eventos.map((deporte, index) => (
                            <div className='flex gap-1 border border-gray-50 shadow-md p-1 rounded-sm' key={index}>

                                <span className='text-xs capitalize'>{deporte.event.name}</span>

                            </div>
                        ))
                    ) : <span className='flex flex-col bg-white text-sm'>Agregar eventos</span>
                    }
                </div>
            </DialogTrigger>

            <DialogContent className="flex flex-col lg:max-h-[95dvh] md:max-w-2xl lg:max-w-4xl">
                <DialogTitle>Actualizar
                    <span className='ml-1 uppercase text-azulv'>
                        {name}</span>
                </DialogTitle>
                <div className='flex gap-2'>{events.map((evento) => (
                    <div className='bg-azulv relative flex justify-center items-center flex-col text-white p-2 rounded-lg font-semibold' key={evento._id}>
                        <span>
                            {evento.event.name}
                        </span>
                        <span className='text-xs'>
                            {evento.position}
                        </span>
                        <span className='text-xs'>
                            {evento.dicipline}
                        </span>
                        <span className='text-xs'>
                            {evento.ano}
                        </span>
                        <div className='absolute top-[-10px] right-[-7px] '>
                            {/* <MdOutlineDeleteOutline className='w-5 h-5' /> */}
                            <DeleteEvent sportEvent={evento.event._id} eventId={evento._id} athleteId={id} onClickDelete={handleDelete} msg='Evento' />
                        </div>

                    </div>
                ))}</div>
                <DialogDescription>Selecciona un evento y agrega la posición</DialogDescription>

                <div className='flex gap-2'>

                    {eventsDB.map((evento) => (
                        <div
                            key={evento._id}
                            className={`bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow p-3 h-auto w-auto cursor-pointer ${selectedEvent?._id === evento._id ? 'ring-2 ring-blue-500' : ''}`}
                            onClick={() => handleEventSelect(evento)} // Al hacer clic selecciona el evento
                        >
                            <div className="flex flex-col items-center gap-1">
                                <div className="bg-primary rounded-full p-2 text-primary-foreground">
                                    <FaRunning className='w-5 h-5' />
                                </div>
                                <h3 className='text-base font-semibold text-primary'>{evento.name}</h3>
                                {/* <p className='text-xs text-gray-500'>{evento.year}</p> */}
                                <p>{evento.location}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedEvent && (
                    <form className="mt-4 flex flex-col gap-4">
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
                            <Label htmlFor="dicipline" className="text-gray-700 font-medium">Diciplina</Label>
                            <Input
                                type='text'
                                name='dicipline'
                                placeholder='Diciplina'
                                value={dicipline}
                                onChange={handleDiciplineChange}
                                className="p-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <Label htmlFor="dicipline" className="text-gray-700 font-medium">Año</Label>
                            <Input
                                type='text'
                                name='ano'
                                placeholder='1990'
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
                )}
            </DialogContent>
        </Dialog>
    );
};

export default Eventos;

'use client';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Switch } from '../ui/switch'
import DeporteUpdate from './update/Deporte'
import UpdateAthlete from './update/UpdateAthlete'
import { IEventDeporte, IIAtleta } from '@/interface/atletas'
import { useEffect, useState } from "react"
import Eventos from "./update/Eventos"
import { obtenerEventos, updateAthleteStatus } from "@/libs/salon/actions"
import DeleteAthlete from "./update/DeleteAthlete"
import OtrosEventos from "./update/OtrosEventos";

const ActualiarAtleta = ({ atletas }: { atletas: IIAtleta[] }) => {
    const [eventsDB, setEventsDB] = useState<IEventDeporte[] | []>([])
    const [athlete, setAthlete] = useState(atletas)

    // Estado para manejar el status del switch por atleta
    const [athleteStatus, setAthleteStatus] = useState<Record<string, boolean>>({});

    const getEvents = async () => {
        const resp = await obtenerEventos();
        if (resp) {
            const eventos = JSON.parse(resp);
            setEventsDB(eventos);
        } else {
            setEventsDB([]);
        }
    }

    useEffect(() => {
        getEvents();

        // Inicializa los estados de los atletas para el Switch
        const initialStatus = atletas.reduce((acc, atleta) => {
            acc[atleta._id] = atleta.state || false; // Asumiendo que hay un campo 'isActive'
            return acc;
        }, {} as Record<string, boolean>);

        setAthleteStatus(initialStatus);
    }, [atletas]);

    const handleSwitchChangeEstado = async (id: string, newState: boolean) => {
        try {
            // Actualiza el estado local
            setAthleteStatus(prevState => ({
                ...prevState,
                [id]: newState
            }));

            // Aquí puedes hacer la actualización en el backend, por ejemplo:
            await updateAthleteStatus(id, newState);
        } catch (error: any) {
            alert(error.response?.data?.message || 'Error al actualizar el estado del atleta');
        }
    };

    const handleDelete = (id: string) => {
        const updatedAthlete = athlete.filter((atleta) => atleta._id !== id);
        setAthlete(updatedAthlete);
    };

    return (
        <Table>
            <TableCaption>A list of your recent athletes.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[200px]">Nombre</TableHead>
                    <TableHead className='w-[100px]'>Status</TableHead>
                    <TableHead className=''>Deporte</TableHead>
                    <TableHead className=''>Eventos</TableHead>
                    <TableHead className=''>Otros Eventos</TableHead>
                    <TableHead className="text-right">Actividad</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    athlete.map((atleta) => (
                        <TableRow key={atleta._id}>
                            <TableCell className="font-medium">{atleta.name}</TableCell>
                            <TableCell>
                                <Switch
                                    id={atleta._id}
                                    checked={athleteStatus[atleta._id] || false}
                                    onCheckedChange={(newState) => handleSwitchChangeEstado(atleta._id, newState)}
                                />
                            </TableCell>
                            <TableCell className="flex bg-gray-50">
                                <DeporteUpdate name={atleta.name} deportes={atleta.sports} id={atleta._id} />
                            </TableCell>
                            <TableCell className="">
                                <Eventos eventsDB={eventsDB} eventos={atleta.events} name={atleta.name} id={atleta._id} />
                            </TableCell>
                            <TableCell className="">
                                <OtrosEventos otrosEventos={atleta.achievements} name={atleta.name} id={atleta._id} />
                            </TableCell>
                            <TableCell className="flex gap-2 justify-end">
                                <UpdateAthlete athlete={atleta} />
                                <DeleteAthlete onClickDelete={() => handleDelete(atleta._id)} id={atleta._id} />
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    );
};

export default ActualiarAtleta;

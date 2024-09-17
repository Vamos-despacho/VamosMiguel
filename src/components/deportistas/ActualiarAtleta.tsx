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
import { Switch } from '../ui/switch'
import DeporteUpdate from './update/Deporte'
import UpdateAthlete from './update/UpdateAthlete'
import { IEventDeporte, IIAtleta } from '@/interface/atletas'
import { useEffect, useState } from "react"
import Eventos from "./update/Eventos"
import { obtenerEventos } from "@/libs/salon/actions"
import DeleteAthlete from "./update/DeleteAthlete"



const ActualiarAtleta = ({ atletas }: { atletas: IIAtleta[] }) => {

    const [eventsDB, setEventsDB] = useState<IEventDeporte[] | []>([])
    const [athlete, setAthlete] = useState(atletas)

    const getEvents = async () => {
        const resp = await obtenerEventos()
        if (resp) {
            const eventos = JSON.parse(resp)
            setEventsDB(eventos)

        } else {
            setEventsDB([])
        }
    }
    useEffect(() => {
        getEvents()
    }, [])

    const handleDelete = (id: string) => {
        const updatedAthlete = athlete.filter((atleta) => atleta._id !== id);
        setAthlete(updatedAthlete);
    }

    return (

        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[200px]">Nombre</TableHead>
                    <TableHead className='w-[100px]' >Status</TableHead>
                    <TableHead className='' >Deporte</TableHead>
                    <TableHead className='' >Eventos</TableHead>

                    <TableHead className="text-right">Actividad</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    athlete.map((atleta) => (
                        <TableRow key={atleta._id}>
                            <TableCell className="font-medium">{atleta.name}</TableCell>
                            <TableCell>
                                <Switch id="airplane-mode" />
                            </TableCell>
                            <TableCell className="flex bg-gray-50 ">
                                <DeporteUpdate name={atleta.name} deportes={atleta.sports} id={atleta._id} />
                            </TableCell>
                            <TableCell className="">
                                <Eventos eventsDB={eventsDB} eventos={atleta.events} name={atleta.name} id={atleta._id} />
                            </TableCell>
                            <TableCell className=" flex gap-2 justify-end">
                                <UpdateAthlete athlete={atleta} />
                                <DeleteAthlete onClickDelete={() => handleDelete(atleta._id)} id={atleta._id} />
                            </TableCell>
                        </TableRow>
                    ))
                }

            </TableBody>
        </Table>


    )
}

export default ActualiarAtleta
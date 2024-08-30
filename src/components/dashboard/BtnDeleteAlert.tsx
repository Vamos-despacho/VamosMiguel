import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { AxiosError } from 'axios';
import { RiDeleteBin6Line } from "react-icons/ri";
import { deleteComsionMonth, deleteEvent, eventDeleteDay } from '@/libs/event/actions';

interface Props {
    id: string;
    link: string
    onClickDelete: (id: string) => void
    msg: string
}
const BtnDeleteAlert = ({ id, link, onClickDelete, msg }: Props) => {

    const handleDelete = async () => {
        try {
            let resp;

            // Determina la función correcta basada en el valor de `link`
            if (link === 'deleteEvent') {
                resp = await deleteEvent(id);
            } else if (link === 'eventDeleteDay') {
                resp = await eventDeleteDay(id);
            } else if (link === 'deleteMonth') {
                resp = await deleteComsionMonth(id);
            }

            // Verifica la respuesta solo si la solicitud fue realizada
            if (resp?.status === 200) {
                return onClickDelete(id);
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                alert(error.response?.data.message);
            } else {
                console.error('Error inesperado:', error);
            }
        }
    };

    return (
        <div><AlertDialog>
            <AlertDialogTrigger className=' border p-1 bg-white rounded-sm hover:text-red-500'>  <RiDeleteBin6Line className="w-5 h-5 hover:text-red-500 text-gray-700 " /></AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Eliminar {msg}</AlertDialogTitle>
                    <AlertDialogDescription>
                        ¿Estás seguro de que quieres eliminarlo? No podrás recuperarlo después de eliminarlo.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete}>
                        Eliminar
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
        </div>
    )
}

export default BtnDeleteAlert
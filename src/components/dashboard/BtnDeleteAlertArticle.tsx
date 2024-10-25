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
import { deleteArticle } from '@/libs/articulos/actions';

interface Props {
    id: string;

    onClickDelete: (id: string) => void
    msg: string
}
const BtnDeleteAlertArticle = ({ id, onClickDelete, msg }: Props) => {
    console.log(id)
    const handleDelete = async () => {
        try {
            // Determina la función correcta basada en el valor de `link`
            const resp = await deleteArticle(id)
            const { status, message } = JSON.parse(resp);
            // Verifica la respuesta solo si la solicitud fue realizada
            if (status === 200) {
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

export default BtnDeleteAlertArticle
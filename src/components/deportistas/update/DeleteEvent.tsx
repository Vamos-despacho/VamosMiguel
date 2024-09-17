import React from 'react'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'
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
import { deleteAtleta, deleteEventAtleta } from '@/libs/salon/actions';
interface Props {
    eventId: string;
    athleteId: string;
    onClickDelete: (id: string) => void
    msg?: string
}
const DeleteEvent = ({ athleteId, eventId, onClickDelete, msg }: Props) => {

    const handleDelete = async () => {
        try {
            const data = {
                eventId,
                athleteId
            }
            const resp = await deleteEventAtleta(data)
            if (resp?.status === 200) {
                return onClickDelete(eventId);
            }
        } catch (error) {
            console.error('Error inesperado:', error);
        }
    }
    return (
        <div>
            <AlertDialog>
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

export default DeleteEvent

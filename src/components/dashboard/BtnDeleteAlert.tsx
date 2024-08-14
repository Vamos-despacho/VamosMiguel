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
import vamosApi from '@/app/api/vamosApi';
import { TrashIcon } from '@radix-ui/react-icons';
import { AxiosError } from 'axios';
import { RiDeleteBin6Line } from "react-icons/ri";

interface Props {
    id: number;
    link: string
    onClickDelete: (id: number) => void
    msg: string
}
const BtnDeleteAlert = ({ id, link, onClickDelete, msg }: Props) => {

    const handleDelete = async (id: number) => {

        try {

            const resp = await vamosApi.delete(link);

            if (resp.status === 200) return onClickDelete(id)

        } catch (error) {
            if (error instanceof AxiosError) {
                alert(error.response?.data.message)
            }
        }

    }
    return (
        <div><AlertDialog>
            <AlertDialogTrigger className=' border p-0.5 bg-white rounded-sm'>  <RiDeleteBin6Line className="w-5 h-5  text-gray-500 hover:text-red-500" /></AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Eliminar {msg}</AlertDialogTitle>
                    <AlertDialogDescription>
                        ¿Estás seguro de que quieres eliminarlo? No podrás recuperarlo después de eliminarlo.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleDelete(id)}>
                        Eliminar
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
        </div>
    )
}

export default BtnDeleteAlert
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { PdfProyectos } from './PdfProyectosView'


const DialogProyectos = ({ title, link }: { title: string, link: string }) => {
    return (
        <Dialog>
            <DialogTrigger>{title}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        <PdfProyectos />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export default DialogProyectos
"use client"

import { useToast } from "@/components/ui/use-toast"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from '@/components/ui/button';
import { FormEvent } from "react";
import ResendContact from "./server/ResendContact";
import sendEmail from "@/app/_actions";
const ContactForm = () => {

    const { toast } = useToast()
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()


        toast({
            title: "Emeail enviado",
            description: "Friday, February 10, 2023 at 5:57 PM",
        })

        const formData = new FormData(e.currentTarget)
        const nameForm = formData.get('nombre')
        const emailForm = formData.get('correo')
        const messageForm = formData.get('mensaje')
        if (!nameForm) return alert('Por favor ingrese su nombre')
        if (!emailForm) return alert('Por favor ingrese su correo electrónico')
        if (!messageForm) return alert('Por favor ingrese su mensaje')

        const name = String(nameForm);
        const email = String(emailForm);
        const message = String(messageForm);

        sendEmail({ name, email, message })

        toast({
            variant: "default",
            title: "¡Mensaje enviado!",

        })
        e.currentTarget.reset()



    }
    return (
        <Card className='p-2 shadow-md '>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className='mt-3 space-y-1'>
                        <Label htmlFor="nombre">Nombre</Label>
                        <Input name="nombre" id="nombre" type="text" required placeholder="Juan" />
                    </div>
                    <div className='mt-3 space-y-1'>
                        <Label htmlFor="correo">Correo Electrónico</Label>
                        <Input name="correo" id="correo" required type="email" placeholder="juan@gmail.com" />
                    </div>
                    <div className='mt-3 space-y-1'>
                        <Label htmlFor="mensaje">Mensaje</Label>
                        <Textarea name="mensaje" id="mensaje" required style={{ height: 150 }} />
                    </div>
                    <Button className='mt-3' onClick={() => {
                        toast({
                            variant: "destructive",
                            title: "Uh oh! Something went wrong.",
                            description: "There was a problem with your request.",
                        })
                    }}>Enviar</Button>
                </form>

            </CardContent>
        </Card>
    )
}

export default ContactForm
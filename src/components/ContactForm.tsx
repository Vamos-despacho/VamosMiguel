"use client"

import { useToast } from "@/components/ui/use-toast"

import {
    Card,
    CardContent,

} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from '@/components/ui/button';
import { FormEvent } from "react";

import vamosApi from "@/app/api/vamosApi";
const ContactForm = () => {

    const { toast } = useToast()
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()



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

        try {
            e.currentTarget.reset()
            const res = await vamosApi.post('/send', { name, email, message })

            if (res.status === 400) return toast({
                variant: "destructive",
                title: "¡Mensaje no enviado!",
                description: "Hubo un error al enviar el mensaje, por favor intente de nuevo.",
            })
            if (res.status === 200) {
                toast({
                    variant: "default",
                    title: "¡Mensaje enviado!",
                    description: "Gracias por contactarnos, te responderemos lo más pronto posible.",
                })
            }

        } catch (error) {
            console.log({ error })
        }

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
                    <Button arial-label='Enviar' className='mt-3' >Enviar</Button>
                </form>

            </CardContent>
        </Card>
    )
}

export default ContactForm
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
const maxSizeBytes = 5000000; // 5 MB en bytes

const FormParticipacionCiudadana = () => {

    const { toast } = useToast()
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()



        const formData = new FormData(e.currentTarget)
        const nameForm = formData.get('nombre')
        const phoneForm = formData.get('telefono')
        const emailForm = formData.get('correo')
        const titleForm = formData.get('titulo')
        const descriptionForm = formData.get('descripcion')
        const justificationForm = formData.get('justificacion')
        const areaForm = formData.get('area')
        const commentsForm = formData.get('comentarios')
        const fileForm = formData.get('file')
        const consentForm = formData.get('consentimiento')
        if (!nameForm) return alert('Por favor ingrese su nombre')
        if (!emailForm) return alert('Por favor ingrese su correo electrónico')
        if (!descriptionForm) return alert('Por favor ingrese la descripción de la propuesta')
        if (!consentForm) return alert('Por favor acepte los términos y condiciones')

        const name = String(nameForm);
        const email = String(emailForm);
        const description = String(descriptionForm);
        const phone = String(phoneForm);
        const title = String(titleForm);
        const justification = String(justificationForm);
        const area = String(areaForm);
        const comments = String(commentsForm);
        const file = fileForm as File

        formData.append('name', name);
        formData.append('email', email);
        formData.append('description', description);
        formData.append('phone', phone);
        formData.append('title', title);
        formData.append('justification', justification);
        formData.append('area', area);
        formData.append('comments', comments);
        formData.append('file', file);


        if (file.size > maxSizeBytes) {
            return alert('El archivo es muy grande, por favor seleccione un archivo más pequeño.');
        }
        try {
            e.currentTarget.reset()
            const res = await vamosApi.post('/sendparticipation', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

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
        <Card className=' lg:p-3 shadow-md max-w-2xl '>
            <CardContent>
                <form onSubmit={handleSubmit} className="gap-3 flex flex-col ">
                    <div className="mt-3 md:space-y-0 md:flex md:space-x-4">
                        <div className="w-full lg:w-1/2">
                            <Label htmlFor="nombre">Nombre *</Label>
                            <Input name="nombre" id="nombre" type="text" required placeholder="" />
                        </div>
                        <div className=" mt-3 md:mt-0  w-full lg:mt-0 lg:w-1/2">
                            <Label htmlFor="telefono">Teléfono de Contacto</Label>
                            <Input name="telefono" id="telefono" type="tel" placeholder="" />
                        </div>
                    </div>

                    <div className=' space-y-1'>
                        <Label htmlFor="correo">Correo Electrónico *</Label>
                        <Input name="correo" id="correo" required type="email" placeholder="juan@gmail.com" />
                    </div>

                    <div className=' space-y-1'>
                        <Label htmlFor="titulo">Título de la Propuesta</Label>
                        <Input name="titulo" id="titulo" type="text" placeholder="" />
                    </div>
                    <div className=' space-y-1'>
                        <Label htmlFor="descripcion">Descripción de la Propuesta *</Label>
                        <Textarea name="descripcion" id="descripcion" style={{ height: 80 }} />
                    </div>
                    <div className=' space-y-1'>
                        <Label htmlFor="justificacion">Justificación de la Propuesta</Label>
                        <Textarea name="justificacion" id="justificacion" style={{ height: 80 }} />
                    </div>
                    <div className=' space-y-1'>
                        <Label htmlFor="area">Área Afectada</Label>
                        <Input name="area" id="area" type="text" placeholder="" />
                    </div>
                    <div className=' space-y-1'>
                        <Label htmlFor="area">Comentarios Adicionales</Label>
                        <Textarea name="comentarios" id="comentarios" style={{ height: 80 }} />
                    </div>
                    <div className=' space-y-1 pb-2'>
                        <Label htmlFor="adjuntar">Adjuntar Imagen</Label>
                        <Input name="file" id="adjuntar" type="file" accept="image/jpeg,image/png,image/gif" />
                    </div>
                    <div className="flex justify-center py-4 pl-4 items-center gap-3 bg-red-50">
                        <Input className="w-4" type="checkbox" id="consentimiento" name="consentimiento" />
                        <Label htmlFor="consentimiento">
                            Acepto que mis datos sean utilizados únicamente para fines de evaluación de propuestas legislativas.
                        </Label>

                    </div>
                    <Button arial-label='Enviar' className='mt-3'>Enviar</Button>
                </form>

            </CardContent>
        </Card>
    )
}

export default FormParticipacionCiudadana
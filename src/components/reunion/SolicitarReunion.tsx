"use client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { FormEvent, useState } from "react"
import vamosApi from "@/app/api/vamosApi"
import { useToast } from "@/components/ui/use-toast"

const SolicitarReunion = () => {
    const { toast } = useToast()
    const [viewMessage, setViewMessage] = useState(false)
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const nameForm = formData.get('name')
        const phoneForm = formData.get('phone')
        const emailForm = formData.get('email')
        const reasonForm = formData.get('reason')
        const commentsForm = formData.get('comments')
        const formatForm = formData.get('format')
        console.log(nameForm)
        if (!nameForm) return alert('Por favor ingrese su nombre')
        if (!phoneForm) return alert('Por favor ingrese su número de teléfono')
        if (!reasonForm) return alert('Por favor ingrese el motivo de la reunión')
        if (!formatForm) return alert('Por favor seleccione el formato de la reunión')


        const name = String(nameForm);
        const phone = String(phoneForm);
        const email = String(emailForm);
        const reason = String(reasonForm);
        const comments = String(commentsForm);
        const format = String(formatForm);
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('reason', reason);
        formData.append('comments', comments);
        formData.append('format', format);
        console.log(name, email, phone, reason, comments, format)

        try {
            e.currentTarget.reset()
            const res = await vamosApi.post('/sendreunion', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log({ res })
            if (res.status === 400) return toast({
                variant: "destructive",
                title: "¡Mensaje no enviado!",
                description: "Hubo un error al enviar el mensaje, por favor intente de nuevo.",
            })
            if (res.status === 200) {
                setViewMessage(true)
                toast({
                    variant: "default",
                    title: "¡Gracias por enviar tu solicitud!",
                    description: "Estaremos en contacto para coordinar los detalles de la reunión.",
                })
            }

        } catch (error) {
            console.log({ error })
        }
    }
    return (
        <div className="w-full max-w-2xl mx-auto space-y-0  border rounded-md shadow-xl ">
            <form onSubmit={handleSubmit} className="pt-8 px-8">
                <div className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Nombre *</Label>
                            <Input name="name" id="name" placeholder="Ingresa tu nombre" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Teléfono *</Label>
                            <Input name="phone" id="phone" type="tel" placeholder="Ingresa tu número de teléfono" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Correo electrónico</Label>
                        <Input name="email" id="email" type="email" placeholder="Ingresa tu correo" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="reason">Motivo de la reunión *</Label>
                        <Textarea name="reason" id="reason" placeholder="Explica brevemente el motivo" />
                    </div>
                    <div className="space-y-2">
                        <Label>Formato de la reunión *</Label>
                        <div className="flex space-x-4">
                            <div className="flex items-center">
                                <input id="presencial" name="format" type="radio" value="presencial" className="mr-2" />
                                <Label htmlFor="presencial">Presencial</Label>
                            </div>
                            <div className="flex items-center">
                                <input id="en-linea" name="format" type="radio" value="en-linea" className="mr-2" />
                                <Label htmlFor="en-linea">En línea</Label>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="comments">Comentarios Adicionales</Label>
                        <Textarea id="comments" placeholder="Agrega cualquier otra información relevante" />
                    </div>
                </div>
                <div className="flex justify-end pt-6  ">
                    <Button className="w-screen text-base" >Enviar solicitud</Button>

                </div>
            </form>
            <div className="sm:h-11 h-16  ">

                {viewMessage && <span className="text-red-500 text-sm justify-center flex p-3">Gracias por enviar tu solicitud. Estaremos en contacto con usted para coordinar la reunión.</span>}
            </div>




        </div>
    )
}
export default SolicitarReunion

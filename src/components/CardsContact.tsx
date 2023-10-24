import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { EnvelopeClosedIcon, MobileIcon } from '@radix-ui/react-icons';

interface Props {
    nombre: string;
    telefono: string;
    correo: string;
    instagram?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
}
export const CardsContact = ({ correo, nombre, telefono, instagram, facebook, twitter, linkedin }: Props) => {
    return (

        <Card>
            <CardHeader>
                <div className='flex space-x-2 items-center'>

                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <CardTitle className='text-lg'>{nombre}</CardTitle>
                </div>
                {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent>
                <div className='flex space-x-2 items-center'>

                    <EnvelopeClosedIcon className="h-5 w-4 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />

                    <p>{correo}</p>
                </div>
            </CardContent>
            <CardFooter>
                <div className='flex space-x-2 items-center'>

                    <MobileIcon className="h-5 w-4 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />

                    <p>{telefono}</p>
                </div>
            </CardFooter>
        </Card>

    )
}

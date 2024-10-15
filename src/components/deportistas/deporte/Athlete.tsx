import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { MedalIcon, StarIcon } from 'lucide-react';
import React from 'react';
import { IFAtleta } from '@/interface/atletas';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

const Athlete = ({ athlete }: { athlete: IFAtleta }) => {
    const formattedDate = new Date(athlete.birthDate).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" });

    return (
        <div>
            <Card className="relative w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <Dialog>
                    <DialogTrigger className="relative w-full bg-white rounded-lg overflow-hidden">
                        {/* Imagen y detalles del trigger */}
                        <div className="relative">
                            {/* <img
                                src="/images/avatarh.webp"
                                width={320}
                                height={240}
                                alt="Athlete"
                                className="rounded-t-lg object-cover w-full h-48 opacity-20"
                            /> */}
                            {athlete.isHighlighted && (
                                <div className="absolute top-2 right-2 text-yellow-400 bg-blue-600 rounded-full p-2 shadow-lg transition-transform duration-300 ease-in-out hover:scale-110">
                                    <StarIcon className="w-6 h-6" />
                                </div>
                            )}
                        </div>
                        <CardContent className="py-3 px-6 space-y-2">
                            <div className="flex flex-col py-2 items-start">
                                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                                    {athlete.name}
                                </h3>
                                <p className="text-sm ml-1 text-gray-500">
                                    {athlete?.sports.length > 0 ? athlete.sports[0].discipline : 'Disciplina no disponible'}
                                </p>
                            </div>


                            <Separator className="my-2" />

                            {athlete.achievements.length > 0 && (
                                <div className="space-y-3">
                                    <div
                                        key={athlete.achievements[0]._id}
                                        className="flex justify-between items-center border-b pb-2 border-gray-200"
                                    >
                                        <div className='flex flex-col  items-start'>
                                            <div className="flex gap-2">
                                                <span className="text-md font-medium text-gray-800">{athlete.achievements[0].event}</span>
                                                <p className="text-gray-500">{athlete.achievements[0]?.year}</p>
                                            </div>
                                            <div className='flex gap-1'>
                                                <div className="flex gap-1 items-center">
                                                    <p className="text-sm font-semibold text-gray-600">
                                                        {athlete.achievements[0].position === '1' && "Primer Lugar -"}
                                                        {athlete.achievements[0].position === '2' && "Segundo Lugar -"}
                                                        {athlete.achievements[0].position === '3' && "Tercer Lugar -"}
                                                    </p>
                                                </div>
                                                <p className="text-sm text-gray-500">
                                                    {athlete.achievements[0].dicipline}
                                                </p>
                                            </div>
                                        </div>
                                        {athlete.achievements[0].position && (
                                            <MedalIcon className="w-5 h-5 text-gray-500" />
                                        )}
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </DialogTrigger>

                    {/* DialogContent */}
                    <DialogContent className="w-full max-w-lg bg-white rounded-lg shadow-xl p-6">
                        {/* Imagen y detalles del atleta dentro del diálogo */}
                        <div className="relative">
                            <img
                                src="/images/avatarh.webp"
                                width={320}
                                height={240}
                                alt="Athlete"
                                className="rounded-t-lg object-cover w-full h-48 opacity-20"
                            />
                            {athlete.isHighlighted && (
                                <div className="absolute top-2 right-2 text-yellow-400 bg-blue-600 rounded-full p-2 shadow-lg">
                                    <StarIcon className="w-6 h-6" />
                                </div>
                            )}
                        </div>

                        <DialogHeader className="pt-4">
                            <DialogTitle className="text-2xl font-bold text-gray-900">{athlete.name}</DialogTitle>
                        </DialogHeader>

                        <CardContent className="py-3 px-6 space-y-2">
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm font-semibold text-gray-600">
                                        {athlete?.sports.length > 0 ? athlete.sports[0].discipline : 'Disciplina no disponible'}
                                    </p>
                                </div>
                            </div>

                            <Separator className="my-4" />

                            {/* Área de scroll para logros */}
                            <ScrollArea className="h-[300px] rounded-md border p-4 bg-gray-50">
                                {athlete.achievements.length > 0 ? (
                                    athlete.achievements.map((event) => (
                                        <div
                                            key={event._id}
                                            className="flex justify-between items-center border-b pb-2 border-gray-200 mb-2"
                                        >
                                            <div>
                                                <div className="flex gap-2">
                                                    <span className="text-md font-medium text-gray-800">{event.event}</span>
                                                    <p className="text-gray-500">{event?.year}</p>
                                                </div>
                                                {/* <p className="text-sm text-gray-500">
                                                    {event.position ? `${event.position} - ${event.dicipline}` : event.dicipline}
                                                </p> */}

                                                <div className='flex gap-1 ml-1'>
                                                    <div className="flex gap-1 items-center">
                                                        <p className="text-sm font-semibold text-gray-600">
                                                            {event.position === '1' && "Primer Lugar -"}
                                                            {event.position === '2' && "Segundo Lugar -"}
                                                            {event.position === '3' && "Tercer Lugar -"}
                                                        </p>
                                                    </div>
                                                    <p className="text-sm text-gray-500">
                                                        {athlete.achievements[0].dicipline}
                                                    </p>
                                                </div>
                                            </div>
                                            {event.position && (
                                                <MedalIcon className="w-5 h-5 text-yellow-500" />
                                            )}
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500 text-center">No hay logros disponibles.</p>
                                )}
                            </ScrollArea>
                        </CardContent>
                    </DialogContent>
                </Dialog>
            </Card>
        </div>
    );
};

export default Athlete;

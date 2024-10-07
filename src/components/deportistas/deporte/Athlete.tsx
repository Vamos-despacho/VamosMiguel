import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@radix-ui/react-dropdown-menu';
import { MedalIcon, AwardIcon, StarIcon } from 'lucide-react';
import React from 'react';
import { IFAtleta } from '@/interface/atletas';

const Athlete = ({ athlete }: { athlete: IFAtleta }) => {
    return (
        <Card className="relative w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative">
                <img
                    src="/images/avatarh.webp"
                    width={320}
                    height={240}
                    alt="Athlete"
                    className="rounded-t-lg object-cover w-full h-48 opacity-20"
                />
                {athlete.isHighlighted && (
                    <div className="absolute top-2 right-2 text-amarillov bg-azulv   rounded-full p-1 shadow-lg transition-transform duration-300 ease-in-out hover:scale-110">
                        <StarIcon className="w-10 h-10 " />
                    </div>

                )}
            </div>
            <CardContent className="py-3 px-6 space-y-2">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                            {athlete.name}
                        </h3>
                        <p className="text-md text-gray-500">
                            {athlete?.sports.length > 0 ? athlete?.sports[0].discipline : 'Disciplina no disponible'}
                        </p>
                    </div>
                </div>

                <Separator className="my-2" />
                <div className="space-y-4">

                    <div className="space-y-3">
                        {athlete.events.map((event) => (
                            <div
                                key={event._id}
                                className="flex justify-between items-center border-b pb-2 border-gray-200"
                            >
                                <div>
                                    <div className='flex gap-2'>
                                        <span className="text-md font-medium text-gray-800">{event.event.name}</span>
                                        <p className='text-gray-500'>{event.ano}</p>
                                    </div>

                                    <p className="text-sm text-gray-500 flex">
                                        {event.position ? `${event.position} - ${event.dicipline}` : event.dicipline}
                                    </p>

                                </div>
                                {event.position && (
                                    <MedalIcon className="w-5 h-5 text-gray-500" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default Athlete;

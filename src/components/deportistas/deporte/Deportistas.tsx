'use client'
import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { getAtletasEvent, getAtletasFront, obtenerEventos } from '@/libs/salon/actions'
import { IEventDeporte, IFAtleta, IIAtleta } from '@/interface/atletas'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IoSearchSharp } from "react-icons/io5";
import { MdEmojiEvents } from "react-icons/md";
import { TbMan } from "react-icons/tb";
import { TbWoman } from "react-icons/tb";
import AthleteScroll from './ShowButton'
import EventScroll from './ShowButtonEvent'

const Deportistas = () => {
    const [selectedEvent, setSelectedEvent] = useState<IEventDeporte | null>(null)
    const [events, setEvents] = useState<IEventDeporte[]>([])
    const [atleta, setAtleta] = useState<IFAtleta[]>([])
    const getEvent = async () => {
        const resp = await obtenerEventos()
        const events = JSON.parse(resp)
        console.log(events)
        if (events.length > 0) {
            setEvents(events)
        }
    }
    const getAtleta = async () => {
        const resp = await getAtletasFront()
        const atletas = JSON.parse(resp)

        if (atletas.length > 0) {
            setAtleta(atletas)
        }
    }

    const getSelectedEvent = async () => {
        if (selectedEvent) {
            console.log(selectedEvent)

            const resp = await getAtletasEvent(selectedEvent._id)
            if (resp) {
                const atletas = JSON.parse(resp)
                setAtleta(atletas.participants)

            }
        }
    }

    useEffect(() => {
        getEvent()
        getAtleta()

    }, [])

    useEffect(() => {
        getSelectedEvent()
    }, [selectedEvent])

    const handleEvents = () => {
        console.log('eventos')
    }
    const handleSportMan = () => {
        console.log('deportistas')
    }

    return (
        <div className="flex flex-col h-screen  max-w-6xl mt-16 sm:mt-12  bg-gray-100">
            <header className="p-1 bg-white">
                <Tabs defaultValue="eventos" className="w-screen ">
                    <TabsList className="bg-white rounded-none gap-0 items-start sm:justify-start sm:gap-4 flex flex-col sm:flex-row">
                        <TabsTrigger onClick={handleEvents} className="text-xl gap-1 hover:underline hover:text-black shadow-none text-gray-500
                         bg-white rounded-none font-medium data-[state=active]: data-[state=active]:shadow-none" value="eventos">
                            <MdEmojiEvents />
                            Eventos Deportivos
                        </TabsTrigger>
                        <TabsTrigger onClick={handleSportMan} className="text-xl gap-1 hover:underline hover:text-black shadow-none text-gray-600
                         bg-white rounded-none font-medium data-[state=active]: data-[state=active]:shadow-none" value="deportistas">
                            <div className='flex items-center gap-0 space-x-0'>
                                <TbMan className='' style={{ marginRight: '-4px' }} />
                                <TbWoman className='' />
                            </div>
                            Deportistas Panameños
                        </TabsTrigger>
                    </TabsList>

                    {/* <TabsList className=" bg-white  rounded-none ">
                        <TabsTrigger className="text-2xl font-semibold " value="eventos">Eventos Deportivos</TabsTrigger>
                        <TabsTrigger className="text-2xl font-semibold " value="deportistas">Deportistas Panameños</TabsTrigger>
                    </TabsList> */}
                    <TabsContent value="eventos" className='max-w-6xl '>
                        <EventScroll event={events} selectedEvent={selectedEvent} />

                        {/* <div className='flex mt-8 gap-3 mb-2'>

                            <div className='flex  gap-2 bg-white px-3 justify-center items-center  rounded-lg border'>
                                <IoSearchSharp size={24} />
                                <input
                                    type="text"
                                    placeholder="Buscar evento"
                                    className="outline-none focus:ring-0 h-10"
                                />
                            </div>
                            <div>

                                {
                                    (events.length > 0) ? (
                                        <ScrollArea className="w-full whitespace-nowrap">
                                            <div className="flex  items-center gap-2">
                                                {events.map((event) => (
                                                    <Button
                                                        key={event._id}
                                                        variant={selectedEvent?._id === event._id ? "default" : "outline"}
                                                        className="flex-shrink-0"
                                                        onClick={() => setSelectedEvent(event)}
                                                    >
                                                        {event.name}
                                                    </Button>
                                                ))}
                                            </div>
                                            <ScrollBar orientation="horizontal" />
                                        </ScrollArea>
                                    ) : (<div className="text-muted-foreground">Cargando eventos...</div>)
                                }
                            </div>
                        </div> */}
                    </TabsContent>
                    <TabsContent value="deportistas" className='max-w-6xl '>
                        <AthleteScroll atleta={atleta} selectedEvent={selectedEvent} />
                        {/* <div className="flex mt-8 gap-3 mb-2 w-[90%] ">
                            <div className="flex gap-2 bg-white px-3 justify-center items-center rounded-lg border">
                                <IoSearchSharp size={24} />
                                <input
                                    type="text"
                                    placeholder="Buscar deportista"
                                    className="outline-none focus:ring-0 h-10"
                                />
                            </div>

                            <div className="w-[80%]">
                                {atleta.length > 0 ? (
                                    <div className="w-full overflow-x-auto">
                                        <div className="flex items-center gap-2 whitespace-nowrap">
                                            {atleta.map((event) => (
                                                <Button
                                                    key={event._id}
                                                    variant={selectedEvent?._id === event._id ? "default" : "outline"}
                                                    className="flex-shrink-0"
                                                >
                                                    {event.name}
                                                </Button>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-muted-foreground">Cargando deportistas...</div>
                                )}
                            </div>
                        </div> */}

                    </TabsContent>

                </Tabs>

            </header>
            <main className="flex-1 p-6 overflow-auto">
                <h2 className="text-xl font-semibold ">
                    {selectedEvent ? `Atletas en ${selectedEvent.name}` : "Todos los atletas"}
                </h2>
                <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
                    {atleta.map((athlete) => (
                        <div key={athlete._id}
                            className="rounded-lg border bg-background p-6 shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
                            <div className="flex flex-col h-full items-start gap-1">
                                <div className="flex items-center gap-4">
                                    <Avatar>
                                        <AvatarImage src="/placeholder-user.jpg" />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="font-semibold">{athlete.name}</h3>
                                        {athlete.events
                                            .filter((event) => event.event === selectedEvent?._id)
                                            .map((filteredEvent) => (
                                                <div className="flex flex-col" key={filteredEvent._id}>
                                                    <span className="text-sm text-muted-foreground">{filteredEvent.dicipline}</span>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                                <div className="flex-grow"></div>
                                {athlete.events
                                    .filter((event) => event.event === selectedEvent?._id)
                                    .map((filteredEvent) => (
                                        <div key={filteredEvent._id} className="w-full mt-auto">
                                            <span className="block text-sm text-muted-foreground ">
                                                {filteredEvent.position}
                                            </span>
                                        </div>
                                    ))}
                            </div>
                        </div>


                    ))}
                </div>
            </main>
            {selectedEvent && (
                <footer className="p-4 bg-white border-t">
                    <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => setSelectedEvent(null)}
                    >
                        Mostrar todos los atletas
                    </Button>
                </footer>
            )}
        </div>
    )
}

export default Deportistas
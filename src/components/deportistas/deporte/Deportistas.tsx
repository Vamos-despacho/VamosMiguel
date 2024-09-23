'use client'
import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Card, CardContent } from "@/components/ui/card"
import { getAtletasEvent, getAtletasFront, obtenerEventos } from '@/libs/salon/actions'
import { IEventDeporte, IFAtleta, IIAtleta } from '@/interface/atletas'

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"


// Datos de ejemplo
const events = [
    "Maratón", "100m", "Salto de altura", "Lanzamiento de jabalina", "Natación",
    "Salto con pértiga", "Lanzamiento de disco", "400m vallas", "Triatlón", "Ciclismo",
    "Gimnasia", "Boxeo", "Tenis", "Baloncesto", "Voleibol"
]
const athletes = [
    { name: "María García", event: "Maratón" },
    { name: "Juan Pérez", event: "100m" },
    { name: "Ana Rodríguez", event: "Salto de altura" },
    { name: "Carlos López", event: "Lanzamiento de jabalina" },
    { name: "Laura Martínez", event: "Natación" },
    { name: "Pedro Sánchez", event: "Maratón" },
    { name: "Sofia Fernández", event: "100m" },
    { name: "Miguel Torres", event: "Salto con pértiga" },
    { name: "Elena Gómez", event: "Lanzamiento de disco" },
    { name: "David Ruiz", event: "400m vallas" },
    { name: "Isabel Navarro", event: "Triatlón" },
    { name: "Javier Moreno", event: "Ciclismo" },
    { name: "Carmen Vega", event: "Gimnasia" },
    { name: "Roberto Díaz", event: "Boxeo" },
    { name: "Lucía Herrera", event: "Tenis" },
]

const Deportistas = () => {
    const [selectedEvent, setSelectedEvent] = useState<IEventDeporte | null>(null)

    // const filteredAthletes = selectedEvent
    //     ? athletes.filter(athlete => athlete.event === selectedEvent)
    //     : athletes

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


    return (
        <div className="flex flex-col h-screen w-screen max-w-6xl  bg-gray-100">
            <header className="p-4 bg-white shadow-md">
                <h1 className="text-2xl font-bold mb-4">Eventos Deportivos</h1>
                {
                    (events.length > 0) ? (<ScrollArea className="w-full whitespace-nowrap">
                        <div className="flex space-x-2 pb-2">
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
                    </ScrollArea>)
                        : (<div className="text-muted-foreground">Cargando eventos...</div>)
                }
            </header>
            <main className="flex-1 p-6 overflow-auto">
                <h2 className="text-xl font-semibold mb-4">
                    {selectedEvent ? `Atletas en ${selectedEvent.name}` : "Todos los atletas"}
                </h2>
                <div className="grid grid-cols-1 gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">                    {atleta.map((athlete) => (
                    <div className="rounded-lg border bg-background p-6 shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
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
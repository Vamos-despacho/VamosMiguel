'use client'
import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Card, CardContent } from "@/components/ui/card"
import { getAtletasFront, obtenerEventos } from '@/libs/salon/actions'
import { IEventDeporte, IIAtleta } from '@/interface/atletas'


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
    const [selectedEvent, setSelectedEvent] = useState<string | null>(null)

    const filteredAthletes = selectedEvent
        ? athletes.filter(athlete => athlete.event === selectedEvent)
        : athletes

    const [events, setEvents] = useState<IEventDeporte[]>([])
    const [atleta, setAtleta] = useState<IIAtleta[]>()
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

    useEffect(() => {
        getEvent()
        getAtleta()

    }, [])

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
                                    variant={selectedEvent === event._id ? "default" : "outline"}
                                    className="flex-shrink-0"
                                    onClick={() => setSelectedEvent(event._id)}
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
                    {selectedEvent ? `Atletas en ${selectedEvent}` : "Todos los atletas"}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredAthletes.map((athlete) => (
                        <Card key={athlete.name} className="hover:shadow-lg transition-shadow duration-200">
                            <CardContent className="p-4">
                                <h3 className="font-semibold">{athlete.name}</h3>
                                <p className="text-sm text-gray-600">{athlete.event}</p>
                            </CardContent>
                        </Card>
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
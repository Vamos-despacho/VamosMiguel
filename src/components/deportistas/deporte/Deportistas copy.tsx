'use client'
import { useEffect, useRef, useState } from 'react'
import { Button } from "@/components/ui/button"
import { getAtletas, getAtletasEvent, getAtletasId, obtenerEventos, searchGetAtletasFront, searchGetEventosFront } from '@/libs/salon/actions'
import { IEventDeporte, IFAtleta } from '@/interface/atletas'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MdEmojiEvents } from "react-icons/md";
import { TbMan } from "react-icons/tb";
import { TbWoman } from "react-icons/tb";
import AthleteScroll from './AthleteScroll'
import EventScroll from './ShowButtonEvent'
import Athlete from './Athlete';
import { se } from 'date-fns/locale'

const Deportistas = () => {
    const [selectedEvent, setSelectedEvent] = useState<IEventDeporte | null>(null)
    const [idSelected, setIdSelected] = useState('')
    const [events, setEvents] = useState<IEventDeporte[]>([])
    const [atleta, setAtleta] = useState<IFAtleta[]>([])
    const [searchTerm, setSearchTerm] = useState('');
    const [searchTermEvent, setSearchTermEvent] = useState('')

    const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
    const timeoutEventRef = useRef<NodeJS.Timeout | null>(null); // New ref for event search

    const getEvent = async () => {
        const resp = await obtenerEventos()
        const events = JSON.parse(resp)

        if (events.length > 0) {
            setEvents(events)
        }
    }
    const getAtleta = async () => {
        // const resp = await getAtletasFront()
        const resp = await getAtletas()
        const atletas = JSON.parse(resp)
        if (atletas.length > 0) {
            setAtleta(atletas)
        }
    }

    const getSelectedEvent = async () => {
        if (selectedEvent) {

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

    const handleEventSelect = (event: IEventDeporte) => {
        setSelectedEvent(event)
    }
    const handleEvents = () => {
        console.log('eventos')
    }
    const handleSportMan = () => {
        console.log('deportistas')
    }

    const handleGetSportMan = async (id: string) => {
        const Athlete = await getAtletasId(id)
        const atletas = JSON.parse(Athlete)
        if (atletas === null) return
        setAtleta([atletas])
    }

    const handleSearchAthlete = async (term: string) => {
        const resp = await searchGetAtletasFront({ searchTerm: searchTerm })
        const atletas = JSON.parse(resp)
        console.log('atletas - Search', atletas)
        // const filtered = atletas.filter((atleta) => atleta.name.toLowerCase().includes(term.toLowerCase()))
        setAtleta(atletas)
    }

    const handleSearchEvent = async (term: string) => {
        console.log({ term });

        const resp = await searchGetEventosFront({ searchTerm: term }); // Assuming this function exists
        const eventos = JSON.parse(resp);
        console.log('entos')
        console.log(eventos)
        setEvents(eventos); // Set the filtered events
    };


    useEffect(() => {
        if (timeoutIdRef.current) {
            clearTimeout(timeoutIdRef.current);
        }

        timeoutIdRef.current = setTimeout(() => {
            setAtleta([]); // Reiniciar lista de atletas
            ; // Reiniciar la página
            handleSearchAthlete(searchTerm); // Realizar la búsqueda
        }, 500);

        return () => {
            if (timeoutIdRef.current) {
                clearTimeout(timeoutIdRef.current);
            }
        };
    }, [searchTerm]);
    useEffect(() => {
        if (timeoutEventRef.current) {
            clearTimeout(timeoutEventRef.current);
        }

        timeoutEventRef.current = setTimeout(() => {
            setEvents([]); // Reset event list
            handleSearchEvent(searchTermEvent); // Perform the search
        }, 500);

        return () => {
            if (timeoutEventRef.current) {
                clearTimeout(timeoutEventRef.current);
            }
        };
    }, [searchTermEvent]);
    return (
        <div className="flex flex-col h-screen  max-w-6xl mt-16 sm:mt-6  bg-gray-100">
            <header className="p-1 bg-white">
                <Tabs defaultValue="deportistas" className="w-screen ">
                    <TabsList className="bg-white rounded-none gap-0 items-start sm:justify-start sm:gap-4 flex flex-col sm:flex-row">
                        <TabsTrigger onClick={handleSportMan} className="text-xl gap-1 hover:underline hover:text-black shadow-none text-gray-600
                         bg-white rounded-none font-medium data-[state=active]: data-[state=active]:shadow-none" value="deportistas">
                            <div className='flex items-center gap-0 space-x-0'>
                                <TbMan className='' style={{ marginRight: '-4px' }} />
                                <TbWoman className='' />
                            </div>
                            Deportistas Panameños
                        </TabsTrigger>
                        <TabsTrigger onClick={handleEvents} className="text-xl gap-1 hover:underline hover:text-black shadow-none text-gray-500
                         bg-white rounded-none font-medium data-[state=active]: data-[state=active]:shadow-none" value="eventos">
                            <MdEmojiEvents />
                            Eventos Deportivos
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="eventos" className='max-w-6xl '>
                    </TabsContent>
                    <TabsContent value="deportistas" className='max-w-6xl '>
                    </TabsContent>

                </Tabs>

            </header>
            <main className="flex-1 p-6 overflow-auto">
                <h2 className="text-xl font-semibold ">
                    {selectedEvent ? `Atletas en ${selectedEvent.name}` : "Todos los atletas"}
                </h2>
                {
                    selectedEvent === null ? (
                        <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
                            {atleta.map((athlete) => (
                                <Athlete key={athlete._id} athlete={athlete} />
                            ))}
                        </div>
                    ) :
                        (
                            <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-2 lg:grid-cols-4">

                                {atleta.map((athlete) => (
                                    <Athlete key={athlete._id} athlete={athlete} />
                                ))}
                            </div>

                        )
                }

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
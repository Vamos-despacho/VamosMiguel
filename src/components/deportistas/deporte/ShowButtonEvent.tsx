import { useRef, useState } from "react";
import { IoSearchSharp, IoChevronBack, IoChevronForward, IoPersonCircle } from "react-icons/io5";
import { IEventDeporte, IFAtleta } from "@/interface/atletas";
import { IconType } from "react-icons";

interface Props {
    event: IEventDeporte[];
    selectedEvent: any;
}

const EventScroll = ({ event, selectedEvent }: Props) => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [activeAthlete, setActiveAthlete] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredAthletes = event.filter((athlete) =>
        athlete.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    const handleAthleteClick = (athleteId: string) => {
        setActiveAthlete(athleteId);
        // Lógica adicional al seleccionar un atleta
    };

    return (
        <div className="relative flex flex-col mt-8 mb-2 max-w-full ">
            {/* Barra de búsqueda */}
            <div className="flex gap-4 bg-white px-3  items-center rounded-lg border mb-4">
                <IoSearchSharp size={24} />
                <input
                    type="text"
                    placeholder="Buscar deportista"
                    className="outline-none focus:ring-0 h-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Contenedor principal */}
            <div className="relative w-full justify-center items-center flex ">
                {/* Botón de desplazamiento hacia la izquierda */}
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white text-gray-500 hover:text-gray-700"
                >
                    <IoChevronBack size={24} />
                </button>

                {/* Contenedor con scroll horizontal */}
                {filteredAthletes.length > 0 ? (
                    <div
                        className="flex  overflow-x-hidden py-2 mx-1 px-10 space-x-6  w-screen h-9"
                        ref={scrollRef}
                    >
                        {filteredAthletes.map((athlete) => {
                            // const Icon: IconType = athlete.icon || IoPersonCircle; // Asigna un icono apropiado
                            const isActive = activeAthlete === athlete._id;

                            return (
                                <button
                                    key={athlete._id}
                                    onClick={() => handleAthleteClick(athlete._id)}
                                    className={`flex flex-col items-center flex-shrink-0 focus:outline-none ${isActive
                                        ? 'text-neutral-800 border-b-2 border-neutral-800'
                                        : 'text-neutral-500'
                                        }`}
                                >
                                    {/* <Icon className="text-2xl mb-1" /> */}
                                    <span className="text-sm">{athlete.name}</span>
                                </button>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-muted-foreground">No se encontraron deportistas...</div>
                )}

                {/* Botón de desplazamiento hacia la derecha */}
                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white text-gray-500 hover:text-gray-700"
                >
                    <IoChevronForward size={24} />
                </button>
            </div>
        </div>
    );
};

export default EventScroll;

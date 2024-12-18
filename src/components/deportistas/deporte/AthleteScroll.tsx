import { useEffect, useRef, useState } from 'react';
import { IoSearchSharp, IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { IEventDeporte, IFAtleta } from '@/interface/atletas';
import { searchAtletasFront, searchEventFront } from '@/libs/salon/actions';

interface Props {
    selectedEvent: (participants: any) => void;
    searchAthlete: (searchTerm: string) => void;
}

const AthleteScroll = ({ selectedEvent, searchAthlete }: Props) => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [activeAthlete, setActiveAthlete] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [atleta, setAtleta] = useState<IEventDeporte[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
    const handleSearchTerm = (search: string) => {
        searchAthlete(search)
        setSearchTerm(search)

    }
    // Función para obtener atletas
    const getAthlete = async (pageNum: number) => {
        if (loading || !hasMore) return;
        setLoading(true);

        try {
            const response = await searchEventFront({ page: pageNum, limit: 10 });
            const newAtletas = JSON.parse(response); // Asumiendo que searchAtletasFront ya devuelve un objeto, no es necesario JSON.parse


            if (newAtletas.length < 10) {
                setHasMore(false); // No hay más atletas para cargar
            }

            setAtleta((prevAtleta) => [...prevAtleta, ...newAtletas]);
        } catch (error) {
            console.error('Error al obtener atletas:', error);
        } finally {
            setLoading(false);
        }
    };

    // Efecto para manejar el debounce de la búsqueda
    useEffect(() => {
        if (timeoutIdRef.current) {
            clearTimeout(timeoutIdRef.current);
        }

        timeoutIdRef.current = setTimeout(() => {
            setAtleta([]); // Reiniciar lista de atletas
            setHasMore(true); // Reiniciar el estado de paginación
            setPage(1); // Reiniciar la página
            getAthlete(1); // Realizar la búsqueda
        }, 500);

        return () => {
            if (timeoutIdRef.current) {
                clearTimeout(timeoutIdRef.current);
            }
        };
    }, []);

    // Efecto para cargar más atletas al cambiar la página
    useEffect(() => {
        if (page === 1) {
            // Ya se manejó la carga inicial en el efecto anterior
            return;
        }
        getAthlete(page);
    }, [page]);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    const handleAthleteClick = (event: IEventDeporte) => {
        setActiveAthlete(event._id);
        selectedEvent(event.participants);
    };

    return (
        <div className="relative flex flex-col mt-8 mb-2 max-w-full ">
            {/* Barra de búsqueda */}
            <div className="flex gap-4 bg-white px-3 items-center rounded-lg border mb-4">
                <IoSearchSharp size={24} />
                <input
                    type="text"
                    placeholder="Buscar atleta"
                    className="outline-none focus:ring-0 h-10 w-full"
                    value={searchTerm}
                    onChange={(e) => handleSearchTerm(e.target.value)}
                />
            </div>

            {/* Contenedor principal */}
            <div className="relative h-9 w-full justify-center items-center flex ">
                {/* Botón de desplazamiento hacia la izquierda */}
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white text-gray-500 hover:text-gray-700"
                >
                    <IoChevronBack size={24} />
                </button>

                {/* Contenedor con scroll horizontal */}
                {atleta.length > 0 ? (
                    <div
                        className="flex overflow-x-hidden py-2 mx-2 px-10 space-x-6 h-9 w-screen"
                        ref={scrollRef}
                        onScroll={(e) => {
                            const target = e.target as HTMLDivElement;
                            if (
                                target.scrollWidth - target.scrollLeft <=
                                target.clientWidth + 1 // Verifica si ha llegado al final del scroll
                            ) {
                                if (!loading && hasMore) {
                                    setPage((prevPage) => prevPage + 1); // Cargar más atletas
                                }
                            }
                        }}
                    >
                        {atleta.map((event) => {
                            const isActive = activeAthlete === event._id;

                            return (
                                <button
                                    key={event._id}
                                    onClick={() => handleAthleteClick(event)}
                                    className={`fleeventx flex-col items-center flex-shrink-0 focus:outline-none ${isActive
                                        ? 'text-neutral-800 border-b-2 border-neutral-800'
                                        : 'text-neutral-500'
                                        }`}
                                >
                                    <span className="text-sm">{event.name}</span>
                                </button>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-muted-foreground">
                        <div className="flex justify-center items-center">
                            <div className="w-6 h-6 border-4 border-t-transparent border-gray-300 rounded-full animate-spin"></div>
                        </div>
                    </div>
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

export default AthleteScroll;

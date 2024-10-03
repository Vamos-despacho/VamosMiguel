import { useEffect, useRef, useState } from 'react';
import { IoSearchSharp, IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { IFAtleta } from '@/interface/atletas';
import { searchAtletasFront } from '@/libs/salon/actions';

interface Props {
    selectedAthlete: (athleteId: string) => void;
    searchAthlete: (searchTerm: string) => void;
}

const AthleteScroll = ({ selectedAthlete, searchAthlete }: Props) => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [activeAthlete, setActiveAthlete] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [atleta, setAtleta] = useState<IFAtleta[]>([]);
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
            const response = await searchAtletasFront({ page: pageNum, limit: 10 });

            const newAtletas = JSON.parse(response); // Asumiendo que searchAtletasFront ya devuelve un objeto, no es necesario JSON.parse
            if (newAtletas.length < 10) {
                setHasMore(false); // No hay más atletas para cargar
            }
            console.log(newAtletas)
            console.log(newAtletas.length)
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

    const handleAthleteClick = (athleteId: string) => {
        setActiveAthlete(athleteId);
        selectedAthlete(athleteId);
    };

    return (
        <div className="relative flex flex-col mt-8 mb-2 max-w-full ">
            {/* Barra de búsqueda */}
            <div className="flex gap-4 bg-white px-3 items-center rounded-lg border mb-4">
                <IoSearchSharp size={24} />
                <input
                    type="text"
                    placeholder="Buscar deportista"
                    className="outline-none focus:ring-0 h-10"
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
                        {atleta.map((athlete) => {
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
                                    <span className="text-sm">{athlete.name}</span>
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

import { Button } from "@/components/ui/button";
import { IFAtleta } from "@/interface/atletas";
import { useRef } from "react";
import { IoSearchSharp, IoChevronBack, IoChevronForward } from "react-icons/io5"; // Importamos íconos

interface Props {
    atleta: IFAtleta[];
    selectedEvent: any;
}

const AthleteScroll = ({ atleta, selectedEvent }: Props) => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
        isDragging = true;
        startX = (e as React.MouseEvent).pageX || (e as React.TouchEvent).touches[0].pageX;
        if (scrollRef.current) {
            scrollLeft = scrollRef.current.scrollLeft;
        }
    };

    const stopDrag = () => {
        isDragging = false;
    };

    const doDrag = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = (e as React.MouseEvent).pageX || (e as React.TouchEvent).touches[0].pageX;
        const walk = (x - startX) * 2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const scrollLeftClick = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -150, behavior: 'smooth' });
        }
    };

    const scrollRightClick = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 150, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative flex mt-8 gap-5 mb-2 items-center ">
            <div className="flex gap-4 bg-white px-3 justify-center items-center rounded-lg border">
                <IoSearchSharp size={24} />
                <input
                    type="text" placeholder="Buscar deportista" className="outline-none focus:ring-0 h-10"
                />
            </div>
            <div>

                <div className="flex items-center max-w-[100vw] relative px-1">
                    {/* Botón de desplazamiento hacia la izquierda */}
                    <button
                        onClick={scrollLeftClick}
                        className="absolute left-[-9px] top-1/2 transform -translate-y-1/2 z-10 p-1 opacity-50 bg-slate-200 hover:bg-gray-400 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none"
                    >
                        <IoChevronBack size={24} />
                    </button>

                    {/* Contenedor con scroll horizontal */}
                    {atleta.length > 0 ? (
                        <div
                            className="bg-gray-100 overflow-x-hidden py-1.5 px-2.5 rounded-sm"
                            ref={scrollRef}
                            onMouseDown={startDrag}
                            onMouseLeave={stopDrag}
                            onMouseUp={stopDrag}
                            onMouseMove={doDrag}
                            onTouchStart={startDrag}
                            onTouchEnd={stopDrag}
                            onTouchMove={doDrag}
                            style={{ cursor: isDragging ? "grabbing" : "grab" }}
                        >
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

                {/* Botón de desplazamiento hacia la derecha */}
                <button
                    onClick={scrollRightClick}
                    className="absolute right-[-9px] top-1/2 transform -translate-y-1/2 z-10 p-1 opacity-50 bg-slate-200 hover:bg-gray-400 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none"
                >
                    <IoChevronForward size={24} />
                </button>
            </div>
        </div>
    );

};

export default AthleteScroll;

import React, { useEffect, useState } from "react";
import { IEventDetails } from "@/app/api/data/EventDays";
import { ViewYoutube } from "./tabscontent/ViewYoutube";
import { ViewInstagram } from "./tabscontent/ViewInstagram";
import ViewImagen from "./tabscontent/ViewImagen";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const TabsContentEvent = ({ event }: { event?: IEventDetails }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    // Actualiza los slides cuando cambie el evento
    const updatedSlides = [
      event?.idsYoutube ? <ViewYoutube idsYoutube={event.idsYoutube} /> : null,
      event?.linkInstagram ? <ViewInstagram linkInstagram={event.linkInstagram} /> : null,
      event?.eventoImagen ? <ViewImagen eventoImagen={event.eventoImagen} /> : null,
    ].filter(Boolean);

    setSlides(updatedSlides);
    // Resetear el slide actual al primer slide si hay datos
    setCurrentSlide(0);
  }, [event]);

  const slideCount = slides.length;

  const goToPrevious = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slideCount - 1 : prevSlide - 1
    );
  };

  const goToNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slideCount - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="relative">
      {/* Contenedor para los botones de navegación */}
      <div className="absolute top-[-45px] left-1/2 transform -translate-x-1/2 flex justify-between w-full px-4 z-20">
        {slideCount > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="bg-gray-100 p-2 rounded-full opacity-90 hover:opacity-100 transition-opacity duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={goToNext}
              className="bg-gray-100 p-2 rounded-full opacity-90 hover:opacity-100 transition-opacity duration-300"
              aria-label="Next slide"
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-600" />
            </button>
          </>
        )}
      </div>

      {/* Contenedor del slider */}
      <div className="overflow-hidden relative mt-8">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.length > 0 ? (
            slides.map((slide, index) => (
              <div key={index} className="min-w-full">
                {slide}
              </div>
            ))
          ) : (
            <div className="min-w-full text-center">No hay datos disponibles.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabsContentEvent;

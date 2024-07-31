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
      <div className="overflow-hidden relative">
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

        {slideCount > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 opacity-50 hover:opacity-70 z-10 bg-gray-100 p-2 rounded-full "
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 opacity-50 hover:opacity-70 bg-gray-100 p-2 rounded-full "
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TabsContentEvent;

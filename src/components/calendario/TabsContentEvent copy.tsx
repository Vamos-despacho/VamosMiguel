import React, { useState } from 'react';
import { IEventDetails } from '@/app/api/data/EventDays';
import { ViewYoutube } from './tabscontent/ViewYoutube';
import { ViewInstagram } from './tabscontent/ViewInstagram';
import { Button } from '../ui/button';

export const TabsContentEvent = ({ event }: { event?: IEventDetails }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Excluimos el primer elemento, que es el nombre del evento
  const eventFields = Object.keys(event || {}).filter(
    key => key !== 'evento' && event?.[key as keyof IEventDetails]
  );

  const renderComponent = (field: string) => {
    switch (field) {
      case 'idsYoutube':
        return <ViewYoutube idsYoutube={event?.idsYoutube} />;
      case 'linkInstagram':
        return <ViewInstagram linkInstagram={event?.linkInstagram} />;
      // Agrega más casos según los componentes que tengas para cada campo
      default:
        return null;
    }
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? eventFields.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === eventFields.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="flex items-center space-x-2 mb-4 w-full justify-between px-2">
        <Button variant='secondary' onClick={handlePrev}>&lt;</Button>
        <div className="flex space-x-4">
          {eventFields.map((_, idx) => (
            <span
              key={idx}
              className={`w-2 h-2 rounded-full ${idx === activeIndex ? 'bg-blue-500 text-white' : 'bg-gray-400'}`}
            ></span>
          ))}
        </div>
        <Button variant='secondary' onClick={handleNext}>&gt;</Button>
      </div>
      <div className='flex  flex-1 justify-center   '>
        {eventFields.length > 0 && renderComponent(eventFields[activeIndex])}
      </div>
    </div>
  );
};

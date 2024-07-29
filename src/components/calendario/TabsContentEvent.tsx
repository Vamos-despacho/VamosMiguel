'use client';

import Slider, { CustomArrowProps, Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IEventDetails } from "@/app/api/data/EventDays";
import { ViewYoutube } from "./tabscontent/ViewYoutube";
import { ViewInstagram } from "./tabscontent/ViewInstagram";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useRef, useState } from "react";

const NextArrow = (props: CustomArrowProps) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      style={{ display: "block", position: "absolute", top: "-35px", right: "45px", zIndex: 1 }}
      className="text-gray-600 hover:text-gray-800"
    >
      <ChevronRightIcon className="w-6 h-6" />
    </button>
  );
};

const PrevArrow = (props: CustomArrowProps) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      style={{ display: "block", position: "absolute", top: "-35px", left: "45px", zIndex: 1 }}
      className="text-gray-600 hover:text-gray-800"
    >
      <ChevronLeftIcon className="w-6 h-6" />
    </button>
  );
};
const ArrowButton = ({ direction, onClick }: { direction: "next" | "prev", onClick: () => void }) => {
  const isNext = direction === "next";
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 ${isNext ? "right-4" : "left-4"} transform -translate-y-1/2 z-10 text-gray-600 hover:text-gray-800`}
    >
      {isNext ? <ChevronRightIcon className="w-6 h-6" /> : <ChevronLeftIcon className="w-6 h-6" />}
    </button>
  );
};

const TabsContentEvent = ({ event }: { event?: IEventDetails }) => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleAfterChange = (index: number) => {
    setCurrentSlide(index);
  };

  // Contar las propiedades directamente en el objeto `event`
  const numberOfItems = Object.keys(event || {}).length;
  const hasMultipleItems = numberOfItems > 1;

  const settings: Settings = {
    dots: hasMultipleItems,
    infinite: hasMultipleItems,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: hasMultipleItems ? <NextArrow onClick={() => sliderRef.current?.slickNext()} /> : undefined,
    prevArrow: hasMultipleItems ? <PrevArrow onClick={() => sliderRef.current?.slickPrev()} /> : undefined,
    appendDots: (dots: React.ReactNode) => (
      <div style={{ position: "absolute", top: "-25px", width: "100%", display: "flex", justifyContent: "center" }}>
        <ul style={{ display: "flex", justifyContent: "center", listStyle: "none", padding: 0 }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        className="w-3 h-3 rounded-full"
        style={{
          backgroundColor: i === currentSlide ? "blue" : "gray",
        }}
      />
    ),
    afterChange: handleAfterChange,
  };

  return (
    <div className="relative">
      <Slider
        {...settings}>
        {event?.idsYoutube && (
          <div className="mt-3">
            <ViewYoutube idsYoutube={event.idsYoutube} />
          </div>
        )}
        {event?.linkInstagram && (
          <div className="mt-3">
            <ViewInstagram linkInstagram={event.linkInstagram} />
          </div>
        )}
      </Slider>
    </div>
  );
};

export default TabsContentEvent;

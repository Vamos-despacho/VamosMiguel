"use client";
import React, { useRef, useState, useCallback, useMemo } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { IconChevronLeft } from "./Icon/IconChevronLeft";
import { IconChevronRight } from "./Icon/IconChevronRight";
import { imgs } from "@/app/api/data/InformeGestion";

type PropsButton = {
  onClick: () => void;
  direction: "left" | "right";
};

const ScrollButton: React.FC<PropsButton> = ({ onClick, direction }) => (
  <button
    className="flex p-0 m-0 w-14 h-14 bg-white rounded-full opacity-60 hover:opacity-90 justify-center items-center transition-transform duration-300 transform hover:scale-110"
    onClick={onClick}
  >
    {direction === "left" ? <IconChevronLeft /> : <IconChevronRight />}
  </button>
);

type ImageItem = {
  id: number;
  title: string;
  description: string;
  img: string;
};

type CarouselItemProps = {
  item: ImageItem;
  index: number;
  onClick: (index: number) => void;
};

const CarouselItem: React.FC<CarouselItemProps> = React.memo(
  ({ item, index, onClick }) => (
    <div
      className="cursor-pointer flex-shrink-0 w-40 h-40 overflow-hidden rounded-lg"
      onClick={() => onClick(index)}
    >
      <img
        src={item.img}
        alt={item.title}
        className="object-cover w-full h-full"
      />
    </div>
  )
);
CarouselItem.displayName = "CarouselItem";

type ImageDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  imgs: ImageItem[];
  handleImageChange: (direction: "left" | "right") => void;
};

const ImageDialog: React.FC<ImageDialogProps> = ({
  isOpen,
  onClose,
  currentIndex,
  imgs,
  handleImageChange,
}) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="flex flex-col lg:max-h-[95vh] md:max-w-2xl lg:max-w-4xl m-auto justify-center items-center p-4 gap-y-4">
      <button
        onClick={() => handleImageChange("left")}
        className="absolute left-0 p-2 z-10"
      >
        <IconChevronLeft className="bg-white opacity-80 rounded-full" />
      </button>

      <div className="relative flex flex-col justify-center items-center">
        <img
          src={imgs[currentIndex].img}
          alt={imgs[currentIndex].title}
          className="h-full w-full lg:max-h-[60vh] object-contain rounded-lg mb-4"
        />

        <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
          {imgs[currentIndex].title}
        </h2>

        <p className="text-sm text-gray-600 text-center px-4">
          {imgs[currentIndex].description}
        </p>
      </div>

      <button
        onClick={() => handleImageChange("right")}
        className="absolute right-0 p-2"
      >
        <IconChevronRight className="bg-white opacity-80 rounded-full" />
      </button>
    </DialogContent>
  </Dialog>
);

const SliderImage: React.FC = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDragging || !divRef.current) return;
      const x = e.pageX - divRef.current.offsetLeft;
      const walk = x - startX;
      divRef.current.scrollLeft = scrollStart - walk;
    },
    [isDragging, startX, scrollStart]
  );

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (divRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - divRef.current.offsetLeft);
      setScrollStart(divRef.current.scrollLeft);
    }
  }, []);

  const handleMouseUpOrLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const scrollHandler = useCallback((direction: "left" | "right") => {
    if (divRef.current) {
      const container = divRef.current;
      const scrollAmount = container.clientWidth; // Ancho del contenedor visible
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (direction === "left") {
        const newScrollLeft = Math.max(0, container.scrollLeft - scrollAmount);
        container.scrollTo({ left: newScrollLeft, behavior: "smooth" });
      } else {
        const newScrollLeft = Math.min(
          maxScrollLeft,
          container.scrollLeft + scrollAmount
        );
        container.scrollTo({ left: newScrollLeft, behavior: "smooth" });
      }
    }
  }, []);

  const handleImageChange = useCallback((direction: "left" | "right") => {
    setCurrentIndex((prevIndex) => {
      if (direction === "left") {
        return prevIndex > 0 ? prevIndex - 1 : imgs.length - 1;
      } else {
        return prevIndex < imgs.length - 1 ? prevIndex + 1 : 0;
      }
    });
  }, []);

  const openDialog = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsDialogOpen(true);
  }, []);

  const closeDialog = useCallback(() => {
    setIsDialogOpen(false);
  }, []);

  const renderedImages = useMemo(
    () =>
      imgs.map((item, index) => (
        <CarouselItem
          key={item.id}
          item={item}
          index={index}
          onClick={openDialog}
        />
      )),
    [openDialog]
  );

  return (
    <div className="flex flex-col mt-3 py-8">
      <div className="flex relative h-auto justify-center items-center">
        <div className="w-8 absolute left-1">
          <ScrollButton
            onClick={() => scrollHandler("left")}
            direction="left"
          />
        </div>

        <div
          className="w-full overflow-x-hidden flex space-x-4"
          ref={divRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onMouseMove={handleMouseMove}
        >
          {renderedImages}
        </div>

        <div className="w-8 absolute right-7">
          <ScrollButton
            onClick={() => scrollHandler("right")}
            direction="right"
          />
        </div>

        <ImageDialog
          isOpen={isDialogOpen}
          onClose={closeDialog}
          currentIndex={currentIndex}
          imgs={imgs}
          handleImageChange={handleImageChange}
        />
      </div>
    </div>
  );
};

export default SliderImage;

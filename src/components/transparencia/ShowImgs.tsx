"use client"
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import React, { useState } from 'react';

type ImageSliderProps = {
    images: string[];
};

const ImageSlider = ({ images }: ImageSliderProps) => {
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = images.length;

    const nextPage = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="lg:w-[60%]  mb-5">
                <img className="w-full h-full object-cover shadow-lg" src={`/images/compromiso/${images[currentPage]}`} alt={`Image ${currentPage + 1}`} />
            </div>
            <div className="flex items-center mt-6">
                <button className="bg-gray-200 p-2 rounded-md" onClick={prevPage}>
                    <ArrowLeftIcon className="w-4 h-4" />
                </button>
                <span className="mx-4">{currentPage + 1} de {totalPages}</span>
                <button className="bg-gray-200 p-2 rounded-md" onClick={nextPage}>
                    <ArrowRightIcon className="w-4 h-4" />
                </button>
            </div>
        </div>

    );
};

export default ImageSlider;

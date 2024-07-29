'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

// Importar dinámicamente los componentes
const VideosTop = dynamic(() => import('./VideosTop'), { ssr: false });
const ImagenTop = dynamic(() => import('./ImagenTop'), { ssr: false });

const components = [
    { name: 'VideosTop', component: VideosTop },
    { name: 'ImagenTop', component: ImagenTop },
];

const SliderTop = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePointClick = (index: number) => {
        setCurrentIndex(index);
    };

    const Component = components[currentIndex].component;

    return (
        <div className="flex flex-col items-center justify-center h-auto relative">
            <div className="relative  bg-rose-700 flex-1 mx-4 py-8">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.2 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    <Component />
                </motion.div>
            </div>
            <div className="flex items-center justify-center lg:mt-4 space-x-2">
                {components.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePointClick(index)}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>
            <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-800 p-3 rounded-full shadow-lg transition-colors hidden md:flex"
                onClick={() => handlePointClick((currentIndex - 1 + components.length) % components.length)}
            >
                <ChevronLeftIcon className="w-6 h-6 text-white" />
            </button>
            <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-800 p-3 rounded-full shadow-lg transition-colors hidden md:flex"
                onClick={() => handlePointClick((currentIndex + 1) % components.length)}
            >
                <ChevronRightIcon className="w-6 h-6 text-white" />
            </button>
        </div>
    );
};

export default SliderTop;

import React, { useEffect, useState } from 'react';
import { PostInstagram } from '../PostInstagram';

export const ViewInstagram = ({ linkInstagram }: { linkInstagram?: string[] }) => {
    const [currentInstagramIndex, setCurrentInstagramIndex] = useState(0);

    useEffect(() => {
        if (linkInstagram && linkInstagram.length > 0) {
            console.log('Current Instagram link:', linkInstagram[currentInstagramIndex]);
        }
    }, [currentInstagramIndex, linkInstagram]);

    const handleInstagramChange = (index: number) => {
        setCurrentInstagramIndex(index);
    };

    if (!linkInstagram || linkInstagram.length === 0) {
        return null;
    }

    const showNavigationNumbers = linkInstagram.length > 1;

    return (
        <div className='relative flex flex-col lg:justify-center lg:items-center'>
            <div className='lg:w-[450px] p-4 lg:p-0'>
                {/* Renderiza el componente PostInstagram con el enlace actual */}
                <PostInstagram link={linkInstagram[currentInstagramIndex]} key={currentInstagramIndex} />
            </div>
            {showNavigationNumbers && (
                <div className="flex-col absolute top-0 right-0 mt-2  flex gap-2">
                    {linkInstagram.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleInstagramChange(index)}
                            className={`w-8 h-8 flex items-center justify-center rounded-full ${index === currentInstagramIndex ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

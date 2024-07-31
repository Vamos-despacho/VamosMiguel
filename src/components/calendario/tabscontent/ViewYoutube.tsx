import { Button } from '@/components/ui/button';
import React, { useCallback, useEffect, useState } from 'react';
import { YoutubeEventsIframe } from '../YoutubeEvents';
import { Providers } from '../../../app/Providers';
import { se } from 'date-fns/locale';

export const ViewYoutube = ({ idsYoutube }: { idsYoutube?: string[] }) => {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    useEffect(() => {
        // Si hay videos y no se ha seleccionado ninguno, selecciona el primero
        if (idsYoutube && idsYoutube.length > 0 && selectedVideo === null) {
            setSelectedVideo(idsYoutube[0]);
        }
    }, [idsYoutube, selectedVideo]);

    useEffect(() => {
        // Actualiza el video seleccionado si `idsYoutube` cambia y `selectedVideo` no está en la nueva lista
        if (idsYoutube && !idsYoutube.includes(selectedVideo ?? '')) {
            setSelectedVideo(idsYoutube[0] ?? null);
        }
    }, [idsYoutube, selectedVideo]);

    const handleVideoSelect = useCallback((id: string) => {
        setSelectedVideo(id);
    }, []);

    // Usa el componente seleccionado o un mensaje si no hay ninguno
    const renderVideoContent = () => {
        if (selectedVideo) {
            return <YoutubeEventsIframe id={selectedVideo} />;
        } else {
            return <div>No video selected</div>;
        }
    };

    return (
        <div className='flex flex-col lg:justify-center lg:items-center'>
            {idsYoutube && idsYoutube.length > 0 && (
                <div className='lg:w-[450px] p-4 lg:p-0'>
                    {renderVideoContent()}
                    <div className="flex space-x-2 mt-1 justify-center">
                        {idsYoutube.map((id, idx) => (
                            <Button
                                variant={'outline'}
                                className={`shadow-sm h-7 w-3 ${id === selectedVideo ? 'text-blue-500 ' : 'text-gray-400'}`}
                                key={id}
                                onClick={() => handleVideoSelect(id)}
                            >
                                {idx + 1}
                            </Button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

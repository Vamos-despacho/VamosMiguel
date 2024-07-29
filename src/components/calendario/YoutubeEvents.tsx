import { memo, useEffect, useRef } from 'react';

// Define el componente funcional
const YoutubeEventsIframeComponent = ({ id }: { id?: string }) => {
    const videoRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.src = `https://www.youtube.com/embed/${id}?autoplay=0`;
        }
    }, [id]);

    console.log(id);
    return (
        <div className="flex-1 bg-background rounded-lg overflow-hidden">
            <div className="aspect-video">
                <div className="w-full h-full bg-black">
                    <iframe
                        ref={videoRef}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allowFullScreen
                        title="YouTube video player"
                    />
                </div>
            </div>
        </div>
    );
};

// Envuelve el componente en `memo` y asigna `displayName`
export const YoutubeEventsIframe = memo(YoutubeEventsIframeComponent);
YoutubeEventsIframe.displayName = 'YoutubeEventsIframe';

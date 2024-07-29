'use client';

import YouTube from 'react-youtube';
import React, { useState, useEffect } from 'react';

interface VideoSectionProps {
    id: string;
    onReady: (event: any) => void;
}

const VideoSection: React.FC<VideoSectionProps> = ({ id, onReady }) => {
    const [isReady, setIsReady] = useState(false);

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 0 as 1,
        },
    };

    const handleReady = (event: any) => {
        setIsReady(true);
        onReady(event);
    };

    return (
        <div className="flex-1 bg-background rounded-lg overflow-hidden">
            <div className="aspect-video relative">
                <div
                    className={`absolute inset-0 transition-opacity duration-500 ${isReady ? 'opacity-100' : 'opacity-0'}`}
                >
                    <YouTube
                        videoId={id}
                        opts={opts}
                        onReady={handleReady}
                        className="w-full h-full bg-black"
                    />
                </div>
            </div>
        </div>
    );
};

export default VideoSection;

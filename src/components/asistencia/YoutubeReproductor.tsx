
'use client';

import YouTube from 'react-youtube';

const YoutubeReproductor = ({ id }: { id: string }) => {
    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 0 as 0 | 1,
        },
    };


    return (
        <div className="flex-1 bg-background rounded-lg overflow-hidden">
            <div className="aspect-video">
                <div className="w-full h-full ">
                    <YouTube videoId={id} opts={opts} className="w-full h-full" />

                </div>

            </div>
        </div>
    );
};

export default YoutubeReproductor;

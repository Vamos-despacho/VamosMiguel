import { ForwardedRef, forwardRef, useImperativeHandle, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import VideoSection from "../pleno/PlayVideo";
import { videosYotube } from '@/app/api/data/videos';
import { FastForwardIcon, PauseIcon, PlayIcon, RewindIcon } from "lucide-react";
import { format } from "date-fns";
import { es } from 'date-fns/locale';

interface VideosTopHandles {
    handlePause: () => void;
}

const VideosTop = forwardRef<VideosTopHandles>((props, ref: ForwardedRef<VideosTopHandles>) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showId, setShowId] = useState<string>('GSVn1AppIr0');
    const [showDate, setShowDate] = useState<Date>(new Date(2024, 7, 6));
    // const [showId, setShowId] = useState<string>(videosYotube[0].id);
    // const [showDate, setShowDate] = useState<Date>(videosYotube[0].date);
    const playerRef = useRef<any>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const onReady = (event: any) => {
        playerRef.current = event.target;
    };

    const handlePlay = () => {
        setIsPlaying(true);
        if (playerRef.current) {
            playerRef.current.playVideo();
        }
    };

    const handlePause = () => {
        setIsPlaying(false);
        if (playerRef.current) {
            playerRef.current.pauseVideo();
        }
    };

    const handlePrevious = () => {
        const newIndex = (currentIndex - 1 + videosYotube.length) % videosYotube.length;
        setCurrentIndex(newIndex);
        setShowId(videosYotube[newIndex].id);
        setShowDate(videosYotube[newIndex].date);
    };

    const handleNext = () => {
        const newIndex = (currentIndex + 1) % videosYotube.length;
        setCurrentIndex(newIndex);
        setShowId(videosYotube[newIndex].id);
        setShowDate(videosYotube[newIndex].date);
    };

    useImperativeHandle(ref, () => ({
        handlePause
    }));

    return (


        <div className="flex flex-col lg:flex-row  max-w-6xl w-auto mx-auto h-[600px] sm:h-[500px] items-center justify-center  ">

            {/* <div className="flex overflow-hidden h-auto rounded-lg w-[700px] mx-auto md:mx-0"> */}
            <div className=" p-2  max-w-6xl w-full md:w-[700px] items-center justify-center ">
                <VideoSection id={showId} onReady={onReady} />
            </div>
            <div className="flex flex-col items-center justify-center gap-6  bg-background lg:ml-6 bg-white bg-opacity-90 p-5 rounded-md shadow-lg">
                <div className="flex flex-col items-center gap-3 pt-4">
                    <h2 className="text-3xl font-bold">Actividad legislativa</h2>
                    <p className="text-muted-foreground text-lg">{format(showDate, 'PPPP', { locale: es })}</p>
                </div>
                <div className="flex items-center gap-6 mt-2 ">
                    <Button onClick={handlePrevious} variant="ghost" size="icon" className="w-12 h-12 hover:bg-muted">
                        <RewindIcon className="w-6 h-6 text-foreground" />
                    </Button>
                    <Button onClick={handlePlay} variant="ghost" size="icon" className={`${isPlaying ? 'bg-muted' : ''} w-12 h-12 hover:bg-muted`}>
                        <PlayIcon className="w-6 h-6 text-foreground" />
                    </Button>
                    <Button onClick={handlePause} variant="ghost" size="icon" className={`${!isPlaying ? 'bg-muted' : ''} w-12 h-12 hover:bg-muted`}>
                        <PauseIcon className="w-6 h-6 text-foreground" />
                    </Button>
                    <Button onClick={handleNext} variant="ghost" size="icon" className="w-12 h-12 hover:bg-muted">
                        <FastForwardIcon className="w-6 h-6 text-foreground" />
                    </Button>
                </div>
            </div>
        </div>
    );
});

// Asigna un displayName al componente
VideosTop.displayName = 'VideosTop';

export default VideosTop;

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { videosYotube } from '@/app/api/data/videos';
import { useState, useEffect } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export const PlayListYoutube = ({ showId, setShowId, onPlay, onPause }: { showId: string, setShowId: (id: string) => void, onPlay: () => void; onPause: () => void }) => {
    const [selectList, setSelectList] = useState('incidencia');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [playStop, setPlayStop] = useState('pausa');

    const videoList = videosYotube.filter(video => video.list === selectList);
    const [currentVideo, setCurrentVideo] = useState(videoList[currentIndex]);

    useEffect(() => {
        const newCurrentVideo = videosYotube.find(video => video.id === showId);
        setCurrentVideo(newCurrentVideo || videoList[0]);
        setCurrentIndex(videoList.findIndex(video => video.id === newCurrentVideo?.id));
    }, [selectList, showId, videoList]);

    const handleClick = (id: string, index: number) => {
        setShowId(id);
        setCurrentIndex(index);
        setPlayStop('play');
        const selectedVideo = videoList[index];
        setCurrentVideo(selectedVideo);
    };

    const handlePlay = () => {
        setPlayStop('play');
        onPlay();
    };

    const handlePause = () => {
        setPlayStop('pausa');
        onPause();
    };

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % videoList.length;
        handleClick(videoList[nextIndex].id, nextIndex);
    };

    const handlePrevious = () => {
        const prevIndex = (currentIndex - 1 + videoList.length) % videoList.length;
        handleClick(videoList[prevIndex].id, prevIndex);
    };

    return (
        <div className="flex flex-col items-center justify-center gap-2 bg-background">
            <div className="flex flex-col items-center gap-2">
                <h2 className="text-2xl font-bold text-center">{currentVideo?.title || 'No video available'}</h2>
                <p className="text-muted-foreground text-lg">{format(currentVideo.date, 'PPPP', { locale: es })}</p>
            </div>
            <div className="flex items-center gap-6 mt-2">
                <Button onClick={handlePrevious} variant="ghost" size="icon" className="w-12 h-12 hover:bg-muted">
                    <RewindIcon className="w-6 h-6 text-foreground" />
                </Button>
                <Button onClick={handlePlay} variant="ghost" size="icon" className={`${playStop === 'play' ? 'bg-muted' : ''} w-12 h-12 hover:bg-muted`}>
                    <PlayIcon className="w-6 h-6 text-foreground" />
                </Button>
                <Button onClick={handlePause} variant="ghost" size="icon" className={`${playStop === 'pausa' ? 'bg-muted' : ''} w-12 h-12 hover:bg-muted`}>
                    <PauseIcon className="w-6 h-6 text-foreground" />
                </Button>
                <Button onClick={handleNext} variant="ghost" size="icon" className="w-12 h-12 hover:bg-muted">
                    <FastForwardIcon className="w-6 h-6 text-foreground" />
                </Button>
            </div>
            <div className="flex items-center gap-6 mt-4">
                <Button onClick={() => setSelectList('incidencia')} variant="outline" className={`px-2 py-2 rounded-md hover:bg-muted shadow-md ${selectList === 'incidencia' ? 'bg-muted ' : ''}`}>
                    Incidencias
                </Button>
                <Button onClick={() => setSelectList('presentacion')} variant="outline" className={`px-2 py-2 rounded-md hover:bg-muted shadow-md ${selectList === 'presentacion' ? 'bg-muted ' : ''}`}>
                    Anteproyectos
                </Button>
            </div>
            <div className="mt-3">
                <Card className="border-0 shadow-none">
                    <CardContent className="grid gap-4 justify-center w-screen">
                        <ScrollArea className="h-80 w-auto pr-3">
                            <div className="divide-y grid">
                                {videoList.map((video, index) => (
                                    <div key={video.id} className={`flex items-center p-3 gap-4 ${video.id === showId ? 'bg-muted' : ''}`}>
                                        <img
                                            src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                                            width={70}
                                            height={70}
                                            alt="Thumbnail"
                                            className="rounded-md object-cover w-24 h-16"
                                        />
                                        <div className="lg:w-44">
                                            <h4 className="text-sm font-medium m-auto p-auto">{video.title}</h4>
                                            <p className="text-sm text-muted-foreground">{format(video.date, 'PPPP', { locale: es })}</p>
                                        </div>
                                        <Button variant="ghost" size="icon"
                                            className={`text-muted-foreground hover:bg-muted ${video.id === showId ? 'bg-white shadow-sm border' : 'shadow-md'}`}
                                            onClick={() => handleClick(video.id, index)}>
                                            <PlayIcon className="w-5 h-5" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

function FastForwardIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="13 19 22 12 13 5 13 19" />
            <polygon points="2 19 11 12 2 5 2 19" />
        </svg>
    );
}

function RewindIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="11 19 2 12 11 5 11 19" />
            <polygon points="22 19 13 12 22 5 22 19" />
        </svg>
    );
}

function PauseIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="14" y="4" width="4" height="16" rx="1" />
            <rect x="6" y="4" width="4" height="16" rx="1" />
        </svg>
    );
}

function PlayIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="6 3 20 12 6 21 6 3" />
        </svg>
    );
}

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useMemo } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { FastForwardIcon, PauseIcon, PlayIcon, RewindIcon } from "lucide-react";

interface IVideo {
  date: Date;
  idsYoutube: string[];
}

export const PlayListYoutube = ({
  setShowId,
  onPlay,
  onPause,
  videosPleno,
}: {
  videosPleno: IVideo[] | undefined;
  setShowId: (id: string) => void;
  onPlay: () => void;
  onPause: () => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Crear una lista aplanada de videos
  const flattenedVideos = useMemo(() => {
    if (!videosPleno) return [];
    return videosPleno.flatMap((video) =>
      video.idsYoutube.map((idYoutube) => ({
        idYoutube,
        date: video.date,
      }))
    );
  }, [videosPleno]);

  // Establecer el video actual
  const currentVideo = useMemo(() => {
    return flattenedVideos[currentIndex];
  }, [flattenedVideos, currentIndex]);

  useEffect(() => {
    if (flattenedVideos.length > 0) {
      const firstVideo = flattenedVideos[0];
      setShowId(firstVideo.idYoutube);
      setCurrentIndex(0);
      setIsPlaying(false); // Iniciar en pausa
    }
  }, [flattenedVideos, setShowId]);

  const handleClick = (id: string) => {
    setIsPlaying(false); // Reproducir el video seleccionado
    // Encontrar el índice del video con el id proporcionado
    const index = flattenedVideos.findIndex((video) => video.idYoutube === id);

    if (index !== -1) {
      setShowId(id);
      setCurrentIndex(index);
      // onPlay(); // Llamamos a onPlay para iniciar la reproducción
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
    onPlay();
  };

  const handlePause = () => {
    setIsPlaying(false);
    onPause();
  };

  const handleNext = () => {
    setIsPlaying(false); // Reproducir el video seleccionado

    if (flattenedVideos.length > 0) {
      const nextIndex = (currentIndex + 1) % flattenedVideos.length;
      const nextVideo = flattenedVideos[nextIndex];
      setShowId(nextVideo.idYoutube);
      setCurrentIndex(nextIndex);
      // setIsPlaying(true); // Reproducir el siguiente video
      // onPlay();
    }
  };

  const handlePrevious = () => {
    setIsPlaying(false); // Reproducir el video seleccionado

    if (flattenedVideos.length > 0) {
      const prevIndex =
        (currentIndex - 1 + flattenedVideos.length) % flattenedVideos.length;
      const prevVideo = flattenedVideos[prevIndex];
      setShowId(prevVideo.idYoutube);
      setCurrentIndex(prevIndex);
      // setIsPlaying(true); // Reproducir el video anterior
      // onPlay();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 ">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-2xl font-bold text-center">
          {currentVideo
            ? `${format(new Date(currentVideo.date), "PPPP", {
                locale: es,
              })}`
            : "Cargando..."}
        </h2>
      </div>
      <div className="flex items-center gap-6 mt-2">
        <Button
          onClick={handlePrevious}
          variant="ghost"
          size="icon"
          className="w-12 h-12 hover:bg-muted"
          disabled={flattenedVideos.length === 0}
        >
          <RewindIcon className="w-6 h-6 text-foreground" />
        </Button>
        <Button
          onClick={isPlaying ? handlePause : handlePlay}
          variant="ghost"
          size="icon"
          className={`w-12 h-12 hover:bg-muted ${isPlaying ? "bg-muted" : ""}`}
          disabled={!currentVideo}
        >
          {isPlaying ? (
            <PauseIcon className="w-6 h-6 text-foreground" />
          ) : (
            <PlayIcon className="w-6 h-6 text-foreground" />
          )}
        </Button>

        <Button
          onClick={handleNext}
          variant="ghost"
          size="icon"
          className="w-12 h-12 hover:bg-muted"
          disabled={flattenedVideos.length === 0}
        >
          <FastForwardIcon className="w-6 h-6 text-foreground" />
        </Button>
      </div>

      <div className="mt-1 w-screen">
        <Card className="border-0 shadow-none">
          <CardContent className="grid gap-4 justify-center w-screen">
            <ScrollArea className="h-80 w-auto border-r-2 border-l-2 border-t-2 ">
              <div className="divide-y grid">
                {flattenedVideos.map((video, index) => (
                  <div
                    onClick={() => handleClick(video.idYoutube)}
                    key={video.idYoutube}
                    className={`flex items-center p-3 gap-4 cursor-pointer ${
                      index === currentIndex ? "bg-muted" : ""
                    }`}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${video.idYoutube}/mqdefault.jpg`}
                      width={70}
                      height={70}
                      alt="Thumbnail"
                      className="rounded-md object-cover w-24 h-16"
                    />
                    <div className="">
                      <h4 className="text-sm font-medium m-auto p-auto">
                        {format(new Date(video.date), "PPPP", { locale: es })}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

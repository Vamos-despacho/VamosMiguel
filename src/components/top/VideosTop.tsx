import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  ForwardedRef,
} from "react";
import { Button } from "@/components/ui/button";
import VideoSection from "../pleno/PlayVideo";
import { FastForwardIcon, PauseIcon, PlayIcon, RewindIcon } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { getPlenoVideo } from "@/libs/actividades/actions";

interface IVideo {
  date: Date;
  idsYoutube: string[];
}

interface VideosTopHandles {
  handlePause: () => void;
}

const VideosTop = forwardRef<VideosTopHandles, {}>(
  (props, ref: ForwardedRef<VideosTopHandles>) => {
    // Estados y referencias
    const [videosPleno, setVideosPleno] = useState<IVideo[]>([]);
    const [flattenedVideos, setFlattenedVideos] = useState<
      { idYoutube: string; date: Date }[]
    >([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const playerRef = useRef<any>(null);

    // Efecto para obtener los videos
    useEffect(() => {
      const fetchVideos = async () => {
        const resp = await getPlenoVideo();
        const videos: IVideo[] = JSON.parse(resp);
        setVideosPleno(videos);
      };
      fetchVideos();
    }, []);

    // Efecto para aplanar los videos
    useEffect(() => {
      const flattened = videosPleno.flatMap((video) =>
        video.idsYoutube.map((idYoutube) => ({
          idYoutube,
          date: video.date,
        }))
      );
      setFlattenedVideos(flattened);
    }, [videosPleno]);

    // Video actual
    const currentVideo = flattenedVideos[currentIndex] || {
      idYoutube: "",
      date: new Date(),
    };

    // Funciones del reproductor
    const onReady = (event: any) => {
      playerRef.current = event.target;
    };

    const handlePlay = () => {
      setIsPlaying(true);
      playerRef.current?.playVideo();
    };

    const handlePause = () => {
      setIsPlaying(false);
      playerRef.current?.pauseVideo();
    };

    const handleNext = () => {
      const nextIndex = (currentIndex + 1) % flattenedVideos.length;
      setCurrentIndex(nextIndex);
      setIsPlaying(false);
    };

    const handlePrevious = () => {
      const prevIndex =
        (currentIndex - 1 + flattenedVideos.length) % flattenedVideos.length;
      setCurrentIndex(prevIndex);
      setIsPlaying(false);
    };

    // Exposición de métodos al componente padre
    useImperativeHandle(ref, () => ({
      handlePause,
    }));

    return (
      <div className="flex flex-col lg:flex-row max-w-6xl mx-auto h-[600px] sm:h-[500px] items-center justify-center">
        {/* Sección del video */}
        <div className="p-2 w-full md:w-[700px]">
          {currentVideo.idYoutube && (
            <VideoSection id={currentVideo.idYoutube} onReady={onReady} />
          )}
        </div>
        {/* Controles e información */}
        <div className="flex flex-col items-center gap-6 bg-white bg-opacity-90 p-5 rounded-md shadow-lg lg:ml-6">
          <div className="flex flex-col items-center gap-3 pt-4">
            <h2 className="text-3xl font-bold">Actividad legislativa</h2>
            <p className="text-muted-foreground text-lg">
              {format(currentVideo.date, "PPPP", { locale: es })}
            </p>
          </div>
          <div className="flex items-center gap-6 mt-2">
            <Button
              onClick={handlePrevious}
              variant="ghost"
              size="icon"
              className="w-12 h-12 hover:bg-muted"
            >
              <RewindIcon className="w-6 h-6 text-foreground" />
            </Button>
            <Button
              onClick={handlePlay}
              variant="ghost"
              size="icon"
              className={`w-12 h-12 hover:bg-muted ${
                isPlaying ? "bg-muted" : ""
              }`}
            >
              <PlayIcon className="w-6 h-6 text-foreground" />
            </Button>
            <Button
              onClick={handlePause}
              variant="ghost"
              size="icon"
              className={`w-12 h-12 hover:bg-muted ${
                !isPlaying ? "bg-muted" : ""
              }`}
            >
              <PauseIcon className="w-6 h-6 text-foreground" />
            </Button>
            <Button
              onClick={handleNext}
              variant="ghost"
              size="icon"
              className="w-12 h-12 hover:bg-muted"
            >
              <FastForwardIcon className="w-6 h-6 text-foreground" />
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

VideosTop.displayName = "VideosTop";
export default VideosTop;

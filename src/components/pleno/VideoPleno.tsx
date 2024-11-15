"use client";

import VideoSection from "./PlayVideo";
import { useEffect, useRef, useState } from "react";
import { PlayListYoutube } from "./PlayList";
import { getPlenoVideo } from "@/libs/actividades/actions";
interface IVideo {
  date: Date;
  idsYoutube: string[];
}

export const VideoPleno = () => {
  const [showId, setShowId] = useState<string>("");
  const playerRef = useRef<any>(null);
  const [videosIds, setVideosIds] = useState<IVideo[]>();

  const onReady = (event: any) => {
    playerRef.current = event.target;
  };

  const handlePlay = () => {
    if (playerRef.current) {
      playerRef.current.playVideo();
    }
  };

  const handlePause = () => {
    if (playerRef.current) {
      playerRef.current.pauseVideo();
    }
  };

  const getVideo = async () => {
    const resp = await getPlenoVideo();
    const videos = JSON.parse(resp);
    console.log(videos);

    setVideosIds(videos);
  };
  useEffect(() => {
    getVideo();
  }, []);

  return (
    <div className="flex flex-col items-center h-auto bg-background  border rounded-md shadow-md">
      <div className="flex flex-col  lg:flex-row gap-4 p-2 md:py-6 max-w-6xl w-full lg:items-center justify-center ">
        <VideoSection id={showId} onReady={onReady} />

        <div className="w-full lg:w-[420px] bg-background rounded-lg overflow-hidden">
          {/* <PlayListTabs showId={showId} setShowId={setShowId} /> */}
          <PlayListYoutube
            setShowId={setShowId}
            onPlay={handlePlay}
            onPause={handlePause}
            videosPleno={videosIds}
          />
        </div>
      </div>
    </div>
  );
};

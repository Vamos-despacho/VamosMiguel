"use client";

import VideoSection from "./PlayVideo";
import { videosYotube } from "@/app/api/data/videos";
import { useEffect, useRef, useState } from "react";
import { PlayListTabs } from "./PlayListTabs";
import { PlayListYoutube } from "./PlayList";
import { getPlenoVideo } from "@/libs/actividades/actions";

export const VideoPleno = () => {
  const [showId, setShowId] = useState<string>("");
  const playerRef = useRef<any>(null);
  const [videosIds, setVideosIds] = useState([]);

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
            showId={showId}
            setShowId={setShowId}
            onPlay={handlePlay}
            onPause={handlePause}
            idsYoutube={videosIds}
          />
        </div>
      </div>
    </div>
  );
};

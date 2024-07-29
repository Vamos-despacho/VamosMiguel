'use client'

import VideoSection from './PlayVideo'
import { videosYotube } from '@/app/api/data/videos'
import { useRef, useState } from "react"
import { PlayListTabs } from './PlayListTabs'
import { PlayListYoutube } from './PlayList'



export const VideoPleno = () => {

    const [showId, setShowId] = useState<string>(videosYotube[0].id)
    const playerRef = useRef<any>(null);

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
    return (
        <div className="flex flex-col items-center h-auto bg-background  border rounded-md shadow-md">
            <div className="flex flex-col  lg:flex-row gap-4 p-2 md:py-6 max-w-6xl w-full lg:items-center justify-center ">
                <VideoSection id={showId} onReady={onReady} />


                <div className="w-full lg:w-[420px] bg-background rounded-lg overflow-hidden">
                    {/* <PlayListTabs showId={showId} setShowId={setShowId} /> */}
                    <PlayListYoutube showId={showId} setShowId={setShowId} onPlay={handlePlay} onPause={handlePause} />
                </div>
            </div>
        </div >
    )
}
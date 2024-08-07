'use client';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideosTop from "./VideosTop";
import ImagenTop from "./ImagenTop";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const SliderTop = () => {
    const sliderRef = useRef<any>(null);
    const videosTopRef = useRef<any>(null);

    const handlePauseFromParent = () => {
        if (videosTopRef.current) {
            videosTopRef.current.handlePause();
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: handlePauseFromParent,
        appendDots: (dots: React.ReactNode[]) => (
            <div style={{ position: 'relative' }} >
                <ul className="  h-3" style={{ display: 'flex', justifyContent: 'center' }}> {dots} </ul>
                <button
                    onClick={() => sliderRef.current.slickPrev()}
                    className="mr-40 shadow-sm  transform -translate-y-1/2 bg-gray-200 text-white rounded-full p-2 hover:bg-gray-300"
                >
                    <FaArrowLeft />
                </button>
                <button
                    onClick={() => sliderRef.current.slickNext()}
                    className="shadow-sm transform -translate-y-1/2 bg-gray-200 text-white rounded-full p-2 hover:bg-gray-300"
                >
                    <FaArrowRight />
                </button>
            </div>
        ),
    };

    return (
        <div className="pb-4 relative">
            <Slider ref={sliderRef} {...settings}>
                <div>
                    <ImagenTop />
                </div>
                <div >
                    <VideosTop ref={videosTopRef} />
                </div>
            </Slider>
        </div>
    );
};

export default SliderTop;

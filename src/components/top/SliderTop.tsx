'use client';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideosTop from "./VideosTop";
import ImagenTop from "./ImagenTop";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ImagenTop2 from "./ImagenTop2";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

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
            <div style={{ position: 'relative' }} className="" >
                <ul className=" h-3" style={{ display: 'flex', justifyContent: 'center' }}> {dots} </ul>
                <button
                    onClick={() => sliderRef.current.slickPrev()}
                    className="mr-40 shadow-xl  transform -translate-y-1/2 "
                >
                    <FaArrowAltCircleLeft className=" w-8 h-8  opacity-80  hover:opacity-100" />

                </button>
                <button
                    onClick={() => sliderRef.current.slickNext()}
                    className="shadow-xl transform -translate-y-1/2   "
                >
                    {/* <FaArrowRight className=" w-5 h-5" /> */}
                    <FaArrowAltCircleRight className=" w-8 h-8  opacity-80  hover:opacity-100" />

                    {/* ⁄                    <FaArrowRight /> */}
                </button>
            </div>
        ),
    };

    return (
        <div className="  relative">
            <Slider ref={sliderRef} {...settings} >
                <div className=" md:py-12">
                    <ImagenTop2 />
                    {/* <ImagenTop /> */}
                </div>
                <div >
                    <VideosTop ref={videosTopRef} />
                </div>
            </Slider>
        </div>
    );
};

export default SliderTop;

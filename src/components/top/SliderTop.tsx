'use client'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideosTop from "./VideosTop";
import ImagenTop from "./ImagenTop";
import { useRef } from "react";


const SliderTop = () => {

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
        afterChange: handlePauseFromParent, // Ejecuta la función después de cambiar de slide

    };
    return (
        <div className="pb-2">

            <Slider {...settings}>
                <div >
                    <ImagenTop />
                </div>
                <div>
                    <VideosTop ref={videosTopRef} />
                </div>

            </Slider>
        </div>
    );
}
export default SliderTop;
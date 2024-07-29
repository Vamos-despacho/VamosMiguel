"use client"
import Image from 'next/image'

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"


import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const imgs = [
    'img', 'img2', 'img3', 'img1'
]
export function ImgCarousel() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="relative  w-[500px]"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent
            >
                {imgs.map((img, index) => (
                    // {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}
                        className="relative  "
                    >


                        <Image alt='Miguel Angel' loading='lazy' width="500" height="500" decoding='async' data-nimg="1"
                            // sizes="(min-width: 1024px) 32rem, 20rem"
                            src={`/images/${img}.png`}
                            // src='/images/img2.png'
                            className=" aspect-square rounded-2xl bg-zinc-400 object-cover dark:bg-zinc-800" />



                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}






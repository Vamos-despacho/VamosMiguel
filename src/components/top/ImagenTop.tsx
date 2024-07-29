'use client'
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
const imgs = [
    'imagen01.png', 'imagen02.jpg',
]
export default function ImagenTop() {
    return (
        <div className="grid grid-cols-1 bg-white md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto px-4 md:px-6">
            <div>
                <Carousel className="rounded-lg overflow-hidden">
                    <CarouselContent>
                        {imgs.map((img, index) => (
                            <CarouselItem key={index}>
                                <img src={`/images/top/${img}`} alt={`Slide ${index + 1}`} width={800} height={450} className="object-cover w-full h-full" />
                            </CarouselItem>
                        ))}

                    </CarouselContent>
                    <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 bg-background/20 hover:bg-background/75 p-2 rounded-xl shadow-lg transition-colors border-none">
                        <BsChevronCompactLeft className="w-6 h-6 text-foreground " />
                    </CarouselPrevious>
                    <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 bg-background/20 hover:bg-background/75 p-2 rounded-xl shadow-lg transition-colors border-none">
                        <BsChevronCompactRight className="w-6 h-6 text-foreground" />
                    </CarouselNext>
                </Carousel>
            </div>
            <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Con buena voluntad,Vamos a CUMPLIRTE!</h2>
                <p className="text-muted-foreground mt-2 lg:mt-6 text-lg text-gray-600 text-justify">
                    &quot;Mi compromiso es representar y servir a nuestra comunidad con integridad y dedicación. Trabajaremos juntos para impulsar el progreso, defender nuestros valores compartidos y construir un futuro próspero. Su voz será fundamental en cada decisión que tomemos para el beneficio de nuestra nación.&quot;
                </p>
            </div>
        </div>
    )
}

function ChevronLeftIcon(props: any) {
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
            <path d="m15 18-6-6 6-6" />
        </svg>
    )
}


function ChevronRightIcon(props: any) {
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
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}


function XIcon(props: any) {
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
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}
import React, { FC } from 'react'
import { Separator } from '../ui/separator';
import ImageSlider from './ShowImgs';
interface ImageViewerProps {
    images: string[];
    title: string;
    introText?: string;
}
const TransparenciaInformacion: FC<ImageViewerProps> = ({ images, title, introText }) => {
    return (
        <div >
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        {title}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        {introText}
                    </p>
                </div>
            </div>
            <Separator className="my-8" />
            <ImageSlider images={images} />
            <Separator className="my-10" />

        </div>



    )
}

export default TransparenciaInformacion
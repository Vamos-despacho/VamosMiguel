import Image from 'next/image'
import React from 'react'

export const ImgCarousel = () => {
    return (
        <div>
            <Image alt='Miguel Angel' loading='lazy' width="800" height="800" decoding='async' data-nimg="1"
                sizes="(min-width: 1024px) 32rem, 20rem"
                src='/images/img2.png'
                className=" aspect-square rounded-2xl bg-zinc-400 object-cover dark:bg-zinc-800" />
        </div>

    )
}

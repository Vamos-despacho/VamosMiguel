import Image from 'next/image'
import React from 'react'

export const Footer = () => {
    return (
        <footer className='  h-full'>
            <div className="sm:px-8">
                <div className="mx-auto w-full max-w-7xl lg:px-4 ">
                    <div className="b-16 py-8 ">
                        <div className="relative px-4 sm:px-8 ">
                            <div className="mx-auto max-w-2xl lg:max-w-5xl">
                                <div className="flex flex-col items-center justify-between sm:flex-row gap-6 ">

                                    <Image alt='Vamos Miguel Angel'
                                        src='/logo-vamos.png'
                                        loading='lazy'
                                        width="200"
                                        height="200"
                                        decoding='async'
                                        data-nimg="1" />


                                    <p className="text-sm text-zinc-400 dark:text-zinc-500">
                                        © 2023 Vamos Panamá
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

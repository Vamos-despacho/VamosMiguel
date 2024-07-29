"use client"
import { Button } from '@/components/ui/button';
import { uploadImageCloudinaryCrop } from '@/helpers/uploadImageCludinary';
import { ImageIcon } from 'lucide-react';
import Image from 'next/image';
import React, { ChangeEvent, useRef, useState } from 'react'

const CargarImagen = () => {
    const [selectImage, setSelectImage] = useState<string>()
    const [subiendoImagen, setSubiendoImagen] = useState(false)
    const handleFileSelect = async (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFileE = e.target.files;

        if (selectedFileE) {
            setSubiendoImagen(true)
            const imgs = await uploadImageCloudinaryCrop({ images: selectedFileE[0] })

            setSubiendoImagen(false)
            setSelectImage(imgs);
        }
    };
    const fileInputRefs = useRef<HTMLInputElement>();
    const handleClick = () => {
        const fileInput = fileInputRefs.current
        if (fileInput) {
            fileInput.click();
        }
    };
    return (
        <div className="sm:flex space-y-2 flex-col  sm:flex-row pb-8  sm:space-x-8 justify-center items-center m-auto">
            <Button arial-label='Agregar Imagen' type="button" variant="outline" onClick={handleClick}>
                Agregar Imágenes
            </Button>
            <input
                ref={(el) => (fileInputRefs.current = el!)}
                style={{ display: 'none' }}
                type="file"
                className="w-24 h-8"
                accept="image/*"
                multiple // Esto permite la selección múltiple de archivos
                onChange={(e) => handleFileSelect(e)}
            />
            {
                selectImage
                    ? (

                        <div className='flex flex-col justify-center items-center'>
                            <Image

                                src={selectImage}
                                alt='asdf'
                                width={80}
                                height={80}
                                className="w-40 h-40 object-cover"
                            />
                            <pre>{selectImage}</pre>
                        </div>
                    )
                    :
                    (
                        <div className="w-40 h-40 bg-zinc-100 flex items-center justify-center">
                            <div className="text-neutral-500 text-sm">
                                {subiendoImagen ? (
                                    <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin" />

                                ) : <ImageIcon className="h-8 w-8" />}
                            </div>
                        </div>
                    )
            }

        </div>
    )
}
export default CargarImagen
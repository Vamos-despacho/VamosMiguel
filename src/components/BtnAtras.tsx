"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { Button } from './ui/button';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

const BtnAtras = () => {

    const router = useRouter();

    return (
        <Button
            arial-label='Atras'
            onClick={() => router.back()}
            variant="ghost"
            className='p-0 m-0'>
            <ArrowLeftIcon className='h-10 w-10' />
        </Button>
    )
}

export default BtnAtras
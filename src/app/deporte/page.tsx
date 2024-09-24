
import Deporte from '@/components/deportistas/deporte/Deporte'
import React from 'react'

const pageDeporte = () => {
    return (
        <div className='flex flex-col max-w-6xl m-auto sm:py-12 h-full'>
            {/* <h2 className='block px-3 font-display tracking-tight [text-wrap:balance] text-3xl font-medium sm:text-4xl text-azulv'>
                Deporte en Panamá
            </h2> */}
            <Deporte />
        </div>
    )
}

export default pageDeporte
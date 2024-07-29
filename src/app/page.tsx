import React from 'react'
import Contactanos from './contactanos/page'
import Articulos from './articulos/page'
import SliderTop from '@/components/top/SliderTop'
import { PropuestasPage } from '@/components/propuestas/PropuestasPage'
import CardPropuestas from '@/components/propuestas/TarjetasPropuestas'

const page = () => {
  return (
    <div >
      <div className='py-10'>

        <SliderTop />
      </div>
      <div className='bg-gray-50 py-10'>
        <CardPropuestas />
      </div>
      <div className=' '>

        <Articulos />
      </div>
      <div className='bg-gray-50 pb-20'>

        <Contactanos />
      </div>
    </div>
  )
}

export default page
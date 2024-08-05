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
      <div className='bg-gray-100 py-6 border-t  border-gray-50'>
        <CardPropuestas />
      </div>
      <div className=' border-t border-gray-50'>

        <Articulos />
      </div>
      <div id='contactanos' className='bg-gray-100 pb-20 border-t border-gray-50 '>

        <Contactanos />
      </div>
    </div>
  )
}

export default page
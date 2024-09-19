import React from 'react'
import Contactanos from './contactanos/page'
import Articulos from './articulos/page'
import SliderTop from '@/components/top/SliderTop'
import CardPropuestas from '@/components/propuestas/TarjetasPropuestas'

const page = () => {
  return (
    <div >
      {/* <div className=' py-3 pb-8'>

            <SliderTop />
      </div> */}
      <div style={{ backgroundImage: `url(images/bg/bgpleno.jpeg)`, backgroundSize: 'cover' }} className="relative  bg-cover bg-center ">
        <div className="absolute inset-0 bg-neutral-300 opacity-60"></div> {/* Capa semi-transparente */}
        <div className="relative z-10 py-4">
          <SliderTop />
        </div>
      </div>
      <div className=' py-6 border-t  border-gray-50'>
        <CardPropuestas />
      </div>
      <div className='bg-gray-100 border-t border-gray-50'>

        <Articulos />
      </div>
      <div id='contactanos' className=' pb-20 border-t border-gray-50 '>

        <Contactanos />
      </div>
    </div>
  )
}

export default page
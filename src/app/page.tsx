import Suplente from './suplente/page'

import Contactanos from './contactanos/page';
import Propuestas from './propuestas/page';
import Image from 'next/image';
import Articulos from './articulos/page';
import Biografia from './biografia/page';
import { ImgCarousel } from '@/components/ImgCarousel';


const Home = () => {
  return (
    <>
      <div className='overflow-hidden  py-16 bg-white '>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
            <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
              <p className="text-4xl font-semibold tracking-tight text-gray-900">Con buena voluntad,Vamos a CUMPLIRTE!</p>
              <p className="mt-6 text-lg text-gray-600 ">
                &quot;No solo es nuestra tarea elegir al ejercer nuestro voto,
                sino también asegurarnos de contar con una representatividad auténtica.
                Mi compromiso es ser el portavoz de esa voluntad y trabajar contigo para construir
                un futuro en el que cada voto contado consolida la verdadera esencia de la democracia:
                el poder del pueblo para definir su propio rumbo.&quot;
              </p>
            </div>
            <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
              <div className=''></div>
              {/* <Image alt='Miguel Angel' loading='lazy' width="800" height="800" decoding='async' data-nimg="1"
                sizes="(min-width: 1024px) 32rem, 20rem"
                src='/logovm.png'
                className=" aspect-square rounded-2xl bg-zinc-400 object-cover dark:bg-zinc-800" /> */}
              <ImgCarousel />
            </div>
            <div className="relative mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
            </div>
          </div>

        </div>
      </div>


      <section id='biografia' className=' py-28 bg-zinc-100  '>
        <Biografia />
      </section>
      <section id='suplente' className=' py-28 border-gray-50'>
        <Suplente />
      </section>
      {/* <section id='propuestas' className='bg-zinc-100 py-24 '>
        <Propuestas />
      </section> */}
      <section id='articulos' className='bg-zinc-100 py-24 '>
        <Articulos />
      </section>
      <section id='contactanos' className=' py-24   border-t '>
        <Contactanos />
      </section>
    </>
  )
}

export default Home
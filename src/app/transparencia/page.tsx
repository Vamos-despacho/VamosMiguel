import Transparencias from '@/components/transparencia/Transparencias'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: "Transparencia",
}
const Transparencia = () => {
    return (

        <div className="container mx-auto my-0 sm:py-20 p-6 h-ful ">
            <h1 className="text-3xl font-bold mb-4">Transparencia</h1>
            <p className="text-gray-600 mb-8">
                Bienvenido a mi sección de transparencia, donde comparto información relevante sobre los compromisos, declaraciones y renuncias que asumo como candidato a diputado. Creo en la importancia de la honestidad y la claridad en la gestión pública, y quiero ofrecer a la comunidad acceso directo a documentos clave que reflejen mi compromiso con la transparencia. Si tienes alguna pregunta o inquietud, no dudes en contactarme.
            </p>
            <div className=" justify-center  flex">

                <Transparencias />
            </div>
        </div>
    )
}

export default Transparencia
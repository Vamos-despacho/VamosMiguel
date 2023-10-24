import CreateTagCategory from '@/components/dashboard/CreateTagCategory'
import React from 'react'

const CrearCategoria = () => {


    return (
        <div className=' h-[calc(100vh-18rem)] '>
            <div className='items-center flex flex-col mt-5 '>

                <h2 className='font-semibold text-2xl'>
                    Crear Categoría
                </h2>
                <CreateTagCategory
                    link='categorias'
                />
            </div>
        </div>
    )
}

export default CrearCategoria
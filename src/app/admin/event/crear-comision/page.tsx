import vamosApi from '@/app/api/vamosApi'
import ComisionCreate from '@/components/dashboard/event/ComisionCreate'
import ComisionShow from '@/components/dashboard/event/ComisionShow'
import React from 'react'

const getComisiones = async () => {
    try {
        const res = await vamosApi.get('/events/createcomision');
        return res.data;
    } catch (error) {
        // console.log(error);
        return []; // Devolver un array vacío en caso de error.
    }
}


const page = async () => {
    const comisiones = await getComisiones();
    return (
        <div className='flex'>
            <ComisionCreate />
            {comisiones ? (

                <ComisionShow comisiones={comisiones} />
            ) : (
                <p>No se pudieron cargar las comisiones.</p>
            )}
        </div>
    );
}


export default page
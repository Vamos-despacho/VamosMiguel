import vamosApi from '@/app/api/vamosApi'
import ComisionCreate from '@/components/dashboard/event/ComisionCreate'
import ComisionShow from '@/components/dashboard/event/ComisionShow'
import { getComision } from '@/libs/event/actions'
import React from 'react'

const getComisiones = async () => {
    try {
        // const res = await vamosApi.get('/events/createcomision');
        const res = await getComision();
        const parsedResponse = JSON.parse(res)

        return parsedResponse;
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
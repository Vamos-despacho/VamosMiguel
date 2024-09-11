import { obtenerProvincias } from '@/libs/salon/actions'
import React from 'react'
async function getServerSideProps() {
    const resp = await obtenerProvincias()

    if (resp) {
        const provincias = JSON.parse(resp)
        return provincias
    } else {
        return null
    }
}
const verProvincias = async () => {
    const provincias = await getServerSideProps()
    if (!provincias) {
        return <div>Hubo un error al obtener las provincias</div>
    }
    return (
        <div>
            <pre>{JSON.stringify(provincias, null, 3)}</pre>
        </div>
    )
}

export default verProvincias
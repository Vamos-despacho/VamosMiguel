import vamosApi from '@/app/api/vamosApi'
import EventView from '@/components/dashboard/event/EventView'
import React from 'react'
const getEvents = async () => {
    try {

        const res = await vamosApi.get('/events')

        return res.data
    } catch (error) {
        console.log(error)
    }
}

const verEventoPage = async () => {
    const event = await getEvents()

    return (

        <div className=" h-full p-3 pt-7">

            <h1>Eventos</h1>
            <EventView events={event} />
        </div>)
}

export default verEventoPage
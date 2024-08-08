import EventCreate from '@/components/dashboard/event/EventCreate'
import React from 'react'

const CrearEvent = () => {
    return (
        <div className=" h-[calc(100vh-18rem)] p-3 pt-7">

            <h1>Crear Evento</h1>
            <EventCreate />
        </div>
    )
}

export default CrearEvent
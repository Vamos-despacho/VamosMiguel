import EventCreate from '@/components/dashboard/event/EventCreate'
import React from 'react'

const CrearEvent = () => {
    return (
        <div className="flex flex-col h-full p-3 pt-12">

            <h1>Crear Evento</h1>
            <EventCreate />
        </div>
    )
}

export default CrearEvent
import { IEventDeporte } from '@/interface/atletas'
import React from 'react'
import { FaRunning } from 'react-icons/fa' // Usa un icono relevante

const VerEvento = ({ event }: { event: IEventDeporte[] }) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'> {/* Mejor uso de grid para el diseño responsivo */}
            {event.map((evento) => (
                <div key={evento._id} className='bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow p-4 h-auto w-full'>
                    <div className="flex items-center gap-3">
                        <div className="bg-primary rounded-full p-2 text-primary-foreground">
                            <FaRunning className='w-6 h-6' /> {/* Usa un icono más específico */}
                        </div>
                        <h3 className='text-lg font-semibold text-primary'>{evento.name}</h3> {/* Texto más prominente */}
                    </div>
                    <div className='mt-2'>
                        <p className='text-xs text-gray-500'>{evento.year}</p> {/* Estilo más claro para el año */}
                    </div>
                    <div className="mt-2 text-sm text-start text-muted-foreground">
                        <p>{evento.location}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default VerEvento

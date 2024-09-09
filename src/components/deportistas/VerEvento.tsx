import { IEventDeporte } from '@/interface/atletas'
import React from 'react'

const VerEvento = ({ event }: { event: IEventDeporte[] }) => {
    return (
        <div>
            <pre>{JSON.stringify(event, null, 3)}</pre>

        </div>
    )
}

export default VerEvento
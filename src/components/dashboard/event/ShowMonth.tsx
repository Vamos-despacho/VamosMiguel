import { MesDocument } from '@/models/Mes';
import React from 'react'


interface ShowMonthProps {
    month: MesDocument[];
}
const ShowMonth = ({ month }: ShowMonthProps) => {
    return (
        <div>
            <pre>{JSON.stringify(month, null, 3)}</pre>
        </div>
    )
}

export default ShowMonth
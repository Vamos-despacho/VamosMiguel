import FullAthlete from '@/components/deportistas/update/FullAthlete'
import React from 'react'

const pageFullAthlete = ({ params }: { params: { id: string } }) => {
    const id = params.id
    return (
        <div>
            <pre>{JSON.stringify(id, null, 2)}</pre>
            <FullAthlete />
        </div>
    )
}

export default pageFullAthlete
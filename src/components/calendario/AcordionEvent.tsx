import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { IEventDetails } from '@/app/api/data/EventDays'
import { ViewYoutube } from './tabscontent/ViewYoutube'

const AcordionEvent = ({ event }: { event?: IEventDetails }) => {
    if (!event) return null
    return (
        <div className='px-2'>

            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Videos</AccordionTrigger>
                    <AccordionContent>
                        <ViewYoutube idsYoutube={event.idsYoutube} />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>

    )
}

export default AcordionEvent
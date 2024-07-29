import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import { startOfISOWeek } from 'date-fns'
import 'react-big-calendar/lib/css/react-big-calendar.css'
const locales = {
    'en-US': enUS,
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek: () => startOfISOWeek(new Date()),
    getDay,
    locales,
})
const events = [
    {
        title: 'Meeting',
        start: new Date(2024, 6, 26, 10, 0), // July 26, 2024, 10:00 AM
        end: new Date(2024, 6, 26, 11, 0), // July 26, 2024, 11:00 AM
    },
    // other events
]

function MyCalendar() {
    return (
        <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ width: '60%', height: 500 }}
        />
    )
}

export default MyCalendar

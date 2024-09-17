import { useState } from 'react';

interface Event {
    event: string;
    position?: string;
}

const EventsForm = ({ events, setEvents }: any) => {
    const [event, setEvent] = useState<Event>({ event: '', position: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEvent({
            ...event,
            [e.target.name]: e.target.value,
        });
    };

    const handleAdd = () => {
        setEvents([...events, event]);
        setEvent({ event: '', position: '' });
    };

    return (
        <div>
            <h3>Add Event</h3>
            <input name="event" type="text" value={event.event} onChange={handleChange} placeholder="Event" />
            <input name="position" type="text" value={event.position} onChange={handleChange} placeholder="Position" />
            <button type="button" onClick={handleAdd}>Add Event</button>
        </div>
    );
};

export default EventsForm;

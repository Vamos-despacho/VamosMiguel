import { useState } from 'react';

interface Sport {
    discipline: string;
    category: string;
}

const SportsForm = ({ sports, setSports }: any) => {
    const [sport, setSport] = useState<Sport>({ discipline: '', category: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSport({
            ...sport,
            [e.target.name]: e.target.value,
        });
    };

    const handleAdd = () => {
        setSports([...sports, sport]);
        setSport({ discipline: '', category: '' });
    };

    return (
        <div>
            <h3>Add Sports</h3>
            <input name="discipline" type="text" value={sport.discipline} onChange={handleChange} placeholder="Discipline" />
            <input name="category" type="text" value={sport.category} onChange={handleChange} placeholder="Category" />
            <button type="button" onClick={handleAdd}>Add Sport</button>
        </div>
    );
};

export default SportsForm;

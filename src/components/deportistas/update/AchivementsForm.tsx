import { useState } from 'react';

interface Achievement {
    year: number;
    event: string;
    position: string;
    location: string;
}

const AchievementsForm = ({ achievements, setAchievements }: any) => {
    const [achievement, setAchievement] = useState<Achievement>({
        year: 0,
        event: '',
        position: '',
        location: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAchievement({
            ...achievement,
            [e.target.name]: e.target.value,
        });
    };

    const handleAdd = () => {
        setAchievements([...achievements, achievement]);
        setAchievement({ year: 0, event: '', position: '', location: '' });
    };

    return (
        <div>
            <h3>Add Achievements</h3>
            <input name="year" type="number" value={achievement.year} onChange={handleChange} placeholder="Year" />
            <input name="event" type="text" value={achievement.event} onChange={handleChange} placeholder="Event" />
            <input name="position" type="text" value={achievement.position} onChange={handleChange} placeholder="Position" />
            <input name="location" type="text" value={achievement.location} onChange={handleChange} placeholder="Location" />
            <button type="button" onClick={handleAdd}>Add Achievement</button>
        </div>
    );
};

export default AchievementsForm;

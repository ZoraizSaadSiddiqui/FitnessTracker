import React, { useState } from 'react';

const WorkoutSchedule = ({ saveSchedule }) => {
  const [schedule, setSchedule] = useState({
    Monday: { type: '', duration: '', notes: '' },
    Tuesday: { type: '', duration: '', notes: '' },
    Wednesday: { type: '', duration: '', notes: '' },
    Thursday: { type: '', duration: '', notes: '' },
    Friday: { type: '', duration: '', notes: '' },
    Saturday: { type: '', duration: '', notes: '' },
    Sunday: { type: '', duration: '', notes: '' }
  });

  const handleChange = (day, field, value) => {
    setSchedule(prevSchedule => ({
      ...prevSchedule,
      [day]: {
        ...prevSchedule[day],
        [field]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveSchedule(schedule);
  };

  // Inline CSS styles
  const styles = {
    workoutSchedule: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f8f8f8',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      color:'#097972'
    },
    days: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    },
    day: {
      flex: '1 1 100px',
      margin: '10px',
      padding: '10px',
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)'
    }
  };

  return (
    
    <form onSubmit={handleSubmit} style={styles.workoutSchedule}>
        <h1>Get The Most Out </h1>
            <h2> Of Your Workout</h2>
      <div style={styles.days}>
        {Object.keys(schedule).map(day => (
          <div key={day} style={styles.day}>
            <h3>{day}</h3>
            <input
              type="text"
              value={schedule[day].type}
              onChange={(e) => handleChange(day, 'type', e.target.value)}
              placeholder="Workout Type"
            />
            <input
              type="number"
              value={schedule[day].duration}
              onChange={(e) => handleChange(day, 'duration', e.target.value)}
              placeholder="Duration (mins)"
            />
            <textarea
              value={schedule[day].notes}
              onChange={(e) => handleChange(day, 'notes', e.target.value)}
              placeholder="Notes"
            />
          </div>
        ))}
      </div>
      <button style={{backgroundColor:'#097972',color:'white',padding:'7px'}} type="submit">Save Schedule</button>
    </form>
  );
};

export default WorkoutSchedule;

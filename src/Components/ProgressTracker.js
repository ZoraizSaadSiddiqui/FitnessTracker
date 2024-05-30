// ProgressTracker.js
import React from 'react';
import './ProgressTracker.css'; 

const ProgressTracker = () => {
  const fitnessProgressData = [
    {
      title: 'Week 1',
      content: 'This week, I focused on building a foundation by incorporating basic exercises like squats, push-ups, and planks into my routine. I aimed for consistency and managed to work out for at least 30 minutes every day.',
    },
    {
      title: 'Week 2',
      content: 'In week 2, I challenged myself with more intense workouts, including HIIT sessions and longer cardio sessions. I also paid attention to my diet by incorporating more fruits, vegetables, and lean proteins.',
    },
    {
      title: 'Week 3',
      content: 'Week 3 was all about pushing my limits and testing my endurance. I increased the intensity of my workouts and tried new activities like cycling and swimming. Despite facing some challenges, I stayed motivated and pushed through.',
    },
    {
      title: 'Week 4',
      content: 'Week 4 was focused on refining my workout routine and challenging myself further.',
    },]

  return (
    <div className="progress-container">
      <h1>Fitness Progress Report</h1>
      <div className="progress-report">
        {fitnessProgressData.map((item, index) => (
          <div key={index} className="report-item">
            <div className="report-content">
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressTracker;

// CalorieTracker.js
import React, { useState, useEffect } from 'react';
import './CalorieTracker.css'; 

const CalorieTracker = () => {
  const [food, setFood] = useState('');
  const [calories, setCalories] = useState('');
  const [eatingTime, setEatingTime] = useState('');
  const [calorieData, setCalorieData] = useState([]);

  
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('calories')) || [];
    setCalorieData(savedData);
  }, []);

  
  useEffect(() => {
    localStorage.setItem('calories', JSON.stringify(calorieData));
  }, [calorieData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (food.trim() !== '' && calories.trim() !== '' && !isNaN(calories) && eatingTime.trim() !== '') {
      const entry = {
        food,
        calories,
        eatingTime,
      };
      setCalorieData([...calorieData, entry]);
      setFood('');
      setCalories('');
      setEatingTime('');
    } else {
      alert('Please enter valid food, calories, and eating time.');
    }
  };

  const handleDelete = (index) => {
    const updatedData = calorieData.filter((_, i) => i !== index);
    setCalorieData(updatedData);
  };

  return (
    <div className="calorie-tracker-container">
      <h1>Calorie Tracker</h1>
      <form onSubmit={handleSubmit} className="calorie-form">
        <label htmlFor="food">Food:</label>
        <input type="text" id="food" value={food} onChange={(e) => setFood(e.target.value)} required />
        <label htmlFor="calories">Calories:</label>
        <input type="number" id="calories" value={calories} onChange={(e) => setCalories(e.target.value)} required />
        <label htmlFor="eatingTime">Eating Time:</label>
        <input type="time" id="eatingTime" value={eatingTime} onChange={(e) => setEatingTime(e.target.value)} required />
        <button type="submit">Add</button>
      </form>
      <ul className="calorie-list">
        {calorieData.map((item, index) => (
          <li key={index}>
            <div className="entry-details">
              <div>
                <span>{item.food} - {item.calories} calories</span>
                <span className="eating-time">Eaten at: {item.eatingTime}</span>
              </div>
            </div>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <p className="total-calories">Total Calories: {calorieData.reduce((acc, curr) => acc + parseInt(curr.calories), 0)}</p>
    </div>
  );
}

export default CalorieTracker;

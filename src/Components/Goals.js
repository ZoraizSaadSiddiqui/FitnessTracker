import React, { useState } from 'react';
import './Goals.css';

const Goals = () => {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState('');
  const [daysToComplete, setDaysToComplete] = useState('');
  const [deadline, setDeadline] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNewGoalChange = (e) => {
    setNewGoal(e.target.value);
  };

  const handleDaysToCompleteChange = (e) => {
    setDaysToComplete(e.target.value);
  };

  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddGoal = () => {
    if (newGoal.trim() && daysToComplete.trim()) {
      setGoals([...goals, { 
        id: Date.now(), 
        text: newGoal, 
        daysToComplete: parseInt(daysToComplete),
        deadline: deadline.trim(),
        priority: priority.trim(),
        description: description.trim()
      }]);
      setNewGoal('');
      setDaysToComplete('');
      setDeadline('');
      setPriority('');
      setDescription('');
    } else {
      setErrorMessage('Please enter both goal and days to complete');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddGoal();
    }
  };

  const handleClearError = () => {
    setErrorMessage('');
  };

  return (
    <div className="goals-container">
      <h2 className="goals-heading">Fitness Goals</h2>
      <div className="goal-form">
        <div className="add-goal-container">
          <input
            type="text"
            value={newGoal}
            onChange={handleNewGoalChange}
            onKeyPress={handleKeyPress}
            placeholder="Enter your goal"
            className="goal-input"
          />
          <input
            type="number"
            value={daysToComplete}
            onChange={handleDaysToCompleteChange}
            onKeyPress={handleKeyPress}
            placeholder="Days to complete"
            className="days-input"
          />
          <input
            type="text"
            value={deadline}
            onChange={handleDeadlineChange}
            placeholder="Deadline (optional)"
            className="deadline-input"
          />
          <input
            type="text"
            value={priority}
            onChange={handlePriorityChange}
            placeholder="Priority (optional)"
            className="priority-input"
          />
          <input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Description (optional)"
            className="description-input"
          />
          <button className="add-button" onClick={handleAddGoal}>
            Add Goal
          </button>
        </div>
        {errorMessage && (
          <p className="error-message" onClick={handleClearError}>
            {errorMessage} (click to clear)
          </p>
        )}
      </div>
      <div className="goal-list">
        {goals.map((goal) => (
          <div key={goal.id} className="goal-item">
            <span>{goal.text}</span>
            <span>{goal.daysToComplete} days</span>
            <span>{goal.deadline && `Deadline: ${goal.deadline}`}</span>
            <span>{goal.priority && `Priority: ${goal.priority}`}</span>
            <span>{goal.description && `Description: ${goal.description}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goals;

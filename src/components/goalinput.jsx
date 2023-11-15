import React, { useState, useEffect } from 'react';

const GoalInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [goals, setGoals] = useState([]);

  const addGoal = () => {
    if (inputValue.trim() !== '') {
      setGoals([...goals, inputValue]);
      setInputValue('');
    }
  };

  useEffect(() => {
    document.title = `Goals: ${goals.length}`;
  }, [goals]);

  return (
    <div style={{width: '100vw', height: '100vh', padding: '20px'}}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addGoal}>Agregar</button>
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
    </div>
  );
};

export default GoalInput;

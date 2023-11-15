import React, { useState, useEffect } from 'react';

const GoalInput = () => {

  const storedGoals = JSON.parse(localStorage.getItem('goals')) || [];

  const [inputValue, setInputValue] = useState('');

  const [goals, setGoals] = useState(storedGoals);

  const addGoal = () => {
    if (inputValue.trim() !== '') {
      const newGoals = [...goals, inputValue];
      setGoals(newGoals);
      setInputValue('');


      localStorage.setItem('goals', JSON.stringify(newGoals));
    }
  };

  useEffect(() => {
    document.title = `Goals: ${goals.length}`;
  }, [goals]);

  return (
    <div style={{ width: '100vw', height: '100vh', padding: '20px' }}>
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

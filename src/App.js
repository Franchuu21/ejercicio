// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import GoalInput from './components/goalinput';
import { ThemeProvider, useTheme } from './components/theme';
import Instructions from './components/instructions';
import './App.css';

function App() {
  return (
   // <ThemeProvider>
      <Router>
        <div style={{ backgroundColor: 'blue' }}>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/instructions">Instrucciones</Link>
          </nav>
          <Routes>
            <Route path="/instructions" element={<Instructions />} />
            <Route path="/" element={<GoalInput />} />
          </Routes>
        </div>
      </Router>
   // </ThemeProvider>
  );
}

export default App;

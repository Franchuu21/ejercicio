// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import GoalInput from './components/goalinput';
import { ThemeProvider, useTheme } from './components/theme';
import Instructions from './components/instructions';
import Switch from 'react-bootstrap/Switch'; // Importa el Switch de react-bootstrap
import './App.css';

function App() {
  const { isBlue, toggleTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: isBlue ? 'blue' : 'white',
        transition: 'background-color 0.3s ease',
        margin: '0 auto',
      }}
    >
      <Router>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/instructions">Instrucciones</Link>
        </nav>
        <Switch
          label="Cambiar Tema"
          id="theme-switch"
          checked={isBlue}
          onChange={toggleTheme}
          style={{padding: '20px'}}
        />
        <Routes>
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/" element={<GoalInput />} />
        </Routes>
      </Router>
    </div>
  );
}

function AppWithThemeProvider() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default AppWithThemeProvider;

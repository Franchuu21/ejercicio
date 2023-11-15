import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import GoalInput from './components/goalinput'
import { ThemeProvider, useTheme } from './components/theme';
import './App.css';

function App() {

  const { isBlue, toggleTheme } = useTheme();


  return (
    <ThemeProvider>
    <div style={{ backgroundColor: isBlue ? 'blue' : 'white' }}>
    <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/instructions">Instrucciones</Link>
    </nav>
    <Switch>
      <Route path="/instructions" component={Instructions} />
      <Route path="/" component={GoalInput} />
    </Switch>
  </Router>
  </div>
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Switch>
    <div className="App">
      <header className="App-header">
        <Route path={['/', '/home']} exact component={Home}/>
      </header>
    </div>
    </Switch>
    </Router>
  );
}

export default App;

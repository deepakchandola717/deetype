import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Playground from './components/Playground';


function App() {
  return (
    <Router>
      <Switch>
    <div className="App">
      <header className="App-header">
        <Route path={['/', '/home']} exact component={Home}/>
        <Route path={ '/playground'} exact component={Playground}/>
      </header>
    </div>
    </Switch>
    </Router>
  );
}

export default App;

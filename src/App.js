import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import HomePage from './pages/homepage/hompage.component';
import './App.css';

const PizzaPage = () =>(
  <div>
    <h1>PizzaPage</h1>
  </div>

);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/pizza" component={PizzaPage} />
      </Switch>
    </div>
  );
}

export default App;

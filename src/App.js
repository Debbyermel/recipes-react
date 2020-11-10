import React, {useEffect, useState} from 'react';
import About from './About';
import Home from './Home';
import Nav from './Nav';
import Recipe from './Recipe';
import Shop from './Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return(
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          < Route path="/" exact component={Home} />
          < Route path="/about" component={About} />
          < Route path="/shop" component={Shop} />
          < Route path="/recipe" component={Recipe} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Nav from './components/Nav';
import Home from './components/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Nav /> 
        <Route exact path = "/Login" component = {Login}/>
        <Route exact path = "/Register" component = {Register}/>
        <Route exact path = "/Home" component = {Home} />
      </Router>
    </div>
  );
}

export default App;
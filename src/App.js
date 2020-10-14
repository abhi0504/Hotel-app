import React from 'react';
import './App.css';
import { Switch , Route } from 'react-router-dom';
import Navbar from './Components/Navbar'

import Home from './pages/home'
import Rooms from './pages/rooms'

function App() {
  
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
      </Switch>
    </div>
  );
}

export default App;

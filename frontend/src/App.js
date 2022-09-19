import React from 'react';
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile'
import Joke from './components/Joke';

function App() {
  return(
    <div className='app'>
      <p>Main</p>
      <Login name="Ajith"/>
      <Profile/>
      <Joke/>
    </div>
  )
}

export default App;

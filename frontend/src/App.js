import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  const [userList]= useState([])
  return(
    <div className='app'>
      {userList ? <Profile/> : <Login />}
    </div>
  )
}

export default App;

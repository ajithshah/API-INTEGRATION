import React from 'react';
import './App.css';
// import Login from './components/Login';
import Profile from './components/Profile'

function App() {
  return(
    <div className='app'>
      <p>Main</p>
      {/* <Login name="Ajith"/> */}
      <Profile/>
    </div>
  )
}

export default App;

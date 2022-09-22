import React from 'react';
import './App.css';
// import Login from './components/Login';
// import Profile from './components/Profile'
// import Joke from './components/Joke';
// import Dogs from './components/Dogs';
import Directus from './components/directus';
function App() {
  return(
    <div className='app'>
      <p>Main</p>
      {/* <Login name="Ajith"/>
      <Profile/>
      <Joke/>
      <Dogs /> */}
      <Directus/>
    </div>
  )
}

export default App;

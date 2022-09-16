import React from 'react'
import Axios from 'axios';

function Profile(props) {
  const getjoke=() =>{
    Axios.get('https://official-joke-api.appspot.com/random_joke').then((response) => {
      console.log(response);    
    })
  }
  return (
    <div>
      <h1>Profile</h1>
      <button onClick={getjoke()}>Click to joke</button>
    </div>
  )
}

export default Profile

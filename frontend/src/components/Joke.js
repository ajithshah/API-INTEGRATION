import React,  { useState, useEffect }  from 'react';
import Axios from 'axios';
import './style.css';
const Joke = () => {
  const [joke, setJoke] = useState("")
  useEffect(()=> {
    Axios.get("https://official-joke-api.appspot.com/random_joke").then((response) =>{
      setJoke(response.data);
    })
  },[])
  return (
    <div>
      <p>Random Jokes</p>
      <p>{joke.id}</p>
      <p>{joke.type}</p>
      <p>{joke.setup} </p>
      <p>{joke.punchline}</p>
    </div>
  )
}

export default Joke
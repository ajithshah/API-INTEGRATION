import React, {useState, useEffect } from 'react'
import Axios from 'axios';

const Dogs = () => {
  const [dogs, setDogs] = useState("");
  useEffect(()=> {
    Axios.get("https://dog.ceo/api/breeds/image/random").then((response) =>{
      setDogs(response.data);
    })
  },[])
  // console.log(dogs.status);
  return (
    <div>
      <img src={dogs.message} />
    </div>
  )
}

export default Dogs
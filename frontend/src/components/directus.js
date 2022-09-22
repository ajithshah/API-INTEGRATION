import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
const Directus = () => {
  const [data, setData] = useState([]);

  useEffect(()=> {
    Axios.get("http://127.0.0.1:8080/items/Career").then((response) =>{
      setData(response.data);
    })
  },[])

  return (
    <div>
      {data.map((val, key) => {
          return(
            <div>
              <p key={key}>{val.id} {val.title}<button>Delete</button></p>
            </div> 
          )
        })}
        <button>hi</button>
    </div>
  )
}

export default Directus
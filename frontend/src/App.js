import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [number, setNumber]= useState("")
  const [name, setName]= useState("")
  const [address, setAddress]= useState("")
  const [userList, setUserList]= useState([])

  useEffect(()=> {
    Axios.get("http://localhost:8080/read").then((response) =>{
      setUserList(response.data);
      // setUserList
    })
  })

  const addtodb= ()=>{
    Axios.post("http://localhost:8080/insert", { 
      number: number, 
      name: name, 
      address: address})
  }
  return(
    <div>
      <h1>API</h1>
      <label>ID</label><input 
        type="number" 
          onChange={(event) => {
          setNumber(event.target.value);
        }}
        /><br/>
      <label>Name</label>
      <input 
        type="text" 
        onChange={(event) => {
          setName(event.target.value);
        }}
      /><br/>
      <label>Address</label>
      <input type="text" 
        onChange={(event) => {
          setAddress(event.target.value);
        }}
      /><br/>
      <input type="submit" onClick={addtodb}></input>
      <div>
        {userList.map((val, key) => {
          return(
            <div>
              <p>{val.id}" "{val.name}" "{val.address}</p>
            </div> 
          )
        })}
      </div>
    </div>
  )
}

export default App;
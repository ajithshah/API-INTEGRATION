import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './login.css';
function Login() {
  const [number, setNumber]= useState("")
  const [name, setName]= useState("")
  const [address, setAddress]= useState("")
  const [userList, setUserList]= useState([])

  useEffect(()=> {
    Axios.get("http://localhost:8080/read").then((response) =>{
      setUserList(response.data);
    })
  },[])

  const addtodb= ()=>{
    const req= { 
      number: number, 
      name: name, 
      address: address
    }
    console.log(req);
    Axios.post("http://localhost:8080/insert", req).then((response) => {
      console.log(response);
    })
  }
  return (
    <div className='app'>
      <h1>API INTEGRATION</h1>
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
      <p>User List</p>
      {userList.map((val, key) => {
          return(
            <div>
              <p>{val.id} {val.name} {val.address}</p>
            </div> 
          )
        })}
      </div>
      <p>{number}</p>
    </div>
  )
}

export default Login;

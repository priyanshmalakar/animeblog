import React, { useCallback, useState } from 'react'
import Navbar from '../component/Navbar'
import Axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Signup() {
  function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [cPassword , setCpassword] = useState("");

  // function handleInputs(e){
  //   setName(e.target.value);
  //   setEmail(e.target.value);
  //   setPassword(e.target.value);
  //   setCpassword(e.target.value);
  // }
  console.log(name)

  function handleSubmit(e){
    e.preventDefault();
    Axios.post("http://localhost:5000/signup",{
      name,
      email,
      password,
      cPassword
    })
  }

  return (
    <div>
      <Navbar />
       <div className='form-container'>
      <form className='main-form' method='post' action='/login'>
        <label>Name:</label>
        <input className='form-element' onChange={(e)=>{
            setName(e.target.value)
        }} type="text" placeholder='Enter your Name' />
        <label>Email:</label>
        <input className='form-element' type="email" onChange={(e)=>{
            setEmail(e.target.value)
        }}  placeholder='Enter your Email' />
        <label>Password:</label>
        <input className='form-element' onChange={(e)=>{
            setPassword(e.target.value)
        }} type="password" placeholder='Enter your Password' id="myInput" />
        <label>Confirm Password:</label>
        <input className='form-element' type="checkbox" onClick={myFunction} />Show Password
        <input className='form-element' onChange={(e)=>{
            setCpassword(e.target.value)
        }} type="password" placeholder='Confirm your Password'/>
        <button onClick={handleSubmit}  className='btn' type="submit">Sign up</button>
      </form>
      </div>
    </div>
  )
}

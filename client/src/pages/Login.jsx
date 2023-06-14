import React, { useState } from 'react'
import Navbar from '../component/Navbar';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function Login() {

  function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  const [email , setEmail]= useState("");
  const [password , setPassword] = useState("");
  const [auth , setAuth] = useState(false)
  
  const navigate = useNavigate()
  function handleSubmit(e){
    e.preventDefault();
    Axios.post("http://localhost:5000/login",{
      email,
      password
    }).then(res=>{
      alert(res.data.message)
      // handleAuth();
      if(res.status){
        console.log("ho gya bhai..")
        setAuth(true);
        navigate('/blogs')
    }
    })
  }
 
  return (
    <div>
      <Navbar/>
      <div className='form-container'>
      <form className='main-form' action='/' >
        <label>Email:</label>
        <input className='form-element' type="email" onChange={(e)=>{
            setEmail(e.target.value)
        }}  placeholder='Enter your Email' />
        <label>Password:</label>
        <input className='form-element' onChange={(e)=>{
            setPassword(e.target.value)
        }} type="password" placeholder='Enter your Password' id="myInput" />
        <input className='form-element' type="checkbox" onClick={myFunction} />Show Password
        <button className='btn' onClick={handleSubmit} type="submit">Log In</button>
      </form>
      </div>
    </div>
  )
}

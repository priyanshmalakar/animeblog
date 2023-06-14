import React, { useState } from 'react'
import Axios from 'axios';
import Navbar from '../component/Navbar';
export default function Create() {

  const [title , setTitle] = useState("");
  const [content , setContent] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    Axios.post("http://localhost:5000/create",{
      title,
      content
    }).then(res=>{
      alert(res.data.message);
    })

  }
 
  return (

    <div>
      <Navbar />
      <div className="form-container">
      <form class="main-form" action="/create">
      <h1>Create Blog</h1>
        <div class="form-group">
          <label>Title</label>
          <input class="form-control form-element" type="text" name="title" placeholder="enter Post Title" onChange={(e)=>{
            setTitle(e.target.value)
          }} autocomplete="off"/>
        </div>
        <div class="form-group">
          <label>Post</label>
          <textarea class="form-control form-element" name="content" cols="30" rows="5" autocomplete="off" onChange={(e)=>{
            setContent(e.target.value)
          }}></textarea>
        </div>
        <button type="submit" onClick={handleSubmit} class="btn btn-primary" name="button">publish</button>
      </form>
      </div>
    </div>
  )
}

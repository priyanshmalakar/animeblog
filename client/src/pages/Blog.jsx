import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar';
import Blogcards from './Blogcards';

export default function Blog() {

  const [saveBlogs , setSaveBlog] = useState('')
  
  useEffect(()=>{
    const fetchData = async()=>{
      const data = await axios.get('http://localhost:5000/blogs');
      setSaveBlog(data)
    }
    fetchData();
  },[]);
  // console.log(saveBlogs.data);

  return (
    <div>
      <Navbar/>
      <h1>Blogs</h1>
      <p>{saveBlogs.title}</p>
     { 
     saveBlogs && saveBlogs?.data.map(
       (Blogs)=>(
         <Blogcards 
         key = {Blogs._id}
      title = {Blogs.title}
      content = {Blogs.content}
      /> 
      ))}
    </div>
  )
}

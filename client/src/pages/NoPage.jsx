// const NoPage = () => {
//     return <h1 style={
//       {
//         display:"flex",
//         justifyContent:"center",
//         fontSize:"15rem",
//         alignItems:"center",
//         color:"brown",
//       }}>404</h1>;
//   };
  
//   export default NoPage;

import React from 'react'

export default function NoPage(props) {
  return (
    <div>
      { 
     saveBlogs && saveBlogs?.data.map(
       (Blogs)=>(
         <Blogcards 
         key = {Blogs._id}
      title = {Blogs.title}
      content = {Blogs.content}
      /> 
      ))}
      <h1>{props.title}</h1>
      <h1>{props.content}</h1>
    </div>
  )
}

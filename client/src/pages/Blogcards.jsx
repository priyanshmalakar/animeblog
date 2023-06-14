import React from 'react'

export default function Blogcards(props) {
    // const shortContent = props.content.substring(0,50)
    // const postpath = props.title.toLowerCase();
  return (
    <div className='blog-container'>
      <h2 className='blog-title'>{props.title}</h2>
      {/* <p>{shortContent}...<a href={postpath}>Read more</a></p> */}
      <p>{props.content}</p>
    </div>
  )
}

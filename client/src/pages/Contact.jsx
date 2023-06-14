import React from 'react'
import Details from '../component/Details';
import Navbar from '../component/Navbar';
export default function Contacts() {
  return (
    <div>
      <Navbar/>
      <Details
      mainTitle = "Contact"
      mainContent = "email : animeblog@gmail.com"
      />
    </div>
  )
}

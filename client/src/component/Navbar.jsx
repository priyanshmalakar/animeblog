import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <div className="navbar">
            <div className="navbar-container">
                <h1><a href="/">ANIME BLOG</a></h1>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/blogs">Blog</a></li>
                    <li><a href="/create">Create</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div className="navbar-main">
                <ul>
                    <li><a href="/login">Log in</a></li>
                    <li><a href="/signup">Sign up</a></li>
                </ul>
            </div>
        </div>
    </nav>
       
  )
}

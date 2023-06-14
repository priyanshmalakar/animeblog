import React from "react";
 
export default function Details(props) {
    return (
        <div className="t-container">
            <h1 className="t-title">{props.mainTitle}</h1>
            <p className="t-paragraph">{props.mainContent}</p>
            <button className="btn btn-sm btn-home"><a href="/login">Create Blog</a></button>
        </div>
    )
}
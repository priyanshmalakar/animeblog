import React from "react";

export default function Bgimg(){
    const myStyle={
        backgroundImage: "url(/img/helloworld.jpg)",
        height : "100vh",
        weight : "100vw",
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };
    return(
        <div style={myStyle}></div>
    )
}
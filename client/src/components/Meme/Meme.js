import React , { useState } from 'react'

const Like = () => {
    console.log("like");
};


const dontLike = () => {
    console.log("dontLike");
};



function Meme({name,likes}) {
  return (
    <>
    <div className="Meme">
        <h3>{name}</h3>
        <h5>{likes}</h5>
    
    
   <div className="cardBody"> </div>

   </div>


<div class="memeButtons">
<button onClick={Like}>Like</button>
<button onClick={dontLike}>Nope</button></div>

</>



  )
}

export default Meme;
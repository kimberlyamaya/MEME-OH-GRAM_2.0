import React , { useState } from 'react'


    const Like = () => {
        console.log("Like");
    };

    const Edit = () => {
        console.log("Edit");
    };


function NewMeme({name, likes}) {
    return (
<>
<div className="NewMeme">
        <h3>{name}</h3>
        <h5>{likes}</h5>

<div className="cardBody2"> </div>

</div>

<div class="newMemeButtons">
<button onClick={Like}>Like</button>
<button onClick={Edit}>Edit</button>
</div>


</>

    )
}


export default NewMeme;
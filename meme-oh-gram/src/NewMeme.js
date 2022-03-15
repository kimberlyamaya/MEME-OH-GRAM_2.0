import React , { useState } from 'react'


    const Like = () => {
        console.log("Like");
    };

    const Edit = () => {
        console.log("Edit");
    };


function NewMeme({name,}) {


    const [count, setCount] = useState(0);
    const [vote, setVote ] = useState(false);
    const [unVote, setUnVote ] = useState(true);
  
    const increment = () => {
      setCount(count + 1)
      setVote(true)
      setUnVote(false)
    }
  
      const decrement = () => {
        setCount(count - 1)
        setUnVote(true)
        setVote(false)
    }

    return (
<>
<div className="NewMeme">
        <h3>{name}</h3>
        <h5>{count}</h5>

<div className="cardBody2"> </div>

</div>

<div class="newMemeButtonLike newMemeButtonEdit">
{unVote&&<button onClick={increment}>Like</button>}
{vote&&<button  onClick={decrement}>Unlike</button>}
<button onClick={Edit}>Edit</button></div>



</>

    )
}


export default NewMeme;


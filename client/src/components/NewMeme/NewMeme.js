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
        {/* <h3><img className='memeImg' src={name} alt="meme" style={{width:"200px", height:"auto"}}/></h3>
        <h5>{count}</h5> */}
        <h3><img className='memeImg' src={name} alt="meme" /></h3>
        <h5>{count}</h5>

{/* <div className="cardBody2"> </div> */}



<div className="newMemeButtonLike newMemeButtonEdit">
{unVote&&<button className='like' onClick={increment}>Like</button>}
{vote&&<button className='unlike'  onClick={decrement}>Unlike</button>}
<button className='edit' onClick={Edit}>Edit</button>
{/* <button type="submit" className="btn btn-secondary btn-sm">submit</button> */}
{/* <button type="submit" className="btn btn-secondary btn-sm">submit</button> */}
</div>
</div>


</>

    )
}


export default NewMeme;
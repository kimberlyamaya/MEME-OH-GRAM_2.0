import React , { useState } from 'react'


    const Like = () => {
        console.log("Like");
    };

    const Edit = () => {
        console.log("Edit");
    };


// function NewMeme({name,}) {

// -ka added 3/16
function FindUser( {userMemes} ) {


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

//  -seths
//  <div className="NewMeme">
//         <h3><img src={name} alt="meme" style={{width:"200px", height:"auto"}}/></h3>
//         <h5>{count}</h5>

// <div className="cardBody2"> </div>

// </div> 
//  -seths end


//  -ka added 03/16 
<>
{userMemes &&
  userMemes.map(userMemes => (
    <>
    <div className="NewMeme">
        <h3><img src={userMemes.link} alt="meme" style={{width:"200px", height:"auto"}}/></h3>
        <h5>{count}</h5>

    <div className="cardBody2"> </div>

    </div>

    <div class="newMemeButtonLike newMemeButtonEdit">
    {unVote&&<button onClick={increment}>Like</button>}
    {vote&&<button  onClick={decrement}>Unlike</button>}
    <button onClick={Edit}>Edit</button></div>

    </>
  ))}
</>
)
}


export default FindUser;
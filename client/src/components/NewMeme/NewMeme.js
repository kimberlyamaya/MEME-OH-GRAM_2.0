import React , { useState } from 'react'


    const Like = () => {
        console.log("Like");
    };

    const Edit = () => {
        console.log("Edit");
    };

    // -ka added 318
    // import { useMutation } from '@apollo/client'
    // import { ADD_LIKE } from '../../utils/mutations'
    // -ka end


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

    // const deleteMeme = () => {

    // }

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
        <h5>{count} likes </h5>

    <div className="cardBody2"> </div>

    </div>

    <div class="newMemeButtonLike newMemeButtonEdit">
    {/* {unVote&&<button onClick={increment}>Like</button>}
    {vote&&<button  onClick={decrement}>Unlike</button>}
    <button onClick={Edit}>Edit</button> */}
    {/* <button onClick={deleteMeme}>Delete</button> */}
    </div>

    </>
  ))}
</>
)
}


export default FindUser;
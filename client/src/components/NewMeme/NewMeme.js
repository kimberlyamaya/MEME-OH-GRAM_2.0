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
        <h3><img className='memeImg' src={userMemes.link} alt="meme" /></h3>
        <h5>{count} likes </h5>


    <div className="newMemeButton ">
      {/*unVote&&<button className='like' onClick={increment}><h3>Like</h3></button>}
      {vote&&<button className='unlike'  onClick={decrement}><h3>Unlike</h3></button>*/}
      /*<button className='edit' onClick={Edit}><h3>Edit</h3></button><div className='count'><h5>{count}</h5></div>*/
    </div>
    </div>

    </>
  ))}
</>
)
}


export default FindUser;
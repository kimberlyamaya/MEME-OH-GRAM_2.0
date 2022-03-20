import React , { useState } from 'react'

// -ka added 318
import { useMutation } from '@apollo/client'
import { ADD_LIKE } from '../../utils/mutations'
// -ka end

const Like = () => {
    console.log("like");
};


const dontLike = () => {
    console.log("dontLike");
};





// function Meme({name}) {

// -ka added 3/16
function Meme({ allMemes }) {

  const [isRed, setRed] = useState(false);
  const [isPurple, setPurple] = useState(false);

  const [count, setCount] = useState(0);
  const [vote, setVote ] = useState(false);
  const [unVote, setUnVote ] = useState(false);

  const increment = () => {
    setCount(count + 1)
    setRed(!isRed)
    if (count === 0) {
      setVote(true)
    }
    setUnVote(false)

    // -ka trying to pass variables to add count mutation 
    // countLikes ({
    //   variables: {
    //     memeId: allMemes._link,
    //     likes: allMemes.likes
    //   }
    // })
  }

    const decrement = () => {
      setCount(count - 1)
      setPurple(!isPurple)
      if (count === 0) {
        setUnVote(true)
      }
      setVote(false)
  }


  return (
    <>
    {/* -seths */}
    {/* <div className="Meme">
        <h3>{name}</h3>
        <h5>{count}</h5>
    
    <div className="cardBody"> </div>
    </div> */}
    {/* -seths */}


    {/* -ka added 03/16  */}
    {/* {allMemes &&
    allMemes.map(allMemes => ( */}

    <div className="NewMeme">
        <h3><img src={allMemes.link} alt="meme" style={{width:"200px", height:"auto"}}/></h3>
        <h5>{count}</h5>

    <div className="cardBody2"> </div>

    </div>

    <div class="memeButtonLike memeButtonNope">

    <button disabled={vote} onClick={increment}>Like</button>

    <button disabled={unVote} onClick={decrement}>Nope</button></div>
    </>
  )
}

export default Meme;


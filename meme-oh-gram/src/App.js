import React, { useState } from 'react';
import './App.css';
import Home from './Home'
import Profile from './Profile'
import NewMeme from './NewMeme'
import Meme from './Meme';




function App() {

  const [count, setCount] = useState(0);

  const memes=["meme1", "meme2", "meme3", "meme4", "meme5", "meme6", "meme7", "meme8"]
  const newmeme=["newmeme1", "newmeme2", "newmeme3", "newmeme4", "newmeme5", "newmeme6", "newmeme7", "newmeme8"]

  // const [isRed, setRed] = useState(false);
  // const [isPurple, setPurple] = useState(false);

  
  // const [vote, setVote ] = useState(false);
  // const [unvote, setUnVote ] = useState(false);

  // const increment = () => {
  //   setCount(count + 1)
  //   setRed(!isRed)
  //   setVote(true)
  //   setUnVote(false)
  // }


  //   const decrement = () => {
  //     setCount(count - 1)
  //     setPurple(!isPurple)
  //     setUnVote(true)
  //     setVote(false)
  //   }
  
  return (


    <div className="App">

    

      <div>
        <Home />
        {/* <h3 className={isRed ? 'memeButtons' : ""}>Like</h3>
        <button disabled={vote} onClick={increment}>Like</button>
        <h5>{count}</h5>

        {/* <h3 className={isPurple ? 'memeButtons' : ""}>Nope</h3> */}
        {/* <button disabled={unvote} onClick={decrement}>Nope</button>
        <h5>{count}</h5> */} 

      {memes.map((meme)=>(
        <Meme name={meme}  />
      ))}


        {/* <Meme name="Meme1"  />
        <Meme name="Meme2"  />
        <Meme name="Meme3"  />
        <Meme name="Meme4"  /> */}

      </div>


      <Profile />

    {newmeme.map((newmeme)=>(
        <NewMeme name={newmeme}  />
      ))}

      {/* <NewMeme name="new1" likes="" />
      <NewMeme name="new2" likes="" />
      <NewMeme name="new3" likes="" />
      <NewMeme name="new4" likes="" /> */}

    </div>





  );
}

export default App;

<>

</>
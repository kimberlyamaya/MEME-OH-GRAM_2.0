import React, { useState } from 'react';
import './App.css';
import Home from './Home'
import Profile from './Profile'
import NewMeme from './NewMeme'
import Meme from './Meme';
import Navbar from '../src/components/Navbar/Navbar'

function App() {

  const [isRed, setRed] = useState(false);
  const [isPurple, setPurple] = useState(false);

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
    setRed(!isRed)
  
    // const increment = () => {
    //   setCount(count + 1)
    //   setPurple(!isPurple)

  }
  return (


    <div className="App">

    

      <div>
        <Home />
        <h3 className={isRed ? 'memeButtons' : ""}>Likez</h3>
        <button onClick={increment}>Liker</button>
        <h5>{count}</h5>



        <Meme name="Meme1" likes={count} />
        <Meme name="Meme2" likes={count} />
        <Meme name="Meme3" likes={count} />
        <Meme name="Meme4" likes={count} />

      </div>


      <Profile />


      <NewMeme name="new1" likes="" />
      <NewMeme name="new2" likes="" />
      <NewMeme name="new3" likes="" />
      <NewMeme name="new4" likes="" />

    </div>





  );
}

export default App;


<>

</>
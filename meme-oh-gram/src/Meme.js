import React , { useState } from 'react'

const Like = () => {
    console.log("like");
};


const dontLike = () => {
    console.log("dontLike");
};





function Meme({name}) {

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
    <div className="Meme">
        <h3>{name}</h3>
        <h5>{count}</h5>
    
    
   <div className="cardBody"> </div>

   </div>





<div class="memeButtonLike memeButtonNope">

<button disabled={vote} onClick={increment}>Like</button>

<button disabled={unVote} onClick={decrement}>Nope</button></div>





</>



  )
}

export default Meme;

// function Counter() {
//     const [counter, setCounter] = useState(0);
  
//     function increment() {
//       setCounter(counter+1);
//     }
//     return <div>
//     <p>{counter}</p>
//     <button onClick={increment}>Increment</button>
//     </div>;
//   }

// function Toggle() {
//     const [val, setVal] = useState("ON");
//     function toggle() {
//       setVal((val=="ON")?"OFF":"ON");
//     }
//     return <button onClick={toggle}>{val}</button>;
//   }

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
        {/* <h3>{name}</h3> */}
        {/* <h3><img className='memeImg' src={name} alt="meme" style={{width:"200px", height:"auto"}}/></h3> */}
       
    
    
    <img className='memeImg' src={name} alt="meme"/>
   {/* <div className="cardBody">  </div> */}



<div className="memeButtonLike memeButtonNope">


<button className='like'disabled={vote} onClick={increment}><h3>Like</h3></button>
<button className='unlike' disabled={unVote} onClick={decrement}><h3>Nope</h3></button><div className='count'>{count}</div></div>
   </div>









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
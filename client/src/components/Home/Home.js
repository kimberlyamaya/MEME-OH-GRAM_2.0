import React, { useState } from 'react';
import Memes from '../Meme/Meme';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from '../../client/src/App';
// import reportWebVitals from '../../client/src/reportWebVitals';


function Home() {
    
    const Like = () => {
        console.log("like");
    };


    const dontLike = () => {
        console.log("dontLike");
    };

    const [isRed, setRed] = useState(false);
    const [isPurple, setPurple] = useState(false);

    const [count, setCount] = useState(0);

    const increment = () => {
    setCount(count + 1)
    setRed(!isRed)
    }
  
    // const increment = () => {
    //   setCount(count + 1)
    //   setPurple(!isPurple)

    
    return (
        <div className="Home">
            <h1>Meme-Oh-Gram</h1>
            <p>like or comment below</p>

            <h3 className={isRed ? 'memeButtons' : ""}>Likez</h3>
            <button onClick={increment}>Liker</button>
            <h5>{count}</h5>



           <Memes name="Meme1" likes={count} />
           <Memes name="Meme2" likes={count} />
           <Memes name="Meme3" likes={count} />
           <Memes name="Meme4" likes={count} />

            <div>
   
        </div>

        </div>


    );
    
}




export default Home;
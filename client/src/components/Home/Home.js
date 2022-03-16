import React, {useState} from 'react';
import Meme from '../Meme/Meme'
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

    const [count, setCount] = useState(0);

    const memes=["meme1", "meme2", "meme3", "meme4", "meme5", "meme6", "meme7", "meme8"]
    
    return (

        <div className="Home">
            <h1>Meme-Oh-Gram</h1>
            <p>like or comment below</p>

            
        {memes.map((meme)=>(
          <Meme name={meme}  />
        ))}

            <div>
   
        </div>

        </div>


    );
    
}




export default Home;
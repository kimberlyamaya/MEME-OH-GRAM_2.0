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

    const memes=["https://i.imgflip.com/8k0sa.jpg", "https://i.imgflip.com/vdz0.jpg", "https://i.imgflip.com/1ooaki.jpg", "https://i.imgflip.com/1bh9.jpg", "https://i.imgflip.com/1ihzfe.jpg", "https://i.imgflip.com/261o3j.jpg", "https://i.imgflip.com/26br.jpg", "https://i.imgflip.com/2kbn1e.jpg"]
    
    return (
        <>
        <div className="Home">
            {/* <h1>Meme-Oh-Gram</h1> */}
            <h2>like or comment below</h2>

            
        {memes.map((meme)=>(
          <Meme name={meme}  />
        ))}

            <div>
   
        </div>

        </div>

        </>
    );
    
}




export default Home;
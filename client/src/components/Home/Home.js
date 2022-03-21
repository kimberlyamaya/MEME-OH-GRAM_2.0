import React, {useState} from 'react';
import Meme from '../Meme/Meme'
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from '../../client/src/App';
// import reportWebVitals from '../../client/src/reportWebVitals';

// -ka added 03/16
import { useQuery } from '@apollo/client';
import { QUERY_ALL_MEMES } from '../../utils/queries';
// -ka end


const Home = () => {
    
    const Like = () => {
        console.log("like");
    };


    const dontLike = () => {
        console.log("dontLike");
    };

    const [count, setCount] = useState(0);


  // -ka added 3/16
    const { loading, error, data } = useQuery(QUERY_ALL_MEMES)
    // -ka ended

    const allMemes =  data?.allMemes || []

    // -seths 
    // const memes=["https://i.imgflip.com/8k0sa.jpg", "https://i.imgflip.com/vdz0.jpg", "https://i.imgflip.com/1ooaki.jpg", "https://i.imgflip.com/1bh9.jpg", "https://i.imgflip.com/1ihzfe.jpg", "https://i.imgflip.com/261o3j.jpg", "https://i.imgflip.com/26br.jpg", "https://i.imgflip.com/2kbn1e.jpg"]
    // -seths end

    
    if (loading) return <p>loading...</p>
    if (error) return <p>I'm working on it..</p>
    return (
        <>
        <div className="Home">
            {/* <h1>Meme-Oh-Gram</h1> */}
            <h2>Like and share your favorite memes</h2>

        {/* - seth start */}
        {/* {memes.map((meme)=>(
          <Meme name={meme}  />
        ))} */}
        {/* - seth end */}

        {/* -ka added 03/16 */}
        {allMemes.map((allMemes) => (
            <Meme allMemes={allMemes} />
        ))}

        {/* -ka end */}

        </div>

        </>
    );
    
}




export default Home;
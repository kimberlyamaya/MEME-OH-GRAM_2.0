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
    // const memes=["meme1", "meme2", "meme3", "meme4", "meme5", "meme6", "meme7", "meme8"]
    // -seths end
    
    if (loading) return <p>loading...</p>
    if (error) return <p>I'm working on it..</p>
    return (
        <>
        <div className="Home">
            <h1>Meme-Oh-Gram</h1>
            <p>like or comment below</p>

        {/* - seth start */}
        {/* {memes.map((meme)=>(
          <Meme name={meme}  />
        ))} */}
        {/* - seth end */}

        {/* -ka added 03/16 */}
        <Meme allMemes={allMemes} />
        {/* -ka end */}

        </div>

        </>
    );
    
}




export default Home;
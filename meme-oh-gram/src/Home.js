import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from '../../client/src/App';
// import reportWebVitals from '../../client/src/reportWebVitals';


function Home() {
    
    const Like = () => {
        console.log("like");
    };

    const Comment = () => {
        console.log("Comment");
    };

    const dontLike = () => {
        console.log("dontLike");
    };
    
    return (
        <div>
            <h1>Meme-Oh-gram</h1>
            <p>like or comment below</p>




            <button onClick={Like}>Like</button>
            <button onClick={Comment}>Comment</button>
            <button onClick={dontLike}>dontLike</button>

        </div>


    );
    
}




export default Home;
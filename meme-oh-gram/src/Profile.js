import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from '../../client/src/App';
// import reportWebVitals from '../../client/src/reportWebVitals';



function Profile() {
    
    const Comment = () => {
        console.log("Comment");
    };

    const Like = () => {
        console.log("Like");
    };

    
    return (
        <div className="Profile">
            <h2>Username</h2>
            <h4>'Location'</h4>




            <button onClick={Like}>Like</button>
            <button onClick={Comment}>Comment</button>


        </div>




    );


}

export default Profile;


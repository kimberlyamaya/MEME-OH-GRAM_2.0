import React from 'react';
import NewMeme from '../Meme/Meme'
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from '../../client/src/App';
// import reportWebVitals from '../../client/src/reportWebVitals';



function Profile() {
    
    // const Edit = () => {
    //     console.log("Edit");
    // };

    // const Like = () => {
    //     console.log("Like");
    // };

    // const [user, setUser] = useState ([
//     {Username: ' US',
//     location: ' Here',
//     Memes: ['']
// ]);

 // const [user, setUser] = useState ([
//     {Username: "US", location: "Here", Memes: [''],
//     {Username: "US", location: "Here", Memes: [''],
//     {Username: "US", location: "Here", Memes: [''],
// ]);

// {users.map(user => (
//     <Meme name={user.Username} location={user.location} Memes{user.Memes} />
// ))}


    
    return (
        <div className="Profile">
            <h2>Username</h2>
            <h4>'Info'</h4>

            <NewMeme name="new1" likes="" />
            <NewMeme name="new2" likes="" />
            <NewMeme name="new3" likes="" />
            <NewMeme name="new4" likes="" />


<div>
    <div></div>
</div>


        </div>




    );


}

export default Profile;


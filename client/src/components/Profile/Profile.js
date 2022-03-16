import React from 'react';
import NewMeme from '../NewMeme/NewMeme'
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from '../../client/src/App';
// import reportWebVitals from '../../client/src/reportWebVitals';



function Profile() {

    const newmeme=["newmeme1", "newmeme2", "newmeme3", "newmeme4", "newmeme5", "newmeme6", "newmeme7", "newmeme8"]
    
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
        {newmeme.map((newmeme)=>(
        <NewMeme name={newmeme}  />
        
        ))}

    <div>
    <div></div>
</div>


        </div>




    );


}

export default Profile;
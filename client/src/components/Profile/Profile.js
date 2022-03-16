import React from 'react';
import NewMeme from '../Meme/Meme'
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from '../../client/src/App';
// import reportWebVitals from '../../client/src/reportWebVitals';

// -ka added 03/14
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
// -ka end


function Profile() {

    // -ka added 03/14
    const { data } = useQuery(QUERY_ME)

    console.log(data)

    const userData = data?.me || []

    console.log(userData)
    // -ka end
    
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
            {/* -ka map username 3/14 */}
            <h2>{userData.username}</h2>
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


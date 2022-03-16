import React from 'react';
import NewMeme from '../NewMeme/NewMeme';

// -ka added 03/14
import { useQuery } from '@apollo/client';

// ****** auth not working ******
// import { QUERY_ME } from '../../utils/queries';
// import Auth from '../../utils/auth';
// ****** auth not working ******

import { QUERY_ALL_MEMES } from '../../utils/queries';

// -ka end

// import ReactDOM from 'react-dom';
// import './index.css';
// import App from '../../client/src/App';
// import reportWebVitals from '../../client/src/reportWebVitals';


const Profile = () => {

    // -ka added 03/14
    // ****** auth not working ******
    // const { data: userData } = useQuery(QUERY_ME)
    // ****** auth not working ******

    const { loading, error, data } = useQuery(QUERY_ALL_MEMES)

    const allMemes =  data?.allMemes || []

    console.log(data)
    console.log(error)
    console.log(JSON.stringify(error, null, 2));

    const newmeme=["newmeme1", "newmeme2", "newmeme3", "newmeme4", "newmeme5", "newmeme6", "newmeme7", "newmeme8"]

    // ****** auth not working ******
    // const loggedIn = Auth.loggedIn();
    // ****** auth not working ******
    
    if (loading) return <p>loading...</p>
    if (error) return <p>I'm working on it..</p>
    return (
        <>
        {/* ****** auth not working ****** */}
        {/* {loggedIn && userData ? (   */}
        {/* ****** auth not working ****** */}

        <div className="Profile">
 
         {/* ****** auth not working ****** */}
        {/* <h2>{userData.me.username}</h2> */}
        {/* ****** auth not working ****** */}

        {/* <p gotitMemes={profileMemes.allMemes.link}></p> */}

        <h2>username</h2>
        <h4>'Info'</h4>

        {/* - seth start */}
        {/* {newmeme.map((newmeme)=>(
        <NewMeme name={newmeme}  />
        ))} */}
        {/* - seth end */}


        {/* -ka added 03/16 */}
        <NewMeme allMemes={allMemes} />
        {/* -ka end */}


        </div> 
        {/* ****** auth not working ****** */}
        {/* ) : null } */}
        {/* ****** auth not working ****** */}

        </>

    );

};

export default Profile;
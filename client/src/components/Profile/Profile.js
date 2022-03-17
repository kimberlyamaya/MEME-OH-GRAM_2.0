import React from 'react';
import NewMeme from '../NewMeme/NewMeme';

import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';

// ****** me query not working ******
// import { QUERY_ME } from '../../utils/queries';
// ****** me query not working ******

import { QUERY_ALL_MEMES } from '../../utils/queries';

// -ka end

// import ReactDOM from 'react-dom';
// import './index.css';
// import App from '../../client/src/App';
// import reportWebVitals from '../../client/src/reportWebVitals';


const Profile = () => {

    const token = Auth.getToken()

    // ****** me query not working ******

    // const { meLoading, meError, meData } = useQuery(QUERY_ME)
    // const userData = meData?.me || []

    // ****** me query not working******

    // console.log(userData)
    // console.log(meError)
    // console.log(JSON.stringify(meError, null, 2));



    const { loading, error, data } = useQuery(QUERY_ALL_MEMES)
    const allMemes =  data?.allMemes || []

    // console.log(data)
    // console.log(error)
    // console.log(JSON.stringify(error, null, 2));

    // -- seths
    // const newmeme=["newmeme1", "newmeme2", "newmeme3", "newmeme4", "newmeme5", "newmeme6", "newmeme7", "newmeme8"]
    // -- seths end

    // ****** auth not working ******
    // const loggedIn = Auth.loggedIn();
    // ****** auth not working ******

   
    if (loading ) return <p>loading...</p>
    if (error ) return <p>I'm working on it..</p>

    return (
        <>
        {/* ****** auth not working ****** */}
        {/* {loggedIn && userData ? (   */}
        {/* ****** auth not working ****** */}

        {token && (<p>you're logged in!</p>)}
        <div className="Profile">
 
         {/* ****** auth not working ****** */}
        {/* <h2>{userData.me.username}</h2> */}
        {/* ****** auth not working ****** */}

        <h2>Username</h2>
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
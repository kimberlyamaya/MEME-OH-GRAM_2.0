import React from 'react';
import { Navigate } from 'react-router-dom';

// -seths
// import NewMeme from '../NewMeme/NewMeme';
// -seths end

import { useParams } from 'react-router-dom' 

import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';


// add quey all memes
import { QUERY_FIND_USER } from '../../utils/queries';


const Profile = () => {

    const token = Auth.getToken()

    const { username: userParam } = useParams();

    const { loading, error, data } = useQuery(QUERY_FIND_USER, {
        variables: { username: userParam },
      });

    const findUser = data?.findUser || {}

    console.log(loading)
    console.log(error)
    console.log(JSON.stringify(error, null, 2));
    console.log(data)
    console.log(findUser)


    // -- seths
    // const newmeme=["https://i.imgflip.com/3qqcim.png", "https://i.imgflip.com/1bhf.jpg", "https://i.imgflip.com/2odckz.jpg", "https://i.imgflip.com/23ls.jpg", "https://i.imgflip.com/4acd7j.png", "https://i.imgflip.com/1ihzfe.jpg", "https://i.imgflip.com/vdz0.jpg", "https://i.imgflip.com/1bh9.jpg"]
    // -- seths end
   
    if (loading ) return <p>loading...</p>
    if (error ) return <div className="Profile"> <p>You need to be logged in to see this. Click here to <a href="/signupForm">signup!</a></p>  </div>


    return (
        <>
        {/* if token > route to ProfileUsername, no token > display message to signhup */}

        {token && (
        <Navigate to={`profile/${findUser.username}`} />  )}

        {!token && (
        
        <div className="Profile">
        <p>You need to be logged in to see this. Click here to <a href="/signupForm">signup!</a></p>
        </div>
        
        )}

        
        </>

    );
};

export default Profile;
import React from 'react';
import NewMeme from '../NewMeme/NewMeme';

import { useParams } from 'react-router-dom' 

import { useQuery } from '@apollo/client';

// add quey all memes
import { QUERY_FIND_USER } from '../../utils/queries';


const Profile = () => {

    const { username: userParam } = useParams();

    const { loading, error, data } = useQuery(QUERY_FIND_USER, {
        variables: { username: userParam },
      });

    const findUser = data?.findUser || {}

    // console.log(findUser)


    // -- seths
    // const newmeme=["newmeme1", "newmeme2", "newmeme3", "newmeme4", "newmeme5", "newmeme6", "newmeme7", "newmeme8"]
    // -- seths end
   
    if (loading ) return <p>loading...</p>
    if (error ) return <p>I'm working on it..</p>

    return (
        <>
          
        <div className="Profile">
 
        <h2>{findUser.username}</h2>
        <h4>You have created {findUser.memes.length} memes!</h4>

        {/* - seth start */}
        {/* {newmeme.map((newmeme)=>(
        <NewMeme name={newmeme}  />
        ))} */}
        {/* - seth end */}


        {/* -ka added 03/16 */}
        <NewMeme userMemes={findUser.memes} />

        </div>
        </>

    );
};

export default Profile;
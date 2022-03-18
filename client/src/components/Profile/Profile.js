import React from 'react';
import NewMeme from '../NewMeme/NewMeme';

// ****** me query not working ******
import { useParams } from 'react-router-dom' 
// ****** me query not working ******

import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';

// ****** me query not working ******
// import { QUERY_ME } from '../../utils/queries';
// ****** me query not working ******

// add quey all memes
import { QUERY_FIND_USER } from '../../utils/queries';


// import ReactDOM from 'react-dom';
// import './index.css';
// import App from '../../client/src/App';
// import reportWebVitals from '../../client/src/reportWebVitals';


const Profile = () => {

    const token = Auth.getToken()

    // ****** me query not working******

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

    // ****** me query not working******


    // took away all memes  
    // const { loading, error, data } = useQuery(QUERY_ALL_MEMES)
    // const allMemes =  data?.allMemes || []

    // console.log(data)
    // console.log(error)
    // console.log(JSON.stringify(error, null, 2));

    // -- seths
    // const newmeme=["newmeme1", "newmeme2", "newmeme3", "newmeme4", "newmeme5", "newmeme6", "newmeme7", "newmeme8"]
    // -- seths end
   
    // took away all memes  
    // if (loading ) return <p>loading...</p>
    // if (error ) return <p>I'm working on it..</p>

    return (
        <>
        {/* if token > display memes, no token > display message to signhup */}

        {token && (
          
        <div className="Profile">
        <p>you're logged in!</p> 
 
        <h2>Username</h2>
        <h4>'Info'</h4>

        {/* - seth start */}
        {/* {newmeme.map((newmeme)=>(
        <NewMeme name={newmeme}  />
        ))} */}
        {/* - seth end */}


        {/* -ka added 03/16 */}
         {/* took away all memes   */}
        {/* <NewMeme allMemes={allMemes} /> */}
        {/* -ka end */}

        </div> )}

        {!token && (
        
        <div className="Profile">
        <p>You need to be logged in to see this. Click here to <a href="/signupForm">signup!</a></p>
        </div>
        
        )}

        
        </>
    );
};

export default Profile;
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

    // const { data } = useQuery(QUERY_ALL_MEMES)

    const newmeme=["https://i.imgflip.com/3qqcim.png", "https://i.imgflip.com/1bhf.jpg", "https://i.imgflip.com/2odckz.jpg", "https://i.imgflip.com/23ls.jpg", "https://i.imgflip.com/4acd7j.png", "https://i.imgflip.com/1ihzfe.jpg", "https://i.imgflip.com/vdz0.jpg", "https://i.imgflip.com/1bh9.jpg", "https://i.imgflip.com/8k0sa.jpg"]

    // ****** auth not working ******
    // const loggedIn = Auth.loggedIn();
    // ****** auth not working ******
    
    
    return (
         <div className="Profile">
        {/* ****** auth not working ****** */}
        {/* {loggedIn && userData ? (   */}
        {/* ****** auth not working ****** */}

       
 
         {/* ****** auth not working ****** */}
        {/* <h2>{userData.me.username}</h2> */}
        {/* ****** auth not working ****** */}
        <div>
        <h2>SantiTest</h2>
        <h4>'Info'</h4><a href="./meme" className="btn btn-primary stretched-link "><h4>Meme generator</h4></a></div>
        
        
        

        {/* <p>{data.link}</p> */}

        {newmeme.map((newmeme)=>(
        <NewMeme name={newmeme}  />
        
        ))}
    

        
        {/* ****** auth not working ****** */}
        {/* ) : null } */}
        {/* ****** auth not working ****** */}
</div> 
      

    );

};

export default Profile;
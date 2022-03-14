// *************** SANTI I ***************

// import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import {setContext} from "@apollo/client/link/context"
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Memes from "./components/Meme/Meme";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupForm/Signup";
import Profile from "./components/Profile/Profile";
import MemeGenerator from "./components/Meme-Generator";
// import {ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink
// }from '@apollo/client';
// const httpLink = createHttpLink({
//   uri: '/graphql'
// });
function App() {
  return (
    // <ApolloProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/memes" element={<Memes />} />
        <Route path="/loginForm" element={<LoginForm />} />
        <Route path="/signupForm" element={<SignupForm />} />
        <Route path="/logout" element={<LoginForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/meme" element={<MemeGenerator />} />
      </Routes>
    </Router>
  );
  {
    /* </ApolloProvider> */
  }
  // );
}

export default App;

// *************** SETHS ***************

// import React, { useState } from 'react';
// import './App.css';
// import Home from './Home'
// import Profile from './Profile'
// import NewMeme from './NewMeme'
// import Meme from './Meme';
// import Navbar from '../src/components/Navbar/Navbar'

// function App() {

//   const [isRed, setRed] = useState(false);
//   const [isPurple, setPurple] = useState(false);

//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1)
//     setRed(!isRed)

//     // const increment = () => {
//     //   setCount(count + 1)
//     //   setPurple(!isPurple)

//   }
//   return (

//     <div className="App">

//       <div>
//         <Home />
//         <h3 className={isRed ? 'memeButtons' : ""}>Likez</h3>
//         <button onClick={increment}>Liker</button>
//         <h5>{count}</h5>

//         <Meme name="Meme1" likes={count} />
//         <Meme name="Meme2" likes={count} />
//         <Meme name="Meme3" likes={count} />
//         <Meme name="Meme4" likes={count} />

//       </div>

//       <Profile />

//       <NewMeme name="new1" likes="" />
//       <NewMeme name="new2" likes="" />
//       <NewMeme name="new3" likes="" />
//       <NewMeme name="new4" likes="" />

//     </div>

//   );
// }

// export default App;

// <>

// </>

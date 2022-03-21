// *************** SANTI I ***************
import "./App.css";
// import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Home from './components/Home/Home';
import About from "./components/About/About";
import Memes from "./components/Meme/Meme";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupForm/Signup";
import Profile from "./components/Profile/Profile";
import MemeGenerator from "./components/Meme-Generator";
import NoMatch from './components/NoMatch/NoMatch';
import ProfileUsername from "./components/ProfileUsername/ProfileUsername"


// -ka added 3/14
import {ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
}from '@apollo/client';

import {setContext} from "@apollo/client/link/context"

const httpLink = createHttpLink({
  uri: '/graphql'
  // uri: 'http://localhost:3007/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// -ka end

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
      <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/home" element={<Home/>}/>
        {/* *** -ka added path 3/18 *** */}
        <Route exact path="/profile/home" element={<Home/>}/>
        {/* *** -ka added path 3/18 *** */}
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/memes" element={<Memes/>}/>
        <Route exact path="/loginForm" element={<LoginForm/>}/>
        <Route exact path="/signupForm" element={<SignupForm/>}/>
        <Route exact path="/logout" element={<LoginForm/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route path="/meme" element={<MemeGenerator/>} />
        <Route path="/profile/meme" element={<MemeGenerator/>} />
        {/* *** -ka added path 3/18 *** */}
        <Route exact path="/profile/profile" element={<Profile/>}/>
        {/* *** -ka added path 3/18 *** */}
        {/* *** -ka passing username into profile route *** */}
        <Route exact path="/profile/:username" element={<ProfileUsername/>}/>
        {/* *** -ka passing username into profile route *** */}

        <Route path="*" element={<NoMatch/>}/>        
      </Routes>
      </>
      </Router>
      <Footer/>
    </ApolloProvider>
  );
}

export default App;
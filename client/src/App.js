// *************** SANTI I ***************
import "./App.css";
// import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Home from './components/Home/Home';
import About from "./components/About/About";
import Memes from "./components/Meme/Meme";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupForm/Signup";
import Profile from "./components/Profile/Profile";
import MemeGenerator from "./components/Meme-Generator";

// -ka added 3/14
import {ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
}from '@apollo/client';

import {setContext} from "@apollo/client/link/context"

const httpLink = createHttpLink({
  uri: '/graphql'
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
    </ApolloProvider>
  );
}

export default App;
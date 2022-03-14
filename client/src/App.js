// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import {setContext} from "@apollo/client/link/context"
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Home from './components/Home/Home';
import About from "./components/About/About";
import Memes from "./components/Memes/Memes";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupForm/Signup";
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
    <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/memes" element={<Memes/>}/>
    <Route path="/loginForm" element={<LoginForm/>}/>
    <Route path="/signupForm" element={<SignupForm/>}/>
    <Route path="/logout" element={<LoginForm/>}/>



    </Routes>
</Router>);
{/* </ApolloProvider> */}
  // );
  }

export default App;

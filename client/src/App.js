// import logo from './logo.svg';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
// import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Home from './components/Home/Home';
import About from "./components/About/About";
import Memes from "./components/Memes/Memes";
import Login from "./components/LoginForm/LoginForm";
function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/" element={<Home/>}/>

    </Routes>
</Router>
  );
}

export default App;

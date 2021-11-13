import React from "react";
import NavBar from "./components/generic/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import './App.css'
import { Container } from "react-bootstrap";

const App = () =>{
    return(
        <>
        <NavBar/>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/test" element={<div>kasdkahdkas</div>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;
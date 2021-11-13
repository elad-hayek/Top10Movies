import React from "react";
import NavBar from "./components/generic/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import './App.css'

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
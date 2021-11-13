import React, { lazy, Suspense } from "react";
import Spinner from 'react-bootstrap/Spinner'
import NavBar from "./components/generic/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import ErrorBoundary from "./components/generic/ErrorBoundary/ErrorBoundary";

const Home = lazy(() => import("./components/pages/Home/Home"))

const MySpinner = () =>{
    return(
        <div className="spinner-container">
            <Spinner animation="border" role="status" variant="light" style={{height:100, width:100}}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}

const App = () =>{
    return(
        <>
        <NavBar/>
            <Router>
                <ErrorBoundary>
                    <Suspense fallback={<MySpinner />}>
                        <Routes>
                            <Route exact path="/" element={<Home/>}/>
                        </Routes>
                    </Suspense>
                </ErrorBoundary>B
            </Router>
        </>
    );
}

export default App;
import React from "react";
import Home from "./Screens/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App(){
    return(
       <Router>
        <Routes>
            <Route path="/" Component={Home} />
        </Routes>
       </Router>
    )
}
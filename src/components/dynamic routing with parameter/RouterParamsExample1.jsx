// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import CompParams from "./CompParams";

export default function RouterParamsExample1() {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />}/>
                    <Route path="/about/:name/:id" element={<CompParams/>}/>
                    <Route path="/about/:name" element={<CompParams/>}/>
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
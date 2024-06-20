// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Team from "./Team";
import Company from "./Company";
import NotFound from "./NotFound";

export default function RouterExample1() {
    return (
        // <BrowserRouter>
        //     <div>
        //         {/* <Navbar /> */}
        //         <Routes>
        //             <Route path="/" element={<Home />} />
        //             {/* <Route path="/about" element={<About />}>
        //                 <Route path="team" element={<Team />} />
        //                 <Route path="company" element={<Company />} />
        //             </Route> */}
        //             <Route path="/contact" element={<Contact />} />
        //         </Routes>
        //     </div>
        // </BrowserRouter>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}>
                    <Route path="team" element={<Team />} />
                    <Route path="company" element={<Company />} />
                </Route>
                <Route path="/contacts" element={<Contact />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
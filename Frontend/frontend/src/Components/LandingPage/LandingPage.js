import React from "react";
import Analytic from "./Analytic";
import Cards from "./Cards";
import Footer from "./Footer";
import Hero from "./hero";
import Navbar from "./Navbar";
import Reminder from "./Reminder";

const LandingPage=()=>{
    return(
        
        <div className="overflow-auto h-screen scrollbar-hide">
        <Navbar/>
        <Hero/>
        <Analytic/>
        <Reminder/>
        <Cards/>
        <Footer/>
        </div>
    )
}
export default LandingPage
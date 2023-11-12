import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar =()=>{
    const navigate = useNavigate()
    return(
        <div className=" flex justify-between text-white items-center h-24 mx-auto px-4 ">
            <h1 className=" w-full text-3xl  font-bold text-[#4cc69f] ">FINANCE.</h1>
            <ul className="flex">
                <li className="p-4 cursor-pointer hover:text-[#86e2c5]">Home</li>
                <li className="p-4 cursor-pointer hover:text-[#86e2c5]">Account</li>
                <li onClick={()=>{navigate('/login')}} className="p-4 cursor-pointer hover:text-[#86e2c5] whitespace-nowrap">Sign In</li>
                <li className="p-4 cursor-pointer hover:text-[#86e2c5]  whitespace-nowrap" ><button onClick={()=>{navigate('/register')}} className="bg-slate-100 rounded hidden lg:inline-block  text-black mx-auto w-[150px] h-8 mt-[-10px] hover:bg-[#86e2c5] ">Get Started</button></li>
                
            </ul>
        </div>
    )
}

export default Navbar
import React from "react";
import{
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
    FaFacebookSquare
} from 'react-icons/fa'

const Footer = ()=>{
    return(
        <div className="max-w-[1240px] mx-auto  text-white grid md:grid-cols-3 gap-8 py-14 px-14">
           <div>
                <h1 className="mx-2 my-2 w-full text-3xl  font-bold text-[#4cc69f] ">FINANCE.</h1>
                <p className="mx-2">Take your finances to the next levels! Don't hesite, money matters.</p>

                <div className="flex justify-between md:w-[75%] my-6 mx-3">
                        <FaFacebookSquare size={30}/>
                        <FaTwitterSquare size={30}/>
                        <FaInstagram size={30}/>
                        <FaGithubSquare size={30}/>
                </div>
           </div>

           <div className="lg:mt-[50px]">
               <h1>Contact</h1>
               <h1>Phone - 9665545749</h1>
               <h1>Email - blanktextdemo@gmail.com</h1>
           </div>
           <div className="lg:mt-[50px]">
               <h1>Privacy</h1>
               <h1>Terms</h1>
               <h1>Condition</h1>
           </div>
        </div>
    )
}

export default Footer
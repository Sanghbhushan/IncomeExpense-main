import React from "react";
import Typewriter from 'typewriter-effect';
import { useNavigate } from "react-router-dom";
import star from './assets/star.jpg'

const Hero = ()=>{  
    const navigate = useNavigate()
    return(
        
        <div className="text-white">
            
            <div className="max-w-[800px] mt-[-96px] w-full , h-screen mx-auto text-center flex flex-col justify-center">
                <p className=" text-[#4cc69f] font-bold p-2">
                    GROWING WITH DATA ANALYTICS
                </p>

                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
                    Grow with data.
                </h1>

                <div className="flex justify-center items-center">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold">
                        Fast, flexible financing for</p>
                       <div className="md:text-5xl sm:text-4xl text-xl font-bold pl-3">
                       <Typewriter 
                                                options={{
                                                    strings: ['BTB', 'BTC', 'SASS'],
                                                    autoStart: true,
                                                    loop: true,
                                                }}
                                                />
                    
                       </div>
                         
                </div> 

                <p className="md:text-2xl text-xl font-bold text-gray-500">
                    Monitor your data analytics to increase revenue.
                </p>

                <button onClick={()=>{navigate('/register')}} className="bg-[#4cc69f] w-[200px] rounded-md font-medium mx-auto py-3 text-black hover:bg-[#86e2c5] mt-3">Get Started</button>
            
            </div>
        </div>
    )
}

export default Hero
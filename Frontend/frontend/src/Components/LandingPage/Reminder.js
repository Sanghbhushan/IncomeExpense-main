import React from "react";

const Reminder = ()=>{
    return(
        
        <div className="w-full py-16 text-white px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3" >
                <div className="lg:col-span-2">
                    <h1 className="flex flex-col sm:text-3xl text-2xl font-bold py-2">Want's to notify when new update release</h1> 
                    <p>Sign up to over website or enter your mail</p>
                </div>

                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Enter Email" />
                        <button className="bg-[#4cc69f] text-black rounded-md font-medium w-[200px] ml-4 mt-4 py-2 mb-4 hover:bg-[#86e2c5]">Notify Me</button>

                    </div>
                    <p>We care about the protection of your data. Read our <span className="text-[#4cc69f]">Privacy Policy.</span></p>
                </div>


            </div>
    
        </div>
    )
}

export default Reminder
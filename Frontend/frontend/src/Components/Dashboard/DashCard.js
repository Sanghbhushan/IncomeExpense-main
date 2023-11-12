import React from "react";

const DashCard = ({name,p,icon,children})=>{
    
    return(
        <div className="text-white w-autos bg-[#0E1525] py-7 rounded-xl text-center flex justify-center">
                
                <div className="bg-[#5c74ae20] px-4 py-4 mx-auto rounded-xl hover:rotate-12 duration-300">{icon}</div>
                <h1 className="font-semibold text-2xl m-auto flex-col">{name}
                <p className="flex-none m-auto text-sm">{p}</p>
                
                </h1>
                
                <div className="flex-col"> {children}</div>
                
                
        <div>
           
        </div>

                
        </div>
    )
}
export default DashCard
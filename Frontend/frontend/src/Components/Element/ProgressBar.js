import React from "react";

const ProgressBar =({name, amount, percent, color})=>{
    
    return<>
        <div className="my-4">
                <div className="flex flex-auto mx-4 my-1 font-semibold text-[#34a2e2df]">
                    <h1>{name}
                        <span className="text-white ml-2 font-normal text-base">{amount} </span> 
                    
                    </h1>
                    <span className={`text-[#42dd8d]   ml-auto mr- font-normal text-base`} >{percent} %</span> 
                </div>

                <div className="h-1 px-full bg-[#283a5ddf] mx-4 rounded-full flex ">
                        <div className={`${`bg-${color}`} h-1 rounded-l-full duration-1000`} style={{ width: `${percent}%` }}></div>
                        {/* <div  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div> */}
                </div>


                {/* <div className="relative pt-1">
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                       
                    </div>
                    </div> */}


        </div>
    </>
}

export default ProgressBar
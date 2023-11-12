import React, { useEffect, useState } from "react";
import BarChart from "../Charts/BarChart";
import DonutChart from "../Charts/DonutChart";
import LineChart from "../Charts/LineChart";
import SingleBar from "../Charts/SingleBar";
import SingleLine from "../Charts/SingleLine";

const DMY =({d, name, wise})=>{
    

    
    return <>
    
     <div className=" bg-[#0e1525ad] rounded-2xl ">
            <h1 className="text-lg text-[#3bf0b793] font-semibold px-5  bg-gradient-to-r from-[#1fa15e20] to-[#c82ee720] rounded-t-2xl  py-2 ">{wise}.</h1>

            <div className="flex  h-56 w-auto justify-center   ">
                    <div className="mx-auto py-2 w-[54%]">
                  
                    <SingleLine data={Object.values(d.Data)} labels={['Avg', 'Max', 'Min', 'Total']} name={name} />
                    </div  >
                    
                    <div className="mx-auto  align-middle items-center h-48 my-auto w-[44%]" >
                  
                    <SingleBar labels={['Avg', 'Max', 'Min', 'Total']} chartdata={[Object.values(d.Data)]} name={name}/>
                    </div>

                   
            </div> 
    </div>
    </>
}

export default DMY
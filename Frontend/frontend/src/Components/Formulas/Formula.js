import React from "react";
import { FormulaData } from "./FormulaData";
import { useNavigate } from "react-router-dom";
const Formula =()=>{
   const navigate = useNavigate()
    return<>
    <div className="mt-2">
          <div>
                <h1 className="text-white text-3xl font-semibold ">Financial Calculators.</h1>
                <p className="text-[#2ad1e4b4] ">These pre-designed calculators will help you manage your budgets for Business and Personal Finance.</p>
          </div> 

            <hr className="my-8 " />
          <div className="mt-4 grid grid-cols-3 gap-x-16 gap-y-6 text-white">
               
                
                {
                  FormulaData.map((data, index)=>(
                     
                     <h1 key={index} className="hover:text-[#0d0f4edd] py-4 font-semibold bg-gradient-to-r from-[#435ed5b6] to-[#7943d58e] rounded-xl text-center" onClick={()=>{navigate(`${data.param}`, {state:{data:data}  })}} >
                         <span className="mx-2 align-middle"> • {data.name}</span>
                     </h1>
                  ))
                }
                
                
              
            
            
               
              

          </div>

          <div className="my-16">
                <h1 className="text-white text-3xl font-semibold ">Learn About Financial Calculators</h1>
                <p className="text-[#2ad1e4b4] ">You can track your investments and see how much return each investment is making. If you're planning to buy a car and struggling with the payment schedule and calculating down payment, you can use the down-payment calculator to make your calculations easy.</p>
          </div>
    </div>
    </>
}

export default Formula
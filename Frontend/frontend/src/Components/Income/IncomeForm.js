import React from "react";


const IncomeForm = ()=>{
    return(
        
       <div className=" mx-4">
            <div className="flex text-white bg-[#4cc69f44]  px-4 py-1 rounded-md mb-6">
                <h1 className="pr-2">Income </h1>
                <h1 className="pr-2">/</h1>
                <h1 className="pr-2" >Add Income</h1>
                
            </div>
            <div className=" border   rounded-md w-full p-11 text-white py-11 ">
                <h1 className="font-bold  w-full text-4xl">Add Income</h1>

                <form className="">

                   <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col ">
                            <label className="py-3">Source :</label>
                            <select className="bg-[#0E1525] rounded focus:outline-none  py-2 px-3">
                                <option className="">Others</option>
                                <option >Salary</option>
                                <option >Business</option>
                                <option >Sold items</option>
                                <option >Coupons</option>
                             </select>
                        </div>
                        
                        <div className="flex flex-col ">
                            <label className="py-3">Amount :</label>
                            <input className="bg-[#0E1525] rounded focus:outline-none  py-2 px-3 " placeholder="Enter Amount" type="text" />
                        </div>
                   </div>
                    
               
                    <div className="flex flex-col ">
                        <label className="py-3">Note :</label>
                        <textarea className="bg-[#0E1525] rounded focus:outline-none  py-2 px-3 "></textarea>
                        
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col ">
                            <label className="py-3">Date :</label>
                            <input className="bg-[#0E1525] rounded focus:outline-none py-2 px-3 " placeholder="Enter Amount" type="date" />
                        </div>

                        <button className="bg-[#4cc69f]  text-black font-semibold hover:bg-[#86e2c5] mt-[48px] mx-32 rounded-md ">Add </button>
                    </div>
                    
                    
                </form>
            </div>
       </div>
    )
}

export default IncomeForm 

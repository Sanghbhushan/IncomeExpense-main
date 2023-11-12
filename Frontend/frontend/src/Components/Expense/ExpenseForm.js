import React from "react";


const ExpenseForm = ()=>{
    return(
        
       <div className=" mx-4">
            <div className="flex text-white bg-[#863aa439]  px-4 py-1 rounded-md mb-6">
                <h1 className="pr-2">Expense </h1>
                <h1 className="pr-2">/</h1>
                <h1 className="pr-2" >Add Expense</h1>
                
            </div>
            <div className=" border   rounded-md w-full p-11 text-white py-11 ">
                <h1 className="font-bold  w-full text-4xl">Add Expense</h1>

                <form className="">

                   <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col ">
                            <label className="py-3">Category :</label>
                            <select className="bg-[#0E1525] rounded focus:outline-none  py-2 px-3">
          
                                <option className="">Others</option>
                                <option >Food and Dining</option>
                                <option >Shopping</option>
                                <option >Travelling</option>
                                <option >Entertainment</option>
                                <option >Medical</option>
                                <option >Personal Care</option>
                                <option >Education</option>
                                <option >Bills and Utilities</option>
                                <option >Rent</option>
                                <option >Taxes</option>
                                <option >Insurance</option>
                                <option >Gifts and Donation</option>
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
                    
                    <div className="grid  md:grid-cols-2 gap-4 ">
                        <div className="flex flex-col ">
                            <label className="py-3">Date :</label>
                            <input className="bg-[#0E1525] rounded focus:outline-none py-2 px-3 " placeholder="Enter Amount" type="date" />
                        </div>

                        <button className="bg-[#863aa444]  text-slate-200 font-semibold hover:bg-[#ca81e744] ] mt-[48px] md:mx-32  rounded-md ">Add </button>
                    </div>
                    
                    
                </form>
            </div>
       </div>
    )
}

export default ExpenseForm 

import axios from "axios";
import React, { useState } from "react";
import { FaDove } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const AddForm = ({ isIncome})=>{
    const navigate = useNavigate()

    const [category, setCategory]= useState("Others")
    const [source, setSource]= useState("Others")
    const [amount, setAmount]= useState("")
    const [note, setNote]= useState("")
    const [date, setDate]= useState("")
    

   

    const submitHandler = async e =>{
        e.preventDefault()

        const data = isIncome==="income"? {
            "source": source,
            "note": note,
            "amount":amount,
            "date": date
        } : {
            "category": category,
            "note": note,
            "amount":amount,
            "date": date
        }
        
        axios.post(`http://127.0.0.1:8000/api/user/${isIncome}/`, data)
        .then((res)=>{
                alert("success! ...created  ")
                console.log("data -->",data)
                console.log(res)
        })
        .catch((error)=>{
            console.log(error)
            console.log(data)
        },[])
    }
    // 
    return(
        
       <div className=" mx-4">
            <div className={`flex text-white ${isIncome==="income" ? "bg-[#4cc69f44]":"bg-[#863aa439]"} px-4 py-1 rounded-md mb-6`}>
                <h1 className="pr-2 capitalize cursor-pointer hover:text-[#e3ef79] " onClick={()=>{navigate(`/${isIncome}`)}}   >{isIncome} </h1>
                <h1 className="pr-2">/</h1>
                <h1 className="pr-2 capitalize cursor-pointer" >Add {isIncome}</h1>
                
            </div>
            <div className=" border   rounded-md w-full p-11 text-white py-11 ">
                <h1 className="font-bold  w-full text-4xl capitalize">Add {isIncome}</h1>

                <form onSubmit={submitHandler}>

                   <div className="grid grid-cols-2 gap-4">


             {isIncome==="expense"?
                     
                      <div className="flex flex-col ">
                            <label className="py-3">Category :</label>
                            <select className="bg-[#0E1525] rounded focus:outline-none  py-2 px-3" onChange={(e)=>{setCategory(e.target.value)}}>
          
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
                        :
                        <div className="flex flex-col ">
                        <label className="py-3">Source :</label>
                        <select className="bg-[#0E1525] rounded focus:outline-none  py-2 px-3" onChange={(e)=>{setSource(e.target.value)}}>
                            <option  selected >Others</option>
                            <option value="Salary">Salary</option>
                            <option value="Business">Business</option>
                            <option value="Sold items">Sold items</option>
                            <option value="Coupons">Coupons</option>
                         </select>
                    </div>
                    }
                        
                        <div className="flex flex-col ">
                            <label className="py-3">Amount :</label>
                            <input className="bg-[#0E1525] rounded focus:outline-none  py-2 px-3 " placeholder="Enter Amount" type="text" onChange={(e)=>{setAmount(e.target.value)}} />
                        </div>
                   </div>
                    
               
                    <div className="flex flex-col ">
                        <label className="py-3">Note :</label>
                        <textarea className="bg-[#0E1525] rounded focus:outline-none  py-2 px-3 " onChange={(e)=>{setNote(e.target.value)}}></textarea>
                        
                    </div>
                    
                    <div className="grid  md:grid-cols-2 gap-4 ">
                        <div className="flex flex-col ">
                            <label className="py-3">Date :</label>
                            <input className="bg-[#0E1525] rounded focus:outline-none py-2 px-3 " placeholder="Enter Amount" type="date" onChange={(e)=>{setDate(e.target.value)}} />
                        </div>

                        <button className={`${isIncome==="income" ? "bg-[#4cc69f44] hover:bg-[#8ae6c944]":"bg-[#863aa439] hover:bg-[#ca81e744]"}  text-slate-200 font-semibold   mt-[48px] md:mx-32  rounded-md `} type="submit">Add </button>
                    </div>
                    
                    
                </form>
            </div>
       </div>
    )
}

export default AddForm 
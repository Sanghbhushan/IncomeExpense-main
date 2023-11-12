import axios from "axios";
import React, { useState } from "react";
import { FaDove } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";


const UpdateForm = ()=>{
    const navigate = useNavigate()
    const state = useLocation()
    const {pk, option,value} = state.state;

  
    const [category, setCategory]= useState(`${value.category}`)
    const [source, setSource]= useState(`${value.source}`)
    const [amount, setAmount]= useState(`${value.amount}`)
    const [note, setNote]= useState(`${value.note}`)
    const [date, setDate]= useState(`${value.date}`)
    

   

    const submitHandler = async e =>{
        e.preventDefault()

        const data = option==="income"? {
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

        axios.patch(`http://127.0.0.1:8000/api/user/${option}/${pk}/`, data)
        .then((res)=>{
                alert("updated successfully ")
                console.log("data -->",data)
                console.log(res)
                navigate(-1)
        })
        .catch((error)=>{
            console.log(error)
            console.log(data)
        },[])
    }
    return(
        
       <div className=" mx-4">
        
            <div className={`flex text-white ${option==="income" ? "bg-[#4cc69f44]":"bg-[#863aa439]"}  px-4 py-1 rounded-md mb-6`}>
                <h1 className="pr-2 capitalize">{option} </h1>
                <h1 className="pr-2">/{pk}</h1>
                <h1 className="pr-2 capitalize"onClick={()=>{console.log(state.state.pk)}} >update {option}</h1>
                
            </div>
            <div className=" border   rounded-md w-full p-11 text-white py-11 ">
                <h1 className="font-bold  w-full text-4xl capitalize">Update {option}</h1>

                <form onSubmit={submitHandler}>

                   <div className="grid grid-cols-2 gap-4">


             {option==="expense"?
                     
                      <div className="flex flex-col ">
                            <label className="py-3">Category :</label>
                            <select className="bg-[#0E1525] rounded focus:outline-none  py-2 px-3" defaultValue={value.category} onChange={(e)=>{setCategory(e.target.value)}}>
          
                                <option >Others</option>
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
                        <select className="bg-[#0E1525] rounded focus:outline-none  py-2 px-3" value={value.source} onChange={(e)=>{setSource(e.target.value)}}>
                            <option  value="Others" selected>Others</option>
                            <option >Salary</option>
                            <option >Business</option>
                            <option >Sold items</option>
                            <option >Coupons</option>
                         </select>
                    </div>
                    }
                        
                        <div className="flex flex-col ">
                            <label className="py-3">Amount :</label>
                            <input className="bg-[#0E1525] rounded focus:outline-none  py-2 px-3 " defaultValue={value.amount} placeholder="Enter Amount" type="text" onChange={(e)=>{setAmount(e.target.value)}} />
                        </div>
                   </div>
                    
               
                    <div className="flex flex-col ">
                        <label className="py-3">Note :</label>
                        <textarea className="bg-[#0E1525] rounded focus:outline-none  py-2 px-3 " defaultValue={value.note} onChange={(e)=>{setNote(e.target.value)}}></textarea>
                        
                    </div>
                    
                    <div className="grid  md:grid-cols-2 gap-4 ">
                        <div className="flex flex-col ">
                            <label className="py-3">Date :</label>
                            <input className="bg-[#0E1525] rounded focus:outline-none py-2 px-3 " defaultValue={value.date}  placeholder="Enter Amount" type="date" onChange={(e)=>{setDate(e.target.value)}} />
                        </div>

                        <button className={` ${option==="income" ? "bg-[#4cc69f44] hover:bg-[#8ae6c944]":"bg-[#863aa439] hover:bg-[#ca81e744] ]"} text-slate-200 font-semibold  mt-[48px] md:mx-32  rounded-md `} type="submit">Update </button>
                    </div>
                    
                    
                </form>
            </div>
       </div>
    )
}

export default UpdateForm 
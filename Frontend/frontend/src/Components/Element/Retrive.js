import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"




const Retrive = ({isIncome})=>{
    const navigate = useNavigate()
    const [category, setCategory]= useState("")
    const [source, setSource]= useState("")
    const [amount, setAmount]= useState("")
    const [note, setNote]= useState("")
    const [date, setDate]= useState("")

    const {id} = useParams()

    const value ={
        id : id,
        amount : amount,
        note : note,
        date : date,
        source : source,
        category : category,
    }

    const handleDel=(id)=>{
        alert("are you sure you want to delete")
        axios.delete(`http://127.0.0.1:8000/api/user/${isIncome}/${id}/`)
        navigate(-1)
     }


    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/user/${isIncome}/${id}/`)
        .then((res)=>{
            console.log(res)
            setSource(res.data.source)
            setCategory(res.data.category)
            setAmount(res.data.amount)
            setNote(res.data.note)
            setDate(res.data.date)
        })
    })
    return(
        <div className=" mx-4">
            
            <div className={`flex text-white px-4 py-1 rounded-md mb-6 ${isIncome==="income" ? "bg-[#4cc69f44]":"bg-[#863aa439]"}`}>
                <h1 className="pr-2">Expense </h1>
                <h1 className="pr-2">/</h1>
                <h1 className="pr-2" >{id}</h1>
                
            </div>

            <div className=" border  grid lg:grid-cols-3 sm:grid-cols-1 rounded-md w-full p-11 text-white py-11 ">
                <div className="rounded-md">
                    <h1 className="font-bold  w-full text-4xl">{date}</h1>
                </div>
                
                <div className="mt-3">
                    <label>Amount</label>
                    <h1 className="font-bold  w-full text-xl ">{amount}</h1>
                </div>

                {
                    isIncome==='income'?

                    <div className="mt-3">
                         <label>Source</label>
                             <h1 className="font-bold  w-full text-xl">{source}</h1>
                    </div> :
                    
                    <div className="mt-3">
                        <label>Category</label>
                        <h1 className="font-bold  w-full text-xl">{category}</h1>
                    </div>
                }
                
                

                <div className="mt-3">
                    <label>Note</label>
                    <h1 className="font-bold  w-full text-xl">{note}</h1>
                </div>
                
                
            </div>

            <div className="flex ">
            <button className={`${isIncome==="income" ? "bg-[#4cc69f44] hover:bg-[#8ae6c944]":"bg-[#863aa439] hover:bg-[#ca81e744]"}  text-slate-200 font-semibold    px-3 py-2 m-2 rounded-md ml-auto mr-2`} onClick={()=>{navigate(`/${isIncome}/update`, { state: { pk: id, option: isIncome, value:value } })}}>Update</button>
            <button className={` ${isIncome==="income" ? "bg-[#4cc69f44] hover:bg-[#8ae6c944]":"bg-[#863aa439] hover:bg-[#ca81e744] ]"} text-slate-200 font-semibold  mt-2 px-3 py-2 m-2 rounded-md `}  onClick={()=>{handleDel(id)}} >Delete </button>
            </div>
       </div>
    )
}

export default Retrive
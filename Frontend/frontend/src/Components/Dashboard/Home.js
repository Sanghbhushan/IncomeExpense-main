import React, { useEffect, useState } from "react";
import DashCard from "./DashCard";
import {MdOutlineSavings} from 'react-icons/md'
import {FaRupeeSign} from 'react-icons/fa'
import {GiReceiveMoney, GiPayMoney} from 'react-icons/gi'
import Income from "../Income/Income";

import axios from "axios";
import Recent from "./Recent";
import DashTodo from "./DashTodo";





const Home =()=>{
    const [income, setIncome]= useState("")
    const [expense, setExpense]= useState("")
    const [saving, setSaving]= useState("")
    const [savePercent, setSavePercent]= useState("")
    const [expPercent, setExpPercent]= useState("")
    const [flow, setFlow]= useState("")
    const [last, setLast]= useState("28")
    const [loading, setLoading] = useState(true)
    

    function fetchapi(url){
        axios.get(url)

        .then((res)=>{
            console.log("from home",res)
            setIncome(res.data.income.total)
            setExpense(res.data.expense.total)
            setSaving(res.data.saving)
            setFlow(res.data.flow)
            setSavePercent(res.data.savePercent)
            setExpPercent(res.data.expense.expPercent)
            setLoading(false)
            
           

        })
        .catch((error)=>{
            console.log(error)
            setLoading(false)
            
        })

    } 


    useEffect(()=>{
      
        setLoading(true)
        fetchapi(`http://127.0.0.1:8000/api/user/stats/dash/${last}`)
    

    },[last])


    // useEffect(async=>{
    //     axios.get(`http://127.0.0.1:8000/api/user/stats/dash/${last}`)
    //     .then((res)=>{
    //         console.log("home",res.data)
            
    //         setIncome(res.data.income.total)
    //         setExpense(res.data.expense.total)
    //         setSaving(res.data.saving)
    //         setFlow(res.data.flow)
    //         setSavePercent(res.data.savePercent)
    //         setExpPercent(res.data.expense.expPercent)

    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //     })
    // }
    // ,[last])
    if (loading) {
        return <div>Loading...</div>
    }
    
    return(
        
    <>
    

         
   <div>
   <div className="flex   rounded-md ">
        <select className="text-[#13e7e7]  bg-[#4b494b49] cursor-pointer mb-2 font-semibold rounded-md focus:outline-none " onChange={(e)=>{setLast(e.target.value)}} >
            
            
            <option value= "28" className="text-black  font-semibold">last 28 days</option>
            <option value= "7" className="text-black  font-semibold">last 7 days</option>
            <option value= "90"className="text-black  font-semibold">last 90 days</option>
            <option value= "365" className="text-black  font-semibold">last 365 days</option>
        </select>
                
            </div>
   <div className="grid xl:grid-cols-4  md:grid-cols-2 sm:grid-cols-1  gap-4  ">
        
        <DashCard name={income} p="Total Income" icon={<GiReceiveMoney size={"2rem"}  className="text-green-400"/>}/>
        <DashCard name={expense} p="Total Expense" icon={<GiPayMoney size={"2rem"} className="text-red-400"/>}><h1 className="text-red-400 bg-[#48143884]  rounded font-medium text-sm  ">{expPercent} %</h1></DashCard>
        <DashCard name={saving}  p="Total Saving" icon={<MdOutlineSavings size={"2rem"}  className="text-orange-200" />}> <h1 className="text-green-400 bg-[#14482984]  rounded font-medium text-sm  ">{savePercent} %</h1></DashCard>
        <DashCard name={flow}  p="Money Flow" icon={<FaRupeeSign size={"2rem"} className="text-slate-400" />}/>
        
    
    </div>
    
   </div>

    <div className="flex text-white  ">
        <div className=" flex-auto flex flex-col  " >
             <h1 className=" text-2xl font-semibold m-4">Recent </h1>
             <div className=" flex-auto bg-[#0E1525]  mb-4 mr-4 rounded-2xl " >
             <h1 className="text-xl font-semibold px-5 bg-[#18764620] rounded-t-2xl  py-2 ">Income </h1>
              <div className="overflow-y-auto h-48 scrollbar-hide ">
                 <div >
                    <Recent recent={"income"}/>
                 </div>
              </div> 
            </div>

             <div className=" flex-auto bg-[#0E1525]  mr-4 rounded-2xl  " >
             <h1 className="text-xl font-semibold bg-[#7d1d6a2b] rounded-t-2xl  px-5 py-2">Expense </h1>
                 <div className="overflow-y-auto h-48 scrollbar-hide">
                 <div>
                    <Recent recent={"expense"}/>
                 </div>
                 </div>
            </div>
        </div>

        <div className="flex flex-col ">
            <h1 className="flex-none text-white text-2xl font-semibold m-4">Todo's</h1>
            <div className="flex-auto bg-[#0E1525]  text-white  w-[250px] rounded-2xl pt-2">
            {/* <DonutChart labels={["complete","Incomplete","InProgress" ]} chartdata={[45,86,74]}/> */}

            <DashTodo/>
            

            </div>
            

        
        
        </div>
    </div>
    </>
    )
}

export default Home
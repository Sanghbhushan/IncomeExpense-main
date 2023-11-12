import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DonutChart from "../Charts/DonutChart";


const DashTodo =()=>{
    const [data, setData]= useState([])
    const [d, setD]= useState({})
    const navigate = useNavigate();
    
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/user/stats/todo-stats/")
        .then((res)=>{
            console.log("Hello world",res.data)
            setD( res.data)
        })
        .catch((err)=>{
            console.log(err)
        })

        axios.get("http://127.0.0.1:8000/api/user/todo/")  
        .then((res)=>{
            setData(res.data)
            
            console.log(res)
        })  
        .catch((error)=>{
            console.log(error)
        })
    },[])
    return <>
    <DonutChart labels={["complete","Incomplete","InProgress" ]} chartdata={[d.completed, (d.incompleted-d.inprocess), d.inprocess]}/>

    <div className=" h-56 rounded mx-2 overflow-y-auto scrollbar-hide">
        
        {
            data.map((d, i)=>(
        <div className="flex flex-col rounded bg-[#5b649737] my-2" onClick={()=>{navigate('/todo/update', { state:{d} })}}>
            <h1 className="font-semibold ml-2 text-[#e68549]">{d.title}</h1>
            <div className="flex">
    
            {
                d.in_process?<span className="ml-2 mt-[-2px] text-[#3ae4cd] " >inprocess</span>: d.is_completed?<span className="ml-2 mt-[-2px] text-[#55ea64]  ">completed</span>:<span className="ml-2 mt-[-2px] text-[#dd6e6e] ">incomplete</span>
            }
               
            <h1 className="mt-[-4px] ml-auto mr-2 text-[#7f8f8d] ">{d.created_at.slice(0,10)}</h1>
            </div>
        </div>
            ))
        }
       
    </div>
    </>
}
export default DashTodo
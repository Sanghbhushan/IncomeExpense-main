import React, { useState, useEffect } from "react";

import {BsPlus} from'react-icons/bs'
import {TiDelete} from'react-icons/ti'
import {MdEditNote} from'react-icons/md'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NoTodo from "./NoTodo";


const Todo =()=>{
    const navigate = useNavigate();
    // <div className="text-[#acd94c]   text-[#f18533]  text-[#acd94c] text-[#34c776] text-[#3436c7] text-[#6a34c7] text-[#4034c7] "></div>

    const color= ["text-[#4034c7]" ,"text-[#6a34c7]", "text-[#3436c7]", "text-[#34c776]", "text-[#acd94c]","text-[#f18533]", "text-[#d0462d]" ]
    const [completed, setCompleted] = useState(true)
    const [incompleted, setIncompleted] = useState(false)
    const [inprocess, setInprocess] = useState(false)

    const [data, setData]= useState([])
    const [loading, setLoading] = useState(true); // Add loading state

    const DeleteHandle= ( id)=>{
         axios.delete(`http://127.0.0.1:8000/api/user/todo/${id}`)
        .then((res)=>{
            const updatedData = data.filter(item => item.id !== id); // Removes the deleted item from the state
            setData(updatedData); // Updates the state with the new data
        })
        .catch((err)=>{
            console.log(err)
        })
       
    }

    const DeleteAll= ( )=>{
        const del = window.confirm("Are you sure you want clear all todo's")
        console.log(del)
        if(del){
            axios.delete(`http://127.0.0.1:8000/api/user/cleartodo/`)
            .then((res)=>{
                const updatedData = data.filter(item => item !== item); // Removes the deleted item from the state
                setData(updatedData); // Updates the state with the new data
            })
            .catch((err)=>{
                console.log(err)
            })
        }
         
       
    }
    

    useEffect(()=>{
        setLoading(true);
        axios.get("http://127.0.0.1:8000/api/user/todo/")  
        .then((res)=>{
            setData(res.data)
            console.log(res)
            setLoading(false);
        })  
        .catch((error)=>{
            setLoading(false);
            console.log(error)
        })
    },[])

    if (loading) {
        return <p>Loading...</p>; // Render loading message while data is being fetched
      }
    
    return<>
    <div className="flex">
        <h1 className="text-white text-2xl font-semibold   m-4"><span className="text-3xl">T</span>odo's. </h1>
        <div className="shadow-2xl flex py-1 px-2 bg-[#f54340df] my-4 rounded-lg justify-items-center hover:bg-[#f07371df] hover:duration-[1s] ml-auto mr-4">
            <button className="text-black font-semibold" onClick={()=>{DeleteAll()}} >Clear all</button>
            <div className=" text-3xl my-auto text-[#7817f8] "><BsPlus size={"2rem"}/></div>
        </div>

        <div className="shadow-2xl flex py-1 px-2 bg-[#05fa84df] my-4 rounded-lg justify-items-center hover:bg-[#e6a543df] hover:duration-[1s]  mr-4" onClick={()=>{navigate("add")}} >
            <button className="text-black font-semibold">Create</button>
            <div className=" text-3xl my-auto text-[#7817f8] "><BsPlus size={"2rem"}/></div>
        </div>
    </div>


        
        {
         data.map((d, i)=>(
                
        <div className="bg-[#0E1525]  py-2 px-4 my-2 rounded-lg">
        <div className="flex relative mr-2 ">
            <div className=" text-[#f18533] absolute top-0 right-14  ">

                {
                   d.in_process?<span className="mr-2 text-[#3ae4cd] " >inprocess</span>: d.is_completed?<span className="mr-2 text-[#55ea64]  ">completed</span>:<span className="mr-2 text-[#dd6e6e] ">incomplete</span>
                }
               
             
                
               
            </div>
            <div className="text-[#5b6788] font-semibold ml-2"> {i+1}. Created {d.created_at.slice(0,10)}</div> 
        
        
            <span className=" text-[#f18533] absolute top-0 right-6 cursor-pointer "   onClick={()=>{navigate('update', { state:{d} })}} ><MdEditNote size={"1.5rem"}/></span>
            <span className=" text-[#ee2a41] absolute top-0 right-0 cursor-pointer " onClick={()=>{DeleteHandle(d.id)}} ><TiDelete size={"1.5rem"}/></span>
        </div>   

        <div className={`text-[#f18533] w-auto  shadow-lg  text-left flex `}>
                <h1 className="font-semibold text-2xl m-auto flex-col text-left mx-2">{d.title}
                <p className="flex-none m-auto text-[#599cb9dd] text-left text-sm">{d.description}</p>
                
                </h1>                
        </div>

    </div>
            ))
        }

       



     {
        
          data.length?"":<NoTodo/>
    
     }
       
    </>
}

export default Todo
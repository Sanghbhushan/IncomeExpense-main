import axios from "axios";
import React, { useState } from "react";
import { FaDove } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



const AddTodo = ()=>{
    const navigate = useNavigate()

    const [title, setTitle]= useState("")
    const [discription, setDiscription]= useState("")
  
   
    const [complete,setComplete] = useState(false);
    const [incomplete,setIncomplete] = useState(false);
    const [inprocess,setInprocess] = useState(false);
    const [option,setOption] = useState("option1");
      

   

    const submitHandler = async e =>{
        e.preventDefault()
        const data =  {
            "title": title,
            "description": discription,
            "is_completed": complete,
            "in_process": inprocess
           
        
            
        }

        console.log("Data of Add TODO",data)
        axios.post(`http://127.0.0.1:8000/api/user/todo/`, data)
        .then((res)=>{
                alert("success! ...created  ")
                console.log("data -->",data)
                console.log(res)
                navigate(-1);
        })
        .catch((error)=>{
            console.log(error)
         
        },[])
    }
    // 
    return(
        
       <div className=" mx-4">
            <div className={`flex text-white bg-[#e6a52c78] px-4 py-1 rounded-md mb-6`}>
                <h1 className="pr-2 capitalize cursor-pointer hover:text-[#e3ef79] " onClick={()=>{navigate(`/todo`)}}   >todo </h1>
                <h1 className="pr-2">/</h1>
                <h1 className="pr-2 capitalize cursor-pointer" >Create Todo</h1>
                
            </div>
            <div className=" border   rounded-md w-full p-11 text-white py-11 ">
                <h1 className="font-bold  w-full text-4xl capitalize">Create Todo.</h1>

                <form onSubmit={submitHandler}>

                   <div className="grid  md:grid-cols-2 gap-4">

                        <div className="flex flex-col ">
                            <label className="py-3">Title :</label>
                            <input className="bg-[#0E1525] rounded focus:outline-none  py-2 px-3 " placeholder="Enter Title" type="text" onChange={(e)=>{setTitle(e.target.value)}} />
                        </div>

                        <div className="flex  my-auto mx-auto ">

                    <div className="flex">
                      
                        <div className="flex items-center mr-4">
                            <input type="radio" id="option2"  checked={inprocess===true && complete===false} onChange={(e)=>{setInprocess(true); setComplete(false) }} className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="option2" className="ml-2 font-semibold text-gray-700">in-process</label>
                        </div>

                        <div className="flex items-center ">
                            <input type="radio" id="option3" checked={complete===true && inprocess===false } onChange={(e)=>{ setComplete(true); setInprocess(false)}} className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="option3" className="ml-2 font-semibold text-gray-700">completed</label>
                        </div>
                    </div>
   
                </div>



                   </div>
                    
               
                    <div className="grid  md:grid-cols-2 gap-4 ">

                        
                    <div className="flex flex-col ">
                        <label className="py-3">Discription :</label>
                        <textarea className="bg-[#0E1525] rounded focus:outline-none  py-2 px-3 " onChange={(e)=>{setDiscription(e.target.value)}}></textarea>
                        
                    </div>
                    

                        <button className=" text-black py-2 font-semibold  bg-[#cfd964] hover:bg-[#c8b92ae3] mt-[48px] md:mx-32  rounded-md " type="submit">Add </button>
                    </div>
                    
                    
                </form>
            </div>
       </div>
    )
}

export default AddTodo
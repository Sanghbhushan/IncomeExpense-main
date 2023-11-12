import React, { useEffect } from "react";
import { useState } from "react";
import {BsArrowRightSquareFill} from 'react-icons/bs'
import {AiOutlineLogout} from 'react-icons/ai'
import {RiSettings5Fill} from 'react-icons/ri'

import { Sidebardata } from "./Sidebardata";
import axios from "axios";
import { useAuth } from "../Auth/Auth";
import { useNavigate } from "react-router-dom";

const Sidebar =({children})=>{
    const navigate = useNavigate()
    const auth = useAuth()
    const [open, Setopen] =useState(true)
    const [name, setName] =useState("")

    useEffect( ()=>{
        (
            async()=>{
                const {data} = await axios.get("http://127.0.0.1:8000/api/user/profile/")
                console.log("data --",data)
                setName(data.name)
            } 
        )()
       
    }
    ,[])

    return(
        
        <>
        
        <div className="  bg-[#0E1525]  py-6 w-auto flex ">
        <h1 className={` w-full text-3xl font-bold text-[#4cc69f] absolute  pl-6 top-4 `}>FINANCE. </h1>
            <h1 className="text-white text-right mr-4 uppercase flex-auto ">👋 hello {name}</h1>
            <button  onClick={()=>{auth.logout()}}  className="bg-[#4cc69f]  rounded-md font-medium  flex-[w-30px] mr-6  text-black hover:bg-[#19221f] ">Logout</button>
        </div>
        
        <div className="flex ">

        
                <div  >
                    
                    <div className={`bg-[#0E1525] shadow-sm shadow-slate-600   ${open? "w-60":"w-20 "}  h-[88vh] duration-300 `}>
                        {/* <h1 className={` w-full text-3xl font-bold text-[#4cc69f] absolute pt-2 pl-6 ${open? " ":"hidden"}`}>FINANCE. </h1> */}
                        < BsArrowRightSquareFill onClick={()=>{Setopen(!open)}} size={"2rem"} className={`text-slate-500 rounded-full cursor-pointer hover:text-[#4cc69f] float-right mt-3 mr-6 ${open? "rotate-180 ":""}`}/>  
                        
                        

                    
                        <ul className={`text-white   px-2 ${open?"pt-2 duration-300":"pt-16 duration-300"}`}>
                        
                        
                        {Sidebardata.map((data, index)=>
                        <li key={index} className={`mt-1 pl-6 py-1 px-2 flex hover:bg-[#3455] hover:text-[#4cc69f] rounded-lg cursor-pointer ${open?"":"pt-[8px]  hover:bg-[#0E1525]"}`} onClick={()=>{navigate(data.path)}} >
                            
                                <span className="mt-1 " >
                            {data.icon}
                                </span>
                                <span className={` pl-6 font-extralight text-[17px] ${open?"":"hidden "}`} >{data.title}</span>
                            </li>
                        )}
                        
                        
                        <li className={`bottom-[60px]  absolute pl-6 py-1 px-2 flex hover:bg-[#3455] rounded-lg cursor-pointer hover:text-[#4cc69f] ${open?"":"pt-[8px]  hover:bg-[#0E1525]"}`}>
                            
                                <span className="mt-1 " >
                                < RiSettings5Fill size={"20px"}  />
                                </span>
                                <span className={` pl-6 font-extralight  text-[18px] ${open?"":"hidden "}`}>Setting's</span>
                            </li>
                            
                        <li className={` bottom-3  absolute pl-6 py-1 px-2 flex hover:bg-[#3455] hover:text-[#4cc69f] rounded-lg cursor-pointer ${open?"":"pt-[8px]  hover:bg-[#0E1525]"}`} onClick={()=>{auth.logout()}}  >
                            
                                <span className="mt-1 " >
                                <AiOutlineLogout size={"20px"}  />
                                </span>
                                <span  title="Logout"className={` pl-6 font-extralight text-[18px] ${open?"":"hidden "}`} >Logout</span>
                            </li>
                        
                
                            
                        </ul>

                        
                    </div>
                    


                    
                </div>

            <div className="px-7 py-7  flex-auto sm:flex-1 overflow-auto h-[86vh] scrollbar-hide " >
                    
                    
                  

                    {children}
                    
            </div>

        </div>
        </>
        
    )
}

export default Sidebar
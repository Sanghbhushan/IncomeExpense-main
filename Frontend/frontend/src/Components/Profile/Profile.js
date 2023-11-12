import React, { useState } from "react";
import profile from "./Profile.png"
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../Auth/Auth";

const Profile = ()=>{
    const auth = useAuth()
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [updated, setUpdated] = useState("")
    const [created, setCreated] = useState("")
    useEffect( ()=>{
        (
            async()=>{
                const {data} = await axios.get("http://127.0.0.1:8000/api/user/profile/")
                console.log("data --",data)
                setName(data.name)
                setEmail(data.email)
                setCreated(data.created_at)
                setUpdated(data.updated_at)
            } 
        )()
       
    }
    ,[])
    
    return <>
      <div>
            <h1 className="text-white text-3xl font-semibold   m-4"><span className="text-4xl">P</span>rofile. </h1>
        
             <div className="flex">
                <div>
                    <div className="w-64 h-64 rounded-full "> 
                        <img src={profile} alt="" className="animate-pulse " />
                    </div>
                </div>

                <div className=" m-4 border border-[#464444] bg-[#27212c4f]  grid lg:grid-cols-3 sm:grid-cols-1 rounded-md w-full p-11 text-white py-11 ">
                        <div className="rounded-md">
                            <h1 className="font-bold  w-full text-4xl">Detail's.</h1>
                        </div>
                        
                        <div className="mt-3">
                            <label>Name</label>
                            <h1 className="font-bold  w-full text-xl ">{name}</h1>
                        </div>


                        <div className="mt-3">
                            <label>Email</label>
                            <h1 className="font-bold  w-full text-xl">{email} </h1>
                        </div>     
                        <div className="mt-3">
                            <label>Created at</label>
                            {/* <h1 className="font-bold  w-full text-xl">{created.slice(0,10)}</h1> */}
                        </div>  

                        <div className="mt-3">
                            <label>Updated at</label>
                            <h1 className="font-bold  w-full text-xl">{updated===created?"-": updated.slice(0,10)}</h1>
                        </div>     
                    </div>   
        
               </div>
            
                    
            </div>
                <div className="flex float-right mr-12">
                     <button className=" ml-auto mr-auto py-2 px-2 bg-[#eb920c] rounded hover:scale-[1.1] hover:bg-[#d96619] duration-300 " onClick={()=>{navigate("resetpassword")}}>Change password</button>
               </div>
                <div className="flex float-right mr-4">
                     <button className=" ml-auto mr-auto py-2 px-2 bg-[#b767d0] rounded hover:scale-[1.1] duration-300 " onClick={()=>{auth.logout()}}  >Logout</button>
               </div>
              
    </>
}

export default Profile
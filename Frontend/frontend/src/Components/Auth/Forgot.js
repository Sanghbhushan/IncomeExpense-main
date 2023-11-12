import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

const Forgot =()=>{
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const auth = useAuth()
    const navigate = useNavigate()

    const submitHandler = async e=>{
        e.preventDefault()

        const data = {
            "email":email,
            
          }

          await axios.post("http://127.0.0.1:8000/api/user/set_password/",data )
          .then(
              (res)=>{
                  console.log(res)
                  
                  alert(res.data.msg)
      
              }
          )
          .catch(
              (error)=>{
                  console.log(error)
                  console.log(error.response.data.error)
              }
          )

        

        
    }
    return(
        
        <div className="flex flex-col items-center h-screen mx-auto justify-center  ">
            <div className="bg-[#2be886ca] bg-opacity-0 rounded-xl shadow-md px-24 py-20">
                
                <h1 className="text-4xl font-bold ">Forgot password </h1>
                <form onSubmit={submitHandler}>
                    <div className="mt-5">
                        <label className="font-bold mr-14 text-slate-50">Email</label>
                        <input className="rounded px-3 focus:outline-none" type="Email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email" />
                    </div>
                   
                    
                    <div className="flex justify-center">
                        <button className="w-[300px] mt-5 text-white font-semibold bg-[#000300] hover:scale-[0.95] duration-300 py-3 rounded-md hover:bg-[#202020]">
                            Send
                        </button>
                        
                    
                    </div>
                </form>
                
               
               
            </div>
        </div>
    )
}

export default Forgot
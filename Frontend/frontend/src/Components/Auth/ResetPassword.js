import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./Auth";

const ResetPassword =()=>{
   
    const [password, setPassword]=useState("")
    const [password2, setPassword2]=useState("")
    const auth = useAuth()
    const navigate = useNavigate()
    const {uid,token} = useParams()

    const submitHandler = async e=>{
        e.preventDefault()

        const data = {
            "password":password,
            "password2":password2
            
          }

          await axios.post(`http://127.0.0.1:8000/api/user/set_password/${uid}/${token}/`,data )
          .then(
              (res)=>{
                  console.log(res)
                  
                  alert(res.data.msg)
                  navigate("/login")
      
              }
          )
          .catch(
              (error)=>{
                
                  console.log("data ---> ",password)
                  console.log("data2 ---> ",password2)
                  console.log("data2 ---> ",uid)
                  console.log("data2 ---> ",token)
                  console.log("error ---> ",error)
               
              }
          )

        

        
    }
    return(
        
        <div className="flex flex-col items-center h-screen mx-auto justify-center  ">
            <div className="bg-[#2be886ca] bg-opacity-0 rounded-xl shadow-md px-24 py-20">
                
                <h1 className="text-4xl font-bold ">Set new password </h1>
                <form onSubmit={submitHandler}>
                    <div className="mt-5">
                        <label className="font-bold mr-14 text-slate-50">Password</label>
                        <input className="rounded px-3 focus:outline-none" type="text" onChange={(e)=>{setPassword(e.target.value)  }} placeholder="Enter Password" />
                    </div>
                    <div className="mt-5">
                        <label className="font-bold mr-14 text-slate-50">Conform</label>
                        <input className="rounded px-3 focus:outline-none" type="text" onChange={(e)=>{setPassword2(e.target.value)}} placeholder="Confarm Password" />
                    </div>
                   
                    
                    <div className="flex justify-center">
                        <button className="w-[300px] mt-5 text-white font-semibold bg-[#000300] py-3 rounded-md hover:bg-[#202020]">
                            set password
                        </button>
                        
                    
                    </div>
                </form>
                
               
               
            </div>
        </div>
    )
}

export default ResetPassword
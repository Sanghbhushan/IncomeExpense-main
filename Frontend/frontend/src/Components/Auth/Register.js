import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";


const Register =()=>{

    const [username, setUsername]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [conform, setConform]=useState("")
    // const [error, setError]=useState(null)
    // const [fields, setfield]=useState("")
  

    const auth = useAuth
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const submitHandler = (e)=>{
        e.preventDefault()
       
        // api call
        const data = {
            "email":email,
            "name":username,
            "password":password,
            "password2":conform,
            "tc":"true"
            
            
          }
        
        axios.post("http://127.0.0.1:8000/api/user/register/",data )
        .then(
            (res)=>{
                console.log(res)
                
                // console.log("errroroor--------------")
                
                if(res.request.status==201){
                
                    navigate("/login")
                
                }
                else{
                    setError(res.response.data.error)
                    
                }
                
            }
        )
        .catch(
            (error)=>{
                console.log("I am a error",error)
                console.log(error.response.data.error)
                setError(error.response.data.error)
                
               
              
            }
        )


    }

    

    return(
        
        <div className=" flex flex-col items-center h-screen mx-auto justify-center  ">
            <div className="bg-[#2be886ca] bg-opacity-0 rounded-xl  px-24 py-20">

                <h1 className="text-4xl font-bold ">Register </h1>
                
                <form onSubmit={submitHandler}>
                    <div className="mt-5">
                        <label className="font-bold mr-[23px] text-slate-50">Username</label>
                        <input className="rounded px-3 focus:outline-none" type="text" onChange={ (e) => {setUsername(e.target.value) }} placeholder="Enter Username" />
                        { error.name?<h1 className="text-sm  font-semibold text-[#540fc2] ">{error.name} </h1>:""}
                    </div>

                    <div className="mt-5">
                        <label className="font-bold mr-[58px] text-slate-50">Email</label>
                        <input className="rounded px-3 focus:outline-none" type="Email" onChange={ (e) => {setEmail(e.target.value) }} placeholder="Enter Email" />
                        { error.email?<h1 className="text-sm font-semibold   text-[#540fc2] ">{error.email} </h1>:""}
                    </div>

                    <div className="mt-5">
                        <label  className="font-bold mr-7 text-slate-50" >Password</label>
                        <input className="rounded px-3 focus:outline-none" type="password" onChange={ (e) => {setPassword(e.target.value) }} placeholder="Enter password" />
                        { error.password?<h1 className="text-sm font-semibold text-[#540fc2]">{error.password} </h1>:""}
                    </div>

                    <div className="mt-5">
                        <label  className="font-bold mr-8 text-slate-50" >Conform</label>
                        <input className="rounded px-3 focus:outline-none" type="password" onChange={ (e) => {setConform(e.target.value) }} placeholder="Enter password again" />
                        { error.password2?<h1 className="text-sm font-semibold text-[#540fc2]">{error.password2} </h1>:""}
                        { error.non_field_errors?<h1 className="text-sm font-semibold text-[#540fc2]">{error.non_field_errors} </h1>:""}
                    </div>
                    
                    <div className="flex justify-center">
                    <button className="w-[300px] mt-5 shadow-2xl text-white font-semibold bg-[#000300] py-3 rounded-md  hover:scale-[0.94] duration-300  hover:bg-[#202020]">Register</button>
                    </div>
                </form>

                <p onClick={()=>{navigate('/login')}} className="text-right font-semibold cursor-pointer hover:text-[#202020]  hover:text-[#161e70e2] duration-300">Aready have account</p> 
               
            </div>
        </div>
    )
}

export default Register
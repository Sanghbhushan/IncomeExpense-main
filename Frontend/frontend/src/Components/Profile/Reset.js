import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Reset =()=>{
    const [pass1, setpass1] = useState("")
    const [pass2, setpass2] = useState("")
    const navigate = useNavigate()
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(pass1)
        console.log(pass2)
        const data = {"password":pass1, "password2":pass2}
        axios.post("http://127.0.0.1:8000/api/user/reset_password/",data)
        .then((res)=>{
            console.log(res)
            navigate(-1)
        })
        .catch((err)=>{
            console.log(err)
        })
        alert("password changed")
    }


    return<>
     <h1 className="text-white text-3xl font-semibold   m-4"><span className="text-4xl">C</span>hange Password. </h1>
        
    <form onSubmit={handleSubmit}>
        <div className=" m-4 border border-[#464444] bg-[#27212c4f]  grid lg:grid-cols-2 sm:grid-cols-1 rounded-md w-[80%] p-11 text-white py-11 ">
                       
    
        <div className="mt-3 ">
            <label>Password </label>
            <input type="password" className="font-bold mt-2 duration-100 w-[86%] px-4 text-center outline-none rounded text-xl bg-[#114ac655] " onChange={(e)=>{setpass1(e.target.value)}} />
        </div>     

        <div className="mt-3">
            <label> Confirm  </label>
            <input type="password" className="font-bold mt-2  outline-none px-4 w-[88%]  text-center  rounded text-xl bg-[#114ac655] " onChange={(e)=>{setpass2(e.target.value)}} />
        </div>     
        
    </div>

    <div className="">
            <button className=" ml-5 py-2 px-2 bg-[#b767d0] rounded hover:scale-[1.1] duration-300 "  >Change Password</button>
        </div>

    </form>
    
    </>
}

export default Reset
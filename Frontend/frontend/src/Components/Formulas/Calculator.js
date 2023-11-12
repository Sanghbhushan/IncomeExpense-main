import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaDove } from "react-icons/fa";
import { parsePath, useLocation, useNavigate } from "react-router-dom";


const Calculator = ()=>{

    
    const navigate = useNavigate()
    const state = useLocation()
    const {data} = state.state;
    const [result, setResult]= useState({})
    const [error, setError]= useState({})
    
    const [formData, setFormData]= useState({
        formula:data.param
    })
    const handlesubmit = (e)=>{
        e.preventDefault()
        console.log(formData)
     
        axios.post("http://127.0.0.1:8000/api/user/formula/", formData)
        .then((res)=>{
            console.log(res)
        
            setResult(res.data)
            // setUnit()
            console.log(result)
            console.log("hello world")
            if(res.data.msg){
                setError(res.data.msg)
            }
        })
        .catch((err)=>{
            setError(err.data)
            console.log(err)
            console.log("error data",err.data)
            console.log("Hello world")
        })
       
    }

    const handleChange = (e) => {
    
        setFormData({
          ...formData,
          [e.target.name]: parseInt(e.target.value)
        });
      };

    

   

    return(
        

        
       <div className=" mx-4">
        
       <div className="text-white ">
             <h1 className="font-bold  w-full text-5xl capitalize">{data.name}</h1>
             <p className="mx-4 text-2xl font-bold py-8 px-2 ">"<span className="text-xl font-normal ">{data.p}</span>"</p>
       </div>


            <div className=" border   rounded-md w-full p-11 text-white py-11  ">
                <h1 className="font-bold  w-full text-4xl capitalize">Formula.</h1>

                <form onSubmit={handlesubmit}>  
                     
                   <div className="grid  lg:grid-cols-2 gap-16 ">
                         
                            
                        <div className="flex-auto" >
                        <h1 className="text-[#e3cf4c] my-8 text-lg font-semibold"><span className="text-[#4ba6df]"></span>{data.f}</h1> 
                                 
                        {  
                            data.input.map((input, i)=>(
                                <div key={i} className="flex my-auto mt-2  " >
                                    <label className="py-2 font-semibold text-lg">{input} :</label>
                                    <input className="bg-[#0E1525] ml-auto mr-16 rounded focus:outline-none  py-2 px-8 " type="number" name={input}  onChange={handleChange}/> 
                                </div> 
                            ))
                            
                        }
                       
                         
                        
                        </div>  
                        <div className="flex-auto mr-4" >
                              <h1 className="text-lg font-semibold">where,</h1>
                                <ul className="ml-8">
                                {
                                data.where.map((w, i)=>(
                                    <li key={i} className="text-[#42bb70]"><span className="text-white font-semibold">{w.split(":")[0]}</span>: {w.split(":")[1]}</li>
                                ))
                                }
                                </ul>

                                <button className="py-2 w-full mx-8  my-4 rounded bg-gradient-to-r font-semibold  text-lg bg-[#e62cf06b] bg-[#075383]">Calculate</button>

                                <div className={`bg-slate-900 w-full mx-8  my-2 py-4 rounded ${result.result?"animate-pulse":""}`}>
                                    <h1 className="font-semibold text-3xl text-center ">{result.result} {result.unit} {error?<div>{error.msg}</div>:""}</h1>
                                </div>
                        
                        </div>  
                   </div>
                </form>
            </div>
       </div>
    )
}

export default Calculator
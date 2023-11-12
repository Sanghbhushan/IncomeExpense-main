import React, { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";



const Recent =({recent})=>{
    const navigate = useNavigate()
 
    const [data, setData] = useState([])
   

   
    
    function fetchapi(url){
        axios.get(url)

        .then((res)=>{
            console.log(res)
            console.log(res.data.results)
            setData(res.data.results)
            
           

        })
        .catch((error)=>{
            console.log(error)
            
        })

    } 


    useEffect(()=>{
        
        fetchapi(`http://127.0.0.1:8000/api/user/${recent}/?p=1`)
    

    },[])

   
    return(
            <>
          

      
            <div className=" bg-[#0E1525]  py-4 rounded-md px-3 text-white " >
            
            <table className="w-full text-center ">
                <thead  >
                    <tr className="  bg-[#38424735] tracking-wide text-orange-100 " >
                        
                        <th className="p-3  rounded-tl-md ">id</th>
                        {
                            recent==="income"?<th className="p-3 ">Source</th>:<th className="p-3 ">Category</th>
                        }
                        
                        <th className="p-3 ">Date</th>
                        <th className="p-3 ">Amount</th>
                        <th className="p-3 ">Note</th>
                        
                        
                        
                    </tr>
                </thead>
                
                <tbody className=" text-slate-300">


                    {
                        data.map((d,index)=>(
                            <tr  className="  tracking-wide  hover:bg-[#3455] " key={index} >
                            
                                <td className="py-2 font-bold " onClick={()=>{navigate(`/${recent}/${d.id}`)}} >{d.id}</td>
                                <td className="py-2 text-purple-200" onClick={()=>{navigate(`/${recent}/${d.id}`)}}>{recent==="income"? d.source: d.category}</td>
                                <td className="py-2" onClick={()=>{navigate(`/${recent}/${d.id}`)}} >{d.date}</td>
                                <td className="py-2 text-green-100" onClick={()=>{navigate(`/${recent}/${d.id}`)}}>{d.amount}</td>
                                

                                <td className="py-2 " onClick={()=>{navigate(`/${recent}/${d.id}`)}}>{d.note}</td>
                            </tr> 
                        ))
                    }
                   

                
                  
                   
                   
                 
                    
                </tbody>
                
                   
            </table>

          
        </div>
            </>
            
    )
}

export default Recent
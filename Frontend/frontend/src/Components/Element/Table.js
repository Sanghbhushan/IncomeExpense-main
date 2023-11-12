import React, { useEffect, useState } from "react";
import {MdDeleteForever} from 'react-icons/md'
import {BsPencilFill} from 'react-icons/bs'
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Table =()=>{
    const navigate = useNavigate()
 
    const [data, setData] = useState([])
    const [data2, setData2] = useState([])


    function handleDel(id){
        axios.delete(`http://127.0.0.1:8000/api/user/income/${id}/`)
        fetchapi("http://127.0.0.1:8000/api/user/income/?p=1")
     
     }
    
    function fetchapi(url){
        axios.get(url)

        .then((res)=>{
            console.log(res)
            console.log(res.data.results)
            setData(res.data.results)
            setData2(res.data)

        })
        .catch((error)=>{
            console.log(error)
            
        })

    } 


    useEffect(()=>{
        fetchapi("http://127.0.0.1:8000/api/user/income/?p=1")
    

    },[])
    return(
            <>
             <div className="flex text-white bg-[#4cc69f44]  px-4 py-1 rounded-md mb-6">
                <h1 className="pr-2 hover:text-[#4cc69fb8]">Income </h1>
                <h1 className="pr-2">/</h1>
                <h1 className="pr-2" >Add Income</h1>
                <h1 className="ml-auto mr-3" > Total records {data2.count}</h1>
                
            </div>

            <div className=" bg-[#0E1525]  py-4 rounded-md px-3 text-white " >
            
            <table className="w-full text-center ">
                <thead  >
                    <tr className="  bg-[#38424735] tracking-wide text-orange-100 " >
                        
                        <th className="p-3  rounded-tl-md ">id</th>
                        <th className="p-3 ">Source</th>
                        <th className="p-3 ">Date</th>
                        <th className="p-3 ">Amount</th>
                        <th className="p-3 ">Update</th>
                        <th className="p-3 rounded-tr-md">Delete {data.count}</th>
                        
                        
                    </tr>
                </thead>
                
                <tbody className=" text-slate-300">


                    {
                        data.map((d,index)=>(
                            <tr  className="  tracking-wide  hover:bg-[#3455] " key={index}>
                                <td className="py-2 font-bold ">{d.id}</td>
                                <td className="py-2 text-purple-200">{d.source}</td>
                                <td className="py-2">{d.date}</td>
                                <td className="py-2 text-green-100">{d.amount}</td>
                                <td className="py-2 "><BsPencilFill size={"18px"} className="mx-auto  hover:text-[#79fdd3] " /></td>
                                <td className="py-2 "><MdDeleteForever size={"25px"} className="mx-auto  hover:text-[#de4d60]" onClick={()=>{handleDel(d.id)}}/></td>
                            </tr> 
                        ))
                    }
                   

                
                  
                   
                   
                 
                    
                </tbody>
                
                   
            </table>

            <div className=" flex mx-auto  w-[300px] rounded py-3">
                <button  className="mr-3 bg-[#4cc69f] w-[200px] rounded-md font-medium mx-auto py-1 text-black hover:bg-[#86e2c5] mt-3 ">Previous</button>
                <button  className="bg-[#4cc69f] w-[200px] rounded-md font-medium mx-auto py-1 text-black hover:bg-[#86e2c5] mt-3 animate-pulse">Next</button>
                        
                </div>
        </div>
            </>
            
    )
}

export default Table
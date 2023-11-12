import React, { useEffect, useState } from "react";
import {MdDeleteForever} from 'react-icons/md'
import {BsPencilFill} from 'react-icons/bs'
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Expense =()=>{
    const navigate = useNavigate()
 
    const [data, setData] = useState([])
    const [data2, setData2] = useState([])

    const [page, setPage]= useState("1")
    const [next, setNext]= useState()
    const [prev, setPrev]= useState()


    function handleDel(id){
        axios.delete(`http://127.0.0.1:8000/api/user/expense/${id}/`)
        fetchapi("http://127.0.0.1:8000/api/user/expense/?p=1")
     
     }
    
     function fetchapi(url){
        axios.get(url)

        .then((res)=>{
            console.log(res)
            console.log(res.data.results)
            setData(res.data.results)
            setData2(res.data)
            if(res.data.next){
                setNext(res.data.next.slice(-1))
               
            }

            if(res.data.previous){
                const compare =res.data.previous.slice(-1)
                if(compare==="/"){
                    setPrev("1")
                }
                else{
                    setPrev(res.data.previous.slice(-1))
                }
                
                
            }

        })
        .catch((error)=>{
            console.log(error)
            
        })

    } 



    useEffect(()=>{
        fetchapi(`http://127.0.0.1:8000/api/user/expense/?p=${page}`)
    

    },[page])
    return(
            <>
             <div className="flex text-white bg-[#863aa439]  px-4 py-1 rounded-md mb-2">
                <h1 className="pr-2 cursor-pointer  ">Expense {page}</h1>
                <h1 className="pr-2">/</h1>
                <h1 className="pr-2 cursor-pointer hover:text-[#e3ef79]" onClick={()=>{navigate('add')}}>Add Expense</h1>
                <h1 className="ml-auto mr-3" > Total records {data2.count}</h1>
                
            </div>

            <div className="flex">
                 <button onClick={()=>{navigate('add')}} className="bg-[#dd915c] w-[150px] rounded-md font-medium ml-auto mr-0 mb-2 py-1  text-black hover:bg-[#ee7722] ">Create new</button>
            </div>

          
            <div className=" bg-[#0E1525]  py-4 rounded-md px-3 text-white " >
            
            <table className="w-full text-center  ">
                <thead  >
                    <tr className="  bg-[#38424735] tracking-wide text-orange-100 " >
                        
                        <th className="p-3  rounded-tl-md ">id</th>
                        <th className="p-3 ">Category</th>
                        <th className="p-3 ">Date</th>
                        <th className="p-3 ">Amount</th>
                        <th className="p-3 ">Update</th>
                        <th className="p-3 rounded-tr-md">Delete</th>
                        
                        
                    </tr>
                </thead>
                
                <tbody className=" text-slate-300">


                    {
                        data.map((d,index)=>(
                            <tr  className="  tracking-wide  hover:bg-[#3455] " key={index}>
                                <td className="py-2 font-bold " onClick={()=>{navigate(`${d.id}`)}}  >{d.id}</td>
                                <td className="py-2 text-purple-200"  onClick={()=>{navigate(`${d.id}`)}}  >{d.category}</td>
                                <td className="py-2"  onClick={()=>{navigate(`${d.id}`)}} >{d.date}</td>
                                <td className="py-2 text-green-100"  onClick={()=>{navigate(`${d.id}`)}} >{d.amount}</td>
                                
                                <td className="py-2 " onClick={()=>{navigate('update', { state: { pk: d.id, option: 'expense', value:d } }) }}><BsPencilFill size={"18px"} className="mx-auto  hover:text-[#79fdd3] " /></td>
                                <td className="py-2 "><MdDeleteForever size={"25px"} className="mx-auto  hover:text-[#de4d60]" onClick={()=>{handleDel(d.id)}}/></td>
                            </tr> 
                        ))
                    }
                   

                
                  
                   
                   
                 
                    
                </tbody>
                
                   
            </table>

            <div className=" flex mx-auto  w-[300px] rounded py-3">
                <button  className={`mr-3 bg-[#863aa48a]  w-[200px] rounded-md font-medium mx-auto py-1 text-black hover:bg-[#ca81e744] ] mt-3 ${data2.previous?"":"cursor-not-allowed"}`} onClick={()=>{setPage(prev)}} >Previous</button>
                <button  className={`bg-[#863aa48a]  w-[200px] rounded-md font-medium mx-auto py-1 text-black hover:bg-[#ca81e744] ]  mt-3 ${data2.next?"animate-pulse":"cursor-not-allowed"} `}  onClick={()=>{setPage(next)}} >Next</button>
                        
                </div>
        </div>
            </>
            
    )
}

export default Expense
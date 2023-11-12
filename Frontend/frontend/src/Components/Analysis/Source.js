import axios from "axios";
import React, { useEffect, useState } from "react";
import ProgressBar from "../Element/ProgressBar";

function getPercent(total, item){
    const percent = (item/total)*100
    return percent
}




const Source = ({name})=>{
    const color = ["[#4cc69f]", "[#b0c64c]", "[#b44cc6]", "[#4ca3c6]", "[#c65a4c]", "[#4e4cc6]", "[#c69f4c]" ]
    const [days, setDays] = useState("28")
    const [source, setSource] = useState([])
    const [category, setCategory] = useState([])
    const [percent, setPercent] = useState([])
    const [total, setTotal] = useState("")
    const [Name, SetName]=useState([])
    const [Value, SetValue]=useState([])

    useEffect(()=>{
        
        axios.get(`http://127.0.0.1:8000/api/user/stats/${name}/${days}`)
        .then((res)=>{
            console.log("res --- ",res.data)
            if(name==="inc_stats"){
                setSource(res.data.source)
                setPercent(res.data.percent)
                setTotal(res.data.total)
                SetName(Object.keys(res.data.source))
                SetValue(Object.values(res.data.source))
                console.log("source",res.data.source)
            }
            else{
                setCategory(res.data.category)
                setPercent(res.data.percent)
                setTotal(res.data.total)
                SetName(Object.keys(res.data.category))
                SetValue(Object.values(res.data.category))
                // console.log("name",Object.v(res.data.category))
            }
            
        })
        .catch((error)=>{
            console.log(error)
        })
    },[days])
    
    return<>
    <div className="flex  px-4 rounded-t-2xl  py-2">

        <h1 className="text-lg text-[#4cc69f] font-semibold ">{name==="inc_stats"?"Source":"Category"}</h1>

        <h1 className="flex-none  text-white text-lg font-semibold ml-auto ">Last 
            <select className=" text-[#4cc69f] ml-2  cursor-pointer outline-none bg-transparent" onChange={(e)=>{setDays(e.target.value)}}>
                <option value="28" className="text-black  font-semibold text-sm" >28 days</option>
                <option value="7" className="text-black  font-semibold text-sm" >7 days</option>
                <option value="90" className="text-black  font-semibold text-sm" >90 days</option>
                <option value="365" className="text-black  font-semibold text-sm" >365 days</option>
            </select>
        </h1>
    </div>

    <div className="font-bold ml-4 text-[#d2cfdadd]"><h1>Total : <span className="text-[#0af17a] font-normal"> {total}</span></h1></div>
    
    <div className="overflow-y-auto h-44 scrollbar-hide ">
           <div className="bg-[#4cc69f]"></div>
           <div className="bg-[#b0c64c]"></div>
           <div className="bg-[#b44cc6]"></div>
           <div className="bg-[#4ca3c6]"></div>
           <div className="bg-[#c65a4c]"></div>
           <div className="bg-[#4e4cc6]"></div>
           <div className="bg-[#c69f4c]"></div>

           {
            name==="inc_stats"?
                percent.map((p, i)=>(
                    <ProgressBar name={Name[i]} amount={Value[i]+" /-"} percent={p} color={color[i]}/>
                ))

            : percent.map((p, i)=>(
               
                    <ProgressBar name={Name[i]} amount={Value[i]+" /-"} percent={p} color={color[i]}/>
                ))

            
           }
           
           { console.log("dkdjkdjkdjdk",category)
                }

       
    </div>
        
    
    </>
    
}

export default Source


 
import React, { useEffect, useState } from "react";
import DashCard from "../Dashboard/DashCard";
import { MdOutlineAlignVerticalBottom , MdAlignVerticalTop } from 'react-icons/md'
import {IoMdSpeedometer} from 'react-icons/io'
import {GiReceiveMoney, GiPayMoney} from 'react-icons/gi'
import {TbArrowsSort, TbArrowNarrowUp, TbLayoutAlignTop} from 'react-icons/tb'

import DonutChart from "../Charts/DonutChart";
import Source from "./Source";
import DMY from "./DMY";
import axios from "axios";


const Stats = ({name})=>{
    
    const [wise, setWise]=useState("month")
    const [wiselist, setWiselist]=useState([])
    const [listlen, setLength] = useState(0)
    const [i, setIndex] = useState(0)
    const [Data, setData]=useState({})
    const [count, setCounter] = useState(1)
    useEffect(()=>{
        const data = {
            "name":name
        }
        axios.post(`http://127.0.0.1:8000/api/user/stats/calender/`, data)
        .then((res)=>{
            console.log("stats",res.data)
            
            
            
            
            if(count<2 ){
              
                const recent = res.data[wise][Object.keys(res.data[wise])[Object.keys(res.data[wise]).length - 3]] //Object.keys(res.data[wise])[Object.keys(res.data[wise]).length - 3]
                setData(recent)
            }
            else{
                const recent = res.data[wise][Object.keys(res.data[wise])[i]] 
                setData(recent)
            }
            

            setCounter(count+1)
            
            const list = Object.keys(res.data[wise]).slice(0,-2)
            setWiselist(list.reverse())
            setLength(list.length-1)
            console.log(wiselist)
            
        })
        .catch(error=>{
            console.log(error)
        })
    },[wise, i])





    return<>
    <div className=" flex-auto mx-auto text-white  ">
        <h1 className="flex  text-3xl font-semibold ml-4 mt-6">{name} Stats. </h1>
        <div className="flex mt-4">
            <h1 className="flex-none  text-white text-lg font-semibold ml-4 mt-2 ">Data. 
                <select className=" text-[#4cc69f] ml-2  cursor-pointer outline-none bg-transparent" onChange={(e)=>{setCounter(1); setWise(e.target.value); }}>
                    
                    <option value="month" className="text-black  font-semibold text-sm" >Month wise</option>
                    <option value="year" className="text-black  font-semibold text-sm" >Year wise</option>
                    <option value="day" className="text-black  font-semibold text-sm" >Day wise</option>
  
                </select>
            </h1>

            <h1 className="flex-none  text-white text-lg font-semibold ml-[35%] mt-2  ">{wise.slice(0,1).toUpperCase() + wise.slice(1,)}. 
                <select className=" text-[#4cc69f] ml-2  cursor-pointer outline-none bg-transparent"  onChange={(e)=>{setIndex(e.target.value)}} >
                    
                    {   
                        wiselist.map((element, index)=>(
                            <option key={index}  value={listlen-index} className="text-black  font-semibold text-sm" >{element}</option>
                        ))
                    }
                    
                </select>
            </h1>

        </div>
        
       <div className="flex">
            <div className="grid xl:grid-cols-3  md:grid-cols-2 sm:grid-cols-1  gap-4  my-4 w-[70%] ">
                
                <DashCard name={Data.sum} p="Total" icon={<GiReceiveMoney size={"2rem"}  className="text-green-400 text-sm"/>}/>
                <DashCard name={Data.mean} p="Average" icon={<GiPayMoney size={"2rem"} className="text-red-400"/>}><h1 className="text-red-400 bg-[#48143884]  rounded font-medium text-sm  ">45 %</h1></DashCard>
                <DashCard name={Data.max} p="Max" icon={<MdAlignVerticalTop size={"2rem"}  className="text-[#cd8b44]" />}> <h1 className="text-green-400 bg-[#14482984]  rounded font-medium text-sm  ">45%</h1></DashCard>
                <DashCard name={Data.min}  p="Min" icon={<MdOutlineAlignVerticalBottom size={"2rem"} className="text-[#afcd44]" />}/>
                <DashCard name={`${Data.thanPrevious} %`} p="more than unual" icon={<TbArrowNarrowUp size={"2rem"} className="text-[#44cd72]" />}/>
                <DashCard name={Data.count}   p="Transactions" icon={<TbArrowsSort size={"2rem"} className="text-[#4472cd]" />}/>
                

            </div>

            <div className="  h-64 w-[30%] my-4 ml-4 rounded-xl ">
                
                {
                    name==="Income"?<Source  name="inc_stats" />:<Source  name="exp_stats" />
                }
                
            </div>
       </div>

    </div>

    <DMY d={{Data}} name={name} wise={wise.slice(0,1).toUpperCase() + wise.slice(1,)} />
    </>
    
}


export default Stats
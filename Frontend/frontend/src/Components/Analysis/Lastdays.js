import axios from "axios";
import React, { useEffect, useState } from "react";
import DonutChart from "../Charts/DonutChart";

const Lastdays =()=>{
    
    const [last, setLast] = useState("28")
    const [income, setIncome] = useState({})
    const [expense,setExpense] = useState({})
    const [saving,setSaving] = useState(0)
    const [flow,setFlow] = useState(0)
    const [savingPercent,setSavingPercent] = useState(0)
    
    useEffect(async=>{
        axios.get(`http://127.0.0.1:8000/api/user/stats/dash/${last}`).
        then((res)=>{
            console.log("THis is last 28 days",res.data)
            setIncome(res.data.income)
            setExpense(res.data.expense)
            setSaving(res.data.saving)
            setSavingPercent(res.data.savePercent)
            setFlow(res.data.flow)
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [last])

    return<>
     <div className="flex">
                <h1 className="flex-none  text-white text-2xl font-semibold m-4">Last 
                    <select className=" text-[#4cc69f] ml-2  cursor-pointer outline-none bg-transparent" onChange={(e)=>{setLast(e.target.value)}}>
                        <option value="28" className="text-black  font-semibold text-sm" >28 days</option>
                        <option value="7" className="text-black  font-semibold text-sm" >7 days</option>
                        <option value="90" className="text-black  font-semibold text-sm" >90 days</option>
                        <option value="365" className="text-black  font-semibold text-sm" >365 days</option>
                    </select>
                </h1>
             </div>

            <div className="flex-auto flex-col bg-[#0E1525]  text-white  w-[250px] rounded-2xl ">
                <div className="mt-3">
                <DonutChart labels={["Income", "Expense", "Saving","flow"] } chartdata={[income.total, expense.total, saving,flow]} /> 
                </div>
                

                <div className="m-2 mt-6 py-2 rounded-lg bg-slate-800">
                    <span className="bg-[#0E1525] px-2 ml-2 rounded text-[#2fc6daf9]">Saving's</span>
                    <ul className="ml-4 text-amber-200 ">

                        <li><span className="text-green-300  mr-14">Total:</span> {saving}</li>
                        <li><span className="text-green-300 mr-3">Percentage:</span> <span> {savingPercent} </span> %</li>
        
                    </ul>
                        
                </div>

                <div className="mx-2 mt-3 py-2 rounded-lg bg-slate-800">
                    <span className="bg-[#0E1525] px-2 ml-2 rounded text-[#2fc6daf9]">Money Flow</span>
                    <ul className="ml-4 text-amber-200 ">

                        <li><span className="text-green-300  mr-14">Total:</span>{flow} </li>
                        
        
                    </ul>
                        
                </div>
                <div className="m-2 mt-3 py-2 rounded-lg bg-slate-800">
                    <span className="bg-[#0E1525] ml-2 px-2 rounded text-[#2fc6daf9]">Income / Expense</span>
                    
                    <IncomeOrExpence data={income}/>
                </div>
                 </div>
        

    </>
}

export default Lastdays





const IncomeOrExpence =({data})=>{
    return<>
    <ul className="ml-4 text-[#76e28ff9]">
            <li><span className="text-[#fffb] mr-12">Total:</span> {data.total}</li>
            <li><span className="text-[#fffb] mr-[14px]">Minimum:</span> {data.min}</li>
            <li><span className="text-[#fffb] mr-[12px]">Maximum:</span> {data.max}</li>
            <li><span className="text-[#fffb] mr-6">Average:</span> {data.avg}</li>
            <li><span className="text-[#fffb] mr-2">Transactions:</span>{data.transations}</li>
     </ul>
    </>
}
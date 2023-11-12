import axios from "axios";
import React, { useEffect, useState } from "react";
import DonutChart from "../Charts/DonutChart";
const CustomDays =()=>{
    const [From, setFrom] = useState("0000-00-00")
    const [To, setTo] = useState("0000-00-00")
    
    const [income, setIncome] = useState({})
    const [expense,setExpense] = useState({})
    const [saving,setSaving] = useState()
    const [flow,setFlow] = useState()
    const [savingPercent,setSavingPercent] = useState()
    
    function submitHandler(async){
       
        const data= {"From":From, "To":To}
         axios.post("http://127.0.0.1:8000/api/user/stats/dash/", data)
        .then((res)=>{
            console.log(res.data)
            setIncome(res.data.income)
            setExpense(res.data.expense)
            setSaving(res.data.saving)
            setSavingPercent(res.data.savePercent)
            setFlow(res.data.flow)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    useEffect(
        ()=>{
         submitHandler()
        
        },[From])
    return<>

<div className=" flex-auto mx-auto  mr-4 ">
                    <h1 className="flex  text-2xl font-semibold m-4">Custom days. </h1>

                    <div className="h-64 bg-[#0E1525] rounded-2xl ">
                         
                         <div className="flex px-5 bg-[#183f7667] rounded-t-2xl  py-1  ">
                            <div className="mx-auto">
                                <label className="py-1 px-2 rounded text-[#2fc6daf9] bg-[#3a393a42] mx-2">From date:</label>
                                <input className="bg-[#0E1525] rounded focus:outline-none py-2 px-3  font-semibold" placeholder="Enter date" type="date" onChange={(e)=>{setFrom(e.target.value)}} />
                            </div>

                            <div className="mx-auto">
                            <label className="py-1 px-2 rounded text-[#2fc6daf9] bg-[#3a393a42] mx-2">To date:</label>
                                <input className="bg-[#0E1525] rounded focus:outline-none py-2 px-3  font-semibold" placeholder="Enter date" type="date" onChange={(e)=>{setTo(e.target.value)}} />
                            </div>

                            
                        </div>
                        
                        <div className="flex ">
                            <div className=" flex h-[200px] mx-auto w-[35%] flex-auto " >
                                 
                            <DonutChart labels={["Income", "Expense", "Saving","flow"] } chartdata={[income.total, expense.total, saving,flow]} /> 
                            </div>

                            <div className=" flex h-[20px] w-[80%] flex-auto my-6">
                                
                                <div className="mr-auto">
                                <span className="bg-[#3a393a42] px-2 rounded text-[#2fc6daf9]">Income</span>
                                        <ul className="ml-2 text-[#76e28ff9]">

                                             <li><span className="text-[#fffb] mr-12">Total:</span> {income.total}</li>
                                            <li><span className="text-[#fffb] mr-[14px]">Minimum:</span> {income.min}</li>
                                            <li><span className="text-[#fffb] mr-[12px]">Maximum:</span> {income.max}</li>
                                            <li><span className="text-[#fffb] mr-6">Average:</span> {income.avg}</li>
                                            <li><span className="text-[#fffb] mr-2">Transactions:</span> {income.transations}</li>
                                        </ul>
                                       
                                </div>

                                <div className="mr-auto my-auto">
                                <span className="bg-[#3a393a42] px-2 rounded text-[#2fc6daf9]">Expense</span>
                                        <ol className="ml-2 text-[#8e11bff9]">
                                        <li><span className="text-[#fffb] mr-12">Total:</span>{expense.total}</li>
                                        <li><span className="text-[#fffb] mr-[14px]">Minimum:</span> {expense.min}</li>
                                        <li><span className="text-[#fffb] mr-[12px]">Maximum:</span> {expense.max}</li>
                                        <li><span className="text-[#fffb] mr-6">Average:</span> {expense.avg}</li>
                                        <li><span className="text-[#fffb] mr-2">Transactions:</span> {expense.transations}</li>
                                        </ol>
                                        
                                </div>
                                
                                <div className="mr-auto">
                                <span className="bg-[#3a393a42] px-2 rounded text-[#2fc6daf9]">Saving's</span>
                                        <ul className="ml-2 text-amber-200">

                                            <li><span className="text-green-300">Total:</span>{saving}</li>
                                            <li><span className="text-green-300">Percentage:</span> {savingPercent} %</li>
                          
                                        </ul>
                                        
                                </div>
                                
                            </div>

                         
                        </div>


                    </div>
                 </div>

    </>
}

export default CustomDays
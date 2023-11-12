import axios from "axios";
import { elements } from "chart.js";
import React, { useEffect, useState } from "react";
import BarChart from "../Charts/BarChart";

import LineChart from "../Charts/LineChart";
import CustomDays from "./CustomDays";
import Lastdays from "./Lastdays";
import Stats from "./Stats";
const d = new Date();
    const currentYear = d.getFullYear()


function getCurrentYeardata(obj){
    

    const data ={}
    
    const list = Object.keys(obj)
    for(const [i]  in list){
        console.log(i)
        if(list[i].slice(-4,)==currentYear){

            data[list[i]]=obj[list[i]]["sum"]
           
        }
    }

    return data
}

const Analysis= ()=>{
    const [incomedata, setIncomeData] = useState({})
    const [expensedata, setExpenseData] = useState({})
    const [saving, setsaving] = useState([])
   

    const [Income, setIncome]= useState()
    const [Expense, setExpense]= useState()
    const [incomeBar, setIncomeBar]= useState({})
    const [expenseBar, setExpenseBar]= useState({})

    
   
    function FetchData(url,data){
        axios.post(url, data)
        .then((res)=>{
            console.log("res data",res.data)

            if (data.name == "Income"){
                
                console.log("res.data.year ",Object.values(res.data.year[currentYear]))
                setIncomeBar({
                    "labels":Object.keys(res.data.year[currentYear]),
                    "value":Object.values(res.data.year[currentYear])
                })
                
                const month = getCurrentYeardata(res.data.month)
                console.log("this is current month", month)
                setIncomeData(month)
                setIncome(res.data)
                
                
            }
            else{
                
                console.log("Expense")
                const month = getCurrentYeardata(res.data.month)
                setExpenseBar({
                    "labels":Object.keys(res.data.year[currentYear]),
                    "value":Object.values(res.data.year[currentYear])
                })
                setExpenseData(month)
                setExpense(res.data)
                
                
            }
            
        
        })
        .catch((error)=>{
            console.log(error)
        })


        
     
    }

    useEffect(()=>{
        const url = "http://127.0.0.1:8000/api/user/stats/calender/"
       

        FetchData(url,{"name":"Income"})
        FetchData(url,{"name":"expence"})
        console.log("income",incomedata.month)
        console.log("expense",expensedata)
        console.log("income year",)
        console.log("incomedata", Income)
        
    },[])
    return <>
    
   <div className="flex text-white  ">
        <div className=" flex-auto flex flex-col  " >
             <h1 className=" text-2xl font-semibold  m-4"><span className="text-3xl">A</span>nalytic's. </h1>

             <div className=" flex-auto bg-[#0e1525ad] w-auto mb-4 mr-4 rounded-2xl " >
                <h1 className="text-lg  text-[#4cc69f] font-semibold px-5 bg-gradient-to-r from-[#1fa15e20] to-[#c82ee720] rounded-t-2xl  py-2 ">Current year stats</h1>
                <div className="flex overflow-y-auto h-64 w-auto justify-center  scrollbar-hide ">
                    <div className="mx-auto   w-[55%]">
                        <LineChart Idata={incomedata} Edata={expensedata} Sdata={saving}  labels={Object.keys(incomedata)}/>
                    </div  >
                    
                    <div className="mx-auto  align-middle items-center my-auto w-[44%]" >
                        <BarChart labels={ ["Avg", "Max", "Min", "Total"]} chartdata={[incomeBar.value,expenseBar.value]}/>
                        
                    </div>

                    
                </div> 

                
                
            </div>




            <div className=" flex flex-auto   mr-4 rounded-2xl  " >
              
                <CustomDays/> 
                 
            </div>
        </div>

        <div className="flex flex-col "> 
            <Lastdays/>
        </div>
    </div>

    <Stats name="Income" data={Income} v={0}/>
    <Stats name="Expense" data={Expense} v={0} />
   
       </>

}
export default Analysis
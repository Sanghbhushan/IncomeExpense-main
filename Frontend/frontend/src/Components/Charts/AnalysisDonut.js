import React from "react";
import {Line} from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


function  AnalysisDonut(){
    const data = {
        labels: ["Income", "Expense", "Saving","game","video"],
        datasets:[
            {
                label:"Sales for 2020 (M)",
                data : [3,2,2,1,5],
                borderColor:[
                    'rgba(255,206,86,0.2)',
                    'rgba(255,20,86,0.2)',
                    'rgba(255,206,86,0.2)',
                    'rgba(255,206,86,0.2)',
                    'rgba(255,206,86,0.2)',
 
                ],
                backgroundColor:[
                    'rgba(54,205,86, 1)',
                    'rgba(255,99,132, 1)',
                    'rgba(255,159,64, 1)',
                    'rgba(153,102,255, 1)',
                    'rgba(54,162,235, 1)',
                    'rgba(255,205,86, 1)',
  
                ]
            }
        ]
    }
    return <Doughnut data={data} />
}

export default AnalysisDonut
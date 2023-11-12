import React from "react";


import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  


function LineChart({Idata, Edata, Sdata, labels}){

    const data = {
        labels:labels, //['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' ]
        datasets: [
          {
            label: "Income",
            data: Idata,//[33, 53, 85, 41, 44, 65]
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 4
          },
          {
            label: "Expense",
            data: Edata , //[33, 25, 35, 51, 54, 76],
            fill: true,
            borderColor: "#742774",
            borderWidth: 4
          },
      
          
        ]
      
        
      };

      const options = {
        scales: {
          yAxes: [
            {
              beginAtZero:true,
              gridLines: {
                color: "green"
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                color: "white"
              }
            }
          ]
        }
      };
      

    
    return <Line data={data} options={options}  />
}

export default LineChart

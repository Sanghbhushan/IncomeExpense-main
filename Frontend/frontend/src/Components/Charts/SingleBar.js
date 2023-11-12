import React from "react";


import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
    options
  } from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    // PointElement,
    // LineElement,
    // Title,
    BarElement,
    Tooltip,
    Legend,
  );
  


function SingleBar({labels, chartdata, name}){

    const data = {
        labels: labels, //['Max', 'Min', 'Total', 'Saveing']
        datasets: [
        
          name==="Income"?{
            label: "Income",
            data: chartdata[0],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 4
          }:
          {
            label: "Expense",
            data: chartdata[0],
            fill: true,
            backgroundColor: "rgba(116,39,116,0.2)",
            borderColor: "#742774",
            borderWidth: 4
          }
          
        ]
      
        
      };

      const options = {
        scales: {
          yAxes: [
            {
              beginAtZero:true,
              gridLines: {
                color: 'white'
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
      

    
    return <Bar data={data} />
}

export default SingleBar

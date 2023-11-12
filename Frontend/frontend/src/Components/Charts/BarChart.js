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
  } from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    // PointElement,
    // LineElement,
    // Title,
    BarElement,
    Tooltip,
    Legend
  );
  


function BarChart({labels, chartdata}){

    const data = {
        labels: labels, //['Max', 'Min', 'Total', 'Saveing']
        datasets: [
          {
            label: "Income",
            data: chartdata[0],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 4
          },
          {
            label: "Expense",
            data: chartdata[1],
            fill: true,
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

export default BarChart

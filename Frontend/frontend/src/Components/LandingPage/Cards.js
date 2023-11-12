import React from "react";
import Card from "./Card";
import Money from './assets/money.jpg'
import Analysis from './assets/analysis.jpg'



const Cards =()=>{

    const card1h1 = "Simple money tracker"
    const card1h2 = "Painless budgeting"
    const card1h3 = "The whole picture in one place"

    const p1 ="It takes seconds to record daily transactions. Put them into clear and visualized categories such as Expense: Food, Shopping or Income: Salary, Gift."
    const p2 = "It takes seconds to record daily transactions. Put them into clear and visualized categories such as Expense: Food, Shopping or Income: Salary, Gift."
    const p3 = "One report to give a clear view on your spending patterns. Understand where your money comes and goes with easy-to-read graphs."

    return(
        
        <div className="w-full py-[10rem] px-4 bg-white grid md:grid-cols-3">
            <Card img={Money} heading={card1h1} p={p1}/>
            <Card img={Analysis} heading={card1h2} p={p2}/>
            <Card img={Money} heading={card1h3} p={p3}/>
        </div>
    )
}
export default Cards
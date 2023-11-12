import React from "react";
import Analysis from './assets/analysis.jpg'

const Analytic = ()=>{


    return(
        <div className="w-full bg-white  py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img  className="w-[400px] h-[400px]  mx-auto my-4 " src={Analysis}  alt="/" />

                <div className="flex flex-col justify-center">
                    
                    <p className="font-bold text-[#0ccd90]">DATA ANALYTIC'S DASHBOARD</p>
                    <h1 className=" md:text-4xl sm:text-3xl  text-2xl font-bold">
                     Manage Data Analytic's Centrally
                    </h1>

                    <p className="md:pt-3">
                        Managing your daily expenses has never
                     been easier. Whether it's travel expenses, office supplies,
                      or any other employee expenditure, access all receipts
                       and expense submissions from your Expenses 
                       dashboard and create, validate, or refuse
                        them in just a click. No need to download 
                        a specialized software to maintain expense
                         records - everything can be done directly through the app
                    </p>
                    
                        
                </div>
            </div>
        </div>
    )
}

export default Analytic
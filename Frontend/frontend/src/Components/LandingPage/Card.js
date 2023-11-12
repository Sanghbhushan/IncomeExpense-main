import React from "react";



const Card =(props)=>{
    
    return(
        <div className="max-w-[1240px]  mx-3">
            <div className="w-full shadow-xl flex flex-col justify-center rounded-lg p-4 my-4 hover:scale-105 duration-300 text-center ">
                <img className="w-20 mx-auto   bg-white" src={props.img} alt="" />
                <h2 className="py-2 mx-8 font-medium">{props.heading}</h2>
                <p className="py-2 mx-8"> {props.p}</p>
            </div>
        </div>
    )
}
export default Card
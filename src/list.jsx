import React from "react";
import "./index.css"

const ToDolist=(pros)=>
    {
        return  <>
        <div className="Style"> 
        
        <li>{pros.text}</li><i class="fa-solid fa-circle-xmark" onClick={()=>{
            pros.onSelect(pros.id);
        }}></i>
        </div> 
        </> 
    }
    export default ToDolist
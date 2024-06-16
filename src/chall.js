import React, { useState } from "react";
import 'D:/To-Do/node_modules/bootstrap/dist/css/bootstrap.min.css'
const Chall=()=>{
// var count=0;
    const [Items, setItems]=useState(0);
const onItem=(event)=>{
//    console.log("click")
//    count++;
   setItems(Items+1);
}
const decrease=()=>
    {
        setItems(Items-1)
    }
    //
    return <>
        <div className="chall_main">
            <p className="p">{Items}</p>
            <div className="btn_cla "><button   className="Chall_btn" onClick={onItem}>incre</button> <button className="Chall_btn"  onClick={decrease}>decre</button></div>
        </div>
    </>
}
export default Chall;
import React from "react";
import { useState } from "react";

const Main=(props)=>{

    const [note, setNote]=useState({
        title:"",
        content:""
    });
    const inputEvent=(event)=>{
        // const value=event.target.value;
        // const name=event.target.name;
        const {name, value}=event.target;
        setNote((preData)=>
        {
            return {...preData,
                [name]:value
            }
        })
    }
    const addevent=()=>{
        props.passNote(note);
        setNote({
            title:"",
            content:""
        })

    }
    return <>
    <div className="full">
        <div className="Main">
            <input placeholder="Title" onChange={inputEvent} value={note.title} name="title">

            </input>
            <textarea rows='0' column='0' placeholder="write somthing which you want " name="content" value={note.content} onChange={inputEvent}></textarea>
            <i class="fa-solid fa-plus" onClick={addevent}></i>
            
        </div>
        </div>
    </>

}
export default Main;
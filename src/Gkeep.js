import React, { useState } from "react";
import Header from "./Header"
import Foot from "./Footer";
import Main from "./Notes";
import Small from "./Piece_notes";
const Keep=()=>{
    const [items, setItems]=useState([])

    const addNote =(note)=>{
        setItems((oldItems)=>{
            return [...oldItems, 
                note]
        })
        console.log(note)
    }

    const onDelete=(id)=>{
        setItems((olddata)=>
            olddata.filter((currdata, indx)=>{
                return indx!=id;
            
        })
    )
    }
    return <>
    <Header/>
    <Main  passNote={addNote}/>
    {/* <Small/> */}
    <div class="container text-center">
  <div class="row row-cols-2">
  {
        items.map((val , index)=>{
            {/* const title = val?.title || "Untitled";
                const content = val?.content || "No content available"; */}
                return (
                    <Small 
                        key={index}
                        id={index}
                        title={val.title}
                        content={val.content}
                        deleteItems={onDelete}
                    />
                );
        })
    }
  </div>
</div>
    
    <Foot/>
    </>
}
export default Keep;
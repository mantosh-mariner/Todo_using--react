import React from "react";
import "./index.css"

const Small=(props)=>{

    const DeleteNode=()=>{
        props.deleteItems(props.id);
    }
    return <>
        <div className="Piece">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            {/* <br></br> */}
          
          <div className="ii"><div className="i" onClick={DeleteNode}><i class="fa-regular fa-trash-can"></i></div></div>
        </div>
    </>

}
export default Small
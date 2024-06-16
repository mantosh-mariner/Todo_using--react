
import React, { useState } from 'react';
import ToDolist from './list';

const App=()=>{

  const [inputList, setinputList]=useState("");

  const [Items, setItems]=useState([])

  
  const itemEvent=(event)=>{
setinputList(event.target.value)
  }

const listOfitems=()=>{
setItems((oldeItems)=>
{
  return [...oldeItems, inputList]
})

setinputList("");
  }
  const deleteItems=(id)=>{

    setItems((oldeItems)=>{
      return oldeItems.filter(( arr , index)=>{
      
      return id!==index})
    })
    console.log("delete")
  }
  return <>
    <div className="main_div">
    <div className='center_div'>
    <br/>
    <h1>ToDo List</h1>
    <br/>
    <div>
    <input  className="input" type='text' placeholder='Add Items' onChange={itemEvent} value={inputList}></input>
     <button className="bt" onClick={listOfitems}>+</button>
    </div>
    <div  className='todo'>
    <ol>
       {Items.map((itemsvalue, index)=>{
        return <ToDolist
        key={index}
          id={index}
          text={itemsvalue}
          onSelect={deleteItems}
        />
       })}

     </ol>
    </div>
     
    </div>

    </div>
  </>
}
export default App;

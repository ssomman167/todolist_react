import React from "react"
import "./App.css"

const ToDoList=(props)=>{
   
  return (
  <>

  <div className="todostyle">
  <i className="fa fa-trash"  onClick={()=>{
      props.onSelect(props.id)
  }}></i>
      <li className="lili">{props.text}</li> 
      
  </div>
  
  </>
  )
}


export default ToDoList

import { useState } from 'react';
import './App.css';
import ToDoList from './toDoList';


function App() {
 
  const [inputList,setInputList]=useState("")
  const [items,setItems]=useState([])
  const itemEvent=(event)=>{
     setInputList(event.target.value)
  }
  const itemList=()=>{
     setItems((oldval)=>{
       return [...oldval,inputList]
     })
     setInputList("")


  }

  const deletekardo=(id)=>{
     console.log(id)
     setItems((oldval)=>{
      return oldval.filter((elem,index)=>{
          return index!=id
       })
     })
  }

  return (
    <div className="main">
      <div className='center'>
      <h1>TO DO LIST</h1>
      <br/>
      <input type="text" placeholder='Add a item' className='inp' onChange={itemEvent}/>
      <br/>
      <br/>
      <button className='butt' onClick={itemList}>+</button>
      </div>

      <ol className='list'>
      
        {items.map((val,index)=>{
  // return <li>{val}</li>
  return <ToDoList key={index} id={index} text={val}
  onSelect={deletekardo}
  />
        })}
       
      </ol>
        
    </div>
  );
}

export default App;

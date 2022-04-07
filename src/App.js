
import { useState } from 'react';
import './App.css';

function App() {

  const [inputList,setInputList]=useState("")
  const itemEvent=(event)=>{
     setInputList(event.target.value)
  }
  const itemList=()=>{

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
        <li>{inputList}</li>
       
      </ol>
        
    </div>
  );
}

export default App;

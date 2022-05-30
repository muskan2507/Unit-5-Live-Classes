import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [count,setCount]=useState(0)
  const get=()=>{
    axios.get("http://localhost:8080/counter").then(({data})=>{
      setCount(data.value)
    })
  }
  useEffect(()=>{
    get()
  },[])
  return (
    <div className="App">
      <header className="App-header">
       
        <h3 className='counter-value'>Count is: {count}</h3>
         <button className='counterBtn' onClick={()=>{
           axios.post("http://localhost:8080/counter",{
             value:count+1
           }).then(()=>{
             setCount(count+1)
           })
         }}>Add Count</button>
      
        
      
      </header>
    </div>
  );
}

export default App;

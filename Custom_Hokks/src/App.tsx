
import axios from 'axios';
import { useState } from 'react';
import './App.css';
import useTimeout from './hooks/useTimeout';
const URL="https://api.github.com/search/users"
function App() {
  const toShow=useTimeout(2);
  type User ={
    id:number;
    login:string;
    avatar_url:string;
  }
 const [text,setText]=useState("");
 const [data,setdata]=useState<User[]>([])
  return (
    <div className="App">
      {toShow? (<h1 style={{color:'red'}}>Hello</h1>) : (<h1>Waiting for timer..</h1>)}
      <br/><br/><hr/><br/>
      <input onChange={(e)=>setText(e.target.value)}></input>
      <button onClick={()=>{
        axios.get(URL,{
          params:{
            per_page:5,
            q:text
          }
        }).then(({data})=>{
          setdata(data.items)
        })
      }}>Search</button>
    {data.map(User=>{
      return(
        <div>
        {User.login}<br/>
        <img style={{height:"200px",width:"200px"}} src={User.avatar_url}/>
        <br/>
        </div>
      )
    })}
    </div>
  );
}

export default App;

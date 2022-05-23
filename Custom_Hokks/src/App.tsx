import axios from 'axios';
// import { useDebouncedCallback } from '@react-hookz/web';
import { useState } from 'react';
import './App.css';
import useFetch from './hooks/useFetch';
import useTimeout from './hooks/useTimeout';
const URL="https://api.github.com/search/users"
 export type User ={
  id:number;
  login:string;
  avatar_url:string;
}
function App() {
  const toShow=useTimeout(2);
  const [text,setText]=useState("");
  const {data,err,loading}=useFetch(URL,{
    per_page:5,
    q:text || "masai-codes"
  })
   
  return (
    <div className="App">
      {toShow? (<h1 style={{color:'red'}}>Hello</h1>) : (<h1>Waiting for timer..</h1>)}
      <br/><br/><hr/><br/>
      <input onChange={(e)=>setText(e.target.value)}></input>
      
    { loading? (<div>...Loading</div>) : err? (<div>Something Went Wrong</div>): (data.map(User=>{
      return (
        <div>
        {User.login}<br/>
        <img style={{height:"200px",width:"200px"}} src={User.avatar_url}/>
        <br/>
        </div>
      )
    }))}
    </div>
  );
}

export default App;

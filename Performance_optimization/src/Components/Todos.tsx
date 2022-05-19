import  { useState } from 'react'
import { MemoTodo } from './TodoItem';

export type todoType={
  id:number;
  title:string;
  status:boolean;
}
const Todos = () => {
  const [value,setValue]=useState("");
  const [data,setData]=useState<todoType[]>([])
  
  return (
    <div>
      <input type="text" onChange={(e)=>setValue(e.target.value)}/>
      <button onClick={()=>{
        const payload:todoType={
            id:Math.random(),
            title:value,
            status:false
        }
      setData([...data,payload])
      }}>Add Todo</button>
      {data.map(e=>{
    return (
        <MemoTodo key={e.id} {...e}/>
    )
      })}
    </div>
  )
}

export default Todos
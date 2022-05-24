import  { useCallback, useState } from 'react'
import { MemoTodo } from './TodoItem';

export type todoType={
  id:number;
  title:string;
  status:boolean;
}
const Todos = () => {
  const [value,setValue]=useState("");
  const [data,setData]=useState<todoType[]>([])
  const handleToggle=(id:number)=>{
   setData(data.map((l)=>(l.id===id ? {...l,status:!l.status}:l)))
  }
  const callback=useCallback(handleToggle,[data])
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
        <MemoTodo key={e.id} {...e} handleToggle={callback}/>
    )
      })}
    </div>
  )
}

export default Todos
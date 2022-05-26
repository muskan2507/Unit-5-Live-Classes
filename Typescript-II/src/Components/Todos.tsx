import  { useEffect, useState } from 'react'
import {v4 as uuid} from "uuid";
import axios, { AxiosResponse } from "axios"
type todoType={
  id:number;
  title:string;
  status:boolean;
}
const Todos = () => {
  const [value,setValue]=useState("");
  const [data,setData]=useState<todoType[]>([])
  useEffect(()=>{
    get()
  },[])
  const get=()=>{
    axios.get("http://localhost:8000/todos").then((res:AxiosResponse<todoType[]>)=>{
      const {data}=res
        setData(data)
    })
  }
  return (
    <div>
      <input type="text" onChange={(e)=>setValue(e.target.value)}/>
      <button onClick={()=>{
        const payload={ title:value,status:false}
       axios.post("http://localhost:8000/todos",payload).then(get)
        setValue("")
      }}>Add Todo</button>
      {data.map(e=>{
      return (
        <div>
          {e.title}- {e.status? "Done" : "Not Done"}
        </div>
      )
      })}
    </div>
  )
}

export default Todos
import { useState } from "react";

type Element ={
    title:string;
    desc:string;
}

type AccordianType={
    data:Element[]
}
const Accordian = ({data}:AccordianType) => {
    
    const [num,setNum]=useState<number>()
    const changeNum=(index:number)=>{
        setNum(index)

    }
  return (
    <div>
          {data.map((e,i)=>(
               <div key={i}>
               <h3 onClick={()=>setNum(i)}>{e.title}</h3>
              {(num===i) && <p>{e.desc}</p>}
           </div>
          ))}
    </div>
  )
}

export default Accordian
import React, { useState } from 'react'
type counterprops={
    init:number;
    children?:JSX.Element | JSX.Element[];
}
const Counter = (props:counterprops) => {
    const {init,children}=props
    const [count,setCount]=useState(init)
  return (
    <div>
        <h1>Counter:{count}</h1>{children}
        <button onClick={()=>setCount(count+1)}>Add 1</button>
    </div>
  )
}

export default Counter
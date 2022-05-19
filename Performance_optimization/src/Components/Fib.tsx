import React, { useMemo, useState } from 'react'

const Fib = () => {
    const [text,setText]=useState("")
  const [ans,setAns]=useState<number>()
  const fibo=(n:number):number=>{
    if(n<=1){
      return n
    }
    return fibo(n-1)+fibo(n-2)
  }
  const calcFibo=()=> {
   console.log("nth fibo",memoisedFibo)
   setAns(memoisedFibo)
  }
  const memoisedFibo=useMemo(()=>{
     return  fibo(Number(text))
  },[text])
  return (
    <div>
        <input type="text" onChange={(e)=>setText(e.target.value)}/>
    <button onClick={calcFibo}>Calculate</button>
    <h3>{ans}</h3>
    </div>
  )
}

export default Fib
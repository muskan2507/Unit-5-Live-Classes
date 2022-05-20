import React, { memo, useState } from 'react'
import { todoType } from './Todos'

const TodoItem = (props:todoType) => {
    const [status,setstaus]=useState<boolean>(props.status)
  return (
    <div>
        {props.title}-{status?"Done":"Not done"}
        <button onClick={()=>setstaus(!status)}>Toggle</button>
    </div>
  )
}

export default TodoItem
export const MemoTodo=memo(TodoItem,function eq(prev,curr){
    if(prev.id==curr.id){
        return true;
    }
    return false;
})
import React, { memo, useState } from 'react'
import { todoType } from './Todos'
type TodoItemType={
handleToggle:(S:number)=>void
}
const TodoItem = (props:todoType & TodoItemType) => {
  
  return (
    <div>
        {props.title}-{props.status?"Done":"Not done"}
        <button onClick={()=>props.handleToggle(props.id)}>Toggle</button>
    </div>
  )
}

export default TodoItem
export const MemoTodo=memo(TodoItem)
  // function eq(prev,curr){
//     if(prev.id==curr.id){
//         return true;
//     }
//     return false;
// })
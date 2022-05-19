import React, { memo } from 'react'
import { todoType } from './Todos'

const TodoItem = (props:todoType) => {
  return (
    <div>
        {props.title}-{props.status?"Done":"Not done"}
    </div>
  )
}

export default TodoItem
export const MemoTodo=memo(TodoItem)
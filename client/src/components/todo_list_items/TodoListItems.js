
import React from 'react'
import TodoItem from '../todo_item/TodoItem'
import "./todolistitems.css"

const TodoListItems = () => {
  return (
    <div className='todo-list-items'>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
    </div>
  )
}
export default TodoListItems
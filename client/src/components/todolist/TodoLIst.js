
import React from 'react'
import "./todolist.css"

const TodoLIst = ({children}) => {
  return (
    <div className='todo-list'>
        <h2>To Do List</h2>
       {children}
    </div>
  )
}

export default TodoLIst
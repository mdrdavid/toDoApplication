
import React from 'react'

const  TodoItem = () => {
  return (
    <div className="todo-item">
        <p className='item-text'>item 1</p>
        <button className='update button'>update</button>
        <button className='delete button'>delete</button>
        <button className='complete button'>complete</button>
    </div>
  )
}

export default TodoItem
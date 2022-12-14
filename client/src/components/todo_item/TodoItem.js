import React, { useState, useEffect } from 'react'

const TodoItem = ({ todo, deleteItem, updateItem }) => {
  const [isUpdating, setIsupdating] = useState(false)
  const [currentTodo, setCurrentTodo] = useState({})

  useEffect(() => {
    setCurrentTodo(todo)
  }, [todo])

  const completeTodo = async () => {
    setCurrentTodo(prev => ({ ...prev, completed: !prev.completed }))
    updateItem({ ...currentTodo, completed: !currentTodo.completed })
  }

  const handleUpdating = () => {
    setIsupdating(prev => !prev)
    if (isUpdating) {
      updateItem(currentTodo)
    }
  }

  const handleTextInput = (e) => {
    setCurrentTodo(prev => ({ ...prev, todo: e.target.value }))
  }

  return (
    <div className="todo-item">
      {isUpdating ?
        <input type="text"
          placeholder='New Item'
          className='update-input'
          value={currentTodo.todo}
          onChange={handleTextInput}
        /> : null}
      {!isUpdating ? <p className={currentTodo.completed ? 'strike item-text' : ' item-text'}>{currentTodo.todo}</p> : null}
      <button className='update button' onClick={handleUpdating}>update</button>
      <button className='delete button' onClick={() => deleteItem(currentTodo._id)}>delete</button>
      <button className='complete button' onClick={completeTodo}>{currentTodo.completed ? "completed" : "complete"}</button>
    </div>
  )
}

export default TodoItem


import React, { useEffect, useState } from 'react'
import TodoItem from '../todo_item/TodoItem'
import axios from 'axios'
import "./todolistitems.css"
import { URL } from '../Constants'

const TodoListItems = () => {
  const [listItems, setListItems] = useState([])
  useEffect(() => {
    const fetchTodoItems = async () => {
      try {
        const res = await axios.get(`${URL}/items`)
        console.log(res.data)
        setListItems(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchTodoItems()
  }, [])
  
  return (
    <div className='todo-list-items'>
      {listItems?.map(todo => (
        <TodoItem todo={todo}/>
      ))}
    </div>
  )
}
export default TodoListItems
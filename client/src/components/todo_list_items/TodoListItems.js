
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TodoItem from '../todo_item/TodoItem'
import "./todolistitems.css"
import { URL } from '../Constants'

const TodoListItems = () => {
  const [listItems, setListItems] = useState([])
  useEffect(() => {
    const fetchTodoItems = async (id) => {
      try {
        const token = localStorage.getItem("token")
        const res = await axios({
          method: "get",
          headers:{
            'Authorization': `Bearer ${token}`
        },
          url:`${URL}/items`
        })
        console.log(res.data)
        setListItems(res.data)
      } catch (error) {
        console.log(JSON.stringify(error))
      }
    }
    fetchTodoItems()
  }, [])
  
  return (
    <div className='todo-list-items'>
      {
      listItems?.map(todo => (
        <TodoItem todo={todo}/>
      ))
      }
    </div>
  )
}
export default TodoListItems
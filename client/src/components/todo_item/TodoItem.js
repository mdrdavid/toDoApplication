
import React ,{useState, useEffect}from 'react'
import axios from 'axios'
import {URL} from "../Constants"

const  TodoItem = ({todo}) => {
  const [listItems, setListItems] = useState([])
   const [isUpdating, setIsupdating]= useState(false)
   const [currentTodo, setCurrentTodo]= useState({})

   useEffect(()=>{
    setCurrentTodo(todo)
   },[todo])
  //delete item when click delete button
  const deleteItem = async (id)=>{
    console.log("idd", id)
    console.log("idd", todo)
        try {
          const token = localStorage.getItem("token")
            const res = await axios({
              method: "delete",
              headers:{
                'Authorization': `Bearer ${token}`
            },
              url:`${URL}/items/${id}`
            })
            const newlistItems = listItems.filter((todo=>todo._id !==id))
            setListItems(newlistItems) 
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const completeTodo = async (id)=>{
        setCurrentTodo(prev=>({...prev, completed: !prev.completed}))
    }

    //update item
    const updateItem = async (editedTodo) => {
      console.log("edit", editedTodo._id)
      const token = localStorage.getItem("token")
      const res = await axios({
        method: "put",
        url:`${URL}/items/${editedTodo._id}`,
        headers:{
          'Authorization': `Bearer ${token}`
      },
        data:editedTodo})
    }

const handleUpdating =()=>{
    setIsupdating(prev=>!prev)
  if(isUpdating){
    updateItem(currentTodo)
  }
 
}
const handleTextInput =(e)=>{
  setCurrentTodo(prev=>({...prev, todo:e.target.value}))
}
  return (
    <div className="todo-item">
      { isUpdating?
        <input type="text"
              placeholder='New Item'
              className='update-input'
              value={currentTodo.todo}
              onChange={handleTextInput}
              /> : null}
      {!isUpdating?<p className={currentTodo.completed?'strike item-text':' item-text'}>{currentTodo.todo}</p>:null}
        <button className='update button' onClick={handleUpdating}>update</button>
        <button className='delete button'onClick={()=>deleteItem(currentTodo._id)}>delete</button>
        <button className= 'complete button' onClick={completeTodo}>{currentTodo.completed?"completed":"complete"}</button>
    </div> 
  )
}

export default TodoItem
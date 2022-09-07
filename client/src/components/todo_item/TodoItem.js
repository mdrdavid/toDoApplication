
import React ,{useState}from 'react'
import axios from 'axios'
import {URL} from "../Constants"


const  TodoItem = ({todo}) => {
  const [todoItems, setTodoItems] = useState([])
   //store id of item to update
   const [isUpdating, setIsupdating]= useState('')
   const [UpdateItemText, setIsupdateItemText]= useState('')

  //delete item when click delete button
  const deleteItem = async (id)=>{
    console.log("idd", id)
    console.log("idd", todo)
        try {
            const res = await axios.delete(`${URL}/items/${id}`)
            const newlistItems = todoItems.filter((item=>item._id !==id))
            setTodoItems(newlistItems)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    //update item
    const updateItem = async (e) => {
      e.preventDefault()
      const res = await axios.put(`${URL}/items/${isUpdating}`,{item: UpdateItemText})
      setIsupdateItemText(" ")
      setIsupdating(" ")
    }
        //show input field where we update item from before updating it  
        const updating = () =>{
          <form className='update-form' onSubmit={e=>{updateItem(e)}}>
              <input type="text"
              placeholder='New Item'
              className='update-input'
              />
              <button type='submit' className='update-button'
              onChange={e=>setIsupdateItemText(e.target.value)}
              value={UpdateItemText}
              >Update Item</button>
          </form>
      }

  return (
    <div className="todo-item">
      {
      isUpdating === todo._id?
      updating():
      <>
      <p className='item-text'>{todo.todo}</p>
        <button className='update button' onClick={()=>setIsupdating(todo._id)}>update</button>
        <button className='delete button'onClick={()=>deleteItem(todo._id)}>delete</button>
        <button className='complete button'>complete</button>
        </>
    }
        
    </div>
  )
}

export default TodoItem
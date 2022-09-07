
import React, { useState } from 'react'
import axios from "axios"
import {URL} from "../Constants"
import "./addtodoitem.css"

const  AddTodoItem = () => {
    const [input, setInput] = useState("")
  const [listItems, setListItems] = useState([])
 

    const handleChange=(e)=>{
        setInput(e.target.value)
        // setInput((prev)=>({...prev, [e.target.name]: e.target.value}))
    }
    
// this finction takes the todo items from the user and sends it to the database
    const addItem = async (e)=>{
        e.preventDefault();
            try {
                const token = localStorage.getItem("token")
                const res = await axios({
                    method: 'post',
                    url:`${URL}/items`,
                    headers:{
                        'Authorization': `Bearer ${token}`
                    },
                    data: {todo:input}
                })
                setListItems(prev=>[...prev,res.data])
                localStorage.getItem("res", res)
                console.log(res)
                setInput("")
            } catch (error) {
                console.log(error)
            }
        }
  return (
    <form className="add-todo-item" onSubmit={addItem}>
        <input type="text" 
        name="item" 
        value={input}
        placeholder="add item" 
        className="add-item"
        onChange={handleChange}
        />
        <button type="submit" className='submit-button'>Add Item</button>
    </form>
  )
}

export default AddTodoItem
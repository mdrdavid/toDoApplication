
import React, { useState } from 'react'
import "./addtodoitem.css"

const  AddTodoItem = () => {
    const [input, setInput] = useState("")

    const handleChange=(e)=>{
        setInput(e.target.value)
        // setInput((prev)=>({...prev, [e.target.name]: e.target.value}))
    }
    
    const handleSubmit= (e)=>{
        e.preventDefault();
        setInput("")
    }

  return (
    <form className="add-todo-item" onSubmit={handleSubmit}>
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
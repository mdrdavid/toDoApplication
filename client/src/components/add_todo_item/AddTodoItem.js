
import React, { useState } from 'react'
import "./addtodoitem.css"

const AddTodoItem = ({ addItem }) => {
    const [input, setInput] = useState("")
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    return (
        <div className="add-todo-item">
            <input type="text"
                name="item"
                value={input}
                placeholder="add item"
                className="add-item"
                onChange={handleChange}
            />
            <button type="submit" className='submit-button' onClick={() => addItem(input)}>Add Item</button>
        </div>
    )
}

export default AddTodoItem
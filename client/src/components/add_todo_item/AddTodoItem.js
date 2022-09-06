
import React from 'react'
import "./addtodoitem.css"

const  AddTodoItem = () => {
  return (
    <form className="add-t0d0-item">
        <input type="text" name="item" placeholder="add item" className="add-item"/>
        <button type="submit" className='submit-button'>Add Item</button>
    </form>
  )
}

export default AddTodoItem
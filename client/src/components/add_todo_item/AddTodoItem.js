import React, { useState, useContext } from 'react'

import "./addtodoitem.css";
import { GlobalContext } from '../../context/context';
import { addToDo, getTodos } from '../../context/actions';

const AddTodoItem = () => {
    const { toDoDispatch } = useContext(GlobalContext);
    const [input, setInput] = useState("");

    const addItem = async () => {
        await addToDo(input)(toDoDispatch);
        await getTodos()(toDoDispatch)
    }

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
            <button type="submit" className='submit-button' onClick={addItem}>Add Item</button>
        </div>
    )
}

export default AddTodoItem
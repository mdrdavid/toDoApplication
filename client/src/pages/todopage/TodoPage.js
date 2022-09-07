
import React from 'react'
import NavBar from '../../components/navbar/Navbar';
import TodoLIst from "../../components/todolist/TodoLIst"
import AddTodoItem from "../../components/add_todo_item/AddTodoItem";
import TodoListItems from "../../components/todo_list_items/TodoListItems";
import { Link } from 'react-router-dom';




function TodoPage() {
    return (
        <div>
            <NavBar/>
            <TodoLIst>
                <AddTodoItem />
                <TodoListItems />
            </TodoLIst>
            <p> 
            <Link to={"/"} className="toregister">Home</Link>
            </p>
        </div>
    )
}

export default TodoPage
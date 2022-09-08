
import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import NavBar from '../../components/navbar/Navbar';
import TodoLIst from "../../components/todolist/TodoLIst"
import AddTodoItem from "../../components/add_todo_item/AddTodoItem";
import TodoListItems from "../../components/todo_list_items/TodoListItems";
import { URL } from "../../components/Constants"

const TodoPage = () => {
    // this finction takes the todo items from the user and sends it to the database
    const addItem = async (data) => {
        try {
            const token = localStorage.getItem("token")
            const res = await axios({
                method: 'post',
                url: `${URL}/items`,
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                data: { todo: data }
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <NavBar />
            <TodoLIst>
                <AddTodoItem addItem={addItem} />
                <TodoListItems />
            </TodoLIst>
            <p>
                <Link to={"/"} className="toregister">Home</Link>
            </p>
        </div>
    )
}

export default TodoPage
import React, { useEffect, useState, useContext } from 'react'

import TodoItem from '../todo_item/TodoItem'
import "./todolistitems.css"
import { GlobalContext } from '../../context/context';
import { deleteTodo, getTodos, updateToDo } from '../../context/actions';


const TodoListItems = () => {
  const { todosState, toDoDispatch } = useContext(GlobalContext);
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      await getTodos()(toDoDispatch);
    }

    fetchTodos();
  }, []);

  useEffect(() => {
    setListItems(todosState?.todos?.reverse())
  }, [todosState]);

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id)(toDoDispatch)
    await getTodos()(toDoDispatch);
  }

  const handleUpdateTodo = async (todo) => {
    await updateToDo(todo)(toDoDispatch)
    await getTodos()(toDoDispatch);
  }

  return (
    <div className='todo-list-items'>
      {
        listItems?.map(todo => (
          <TodoItem todo={todo} deleteItem={handleDeleteTodo} updateItem={handleUpdateTodo} />
        ))
      }
    </div>
  )
}
export default TodoListItems

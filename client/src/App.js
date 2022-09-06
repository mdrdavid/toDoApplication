
import './App.css';
import TodoLIst from './components/todolist/TodoLIst';
import AddTodoItem from './components/add_todo_item/AddTodoItem';
import TodoListItems from './components/todo_list_items/TodoListItems';

function App() {
  return (
    <div className="App">
     <TodoLIst>
       <AddTodoItem/>
       <TodoListItems/>
     </TodoLIst>
    </div>
  );
}

export default App;

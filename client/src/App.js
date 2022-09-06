
import './App.css';
import TodoLIst from './components/todolist/TodoLIst';
import AddTodoItem from './components/add_todo_item/AddTodoItem';
import TodoListItems from './components/todo_list_items/TodoListItems';
import SignIn from './pages/signin/Signin';

function App() {
  return (
    <div className="App">
     <TodoLIst>
       <AddTodoItem/>
       <TodoListItems/>
     </TodoLIst>
     <SignIn/>
    </div>
  );
}

export default App;

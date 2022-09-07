
import { Routes, Route } from "react-router-dom";
import SignIn from './pages/signin/Signin';
import TodoPage from './pages/todopage/TodoPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<SignIn />} />
        <Route path="todo" element={<TodoPage />} />
      </Routes>
    </div>
  );
}

export default App;

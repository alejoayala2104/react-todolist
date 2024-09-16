import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    "Go to the gym",
    "Drink water",
    "Brush your cats",
  ]);

  function addTodo(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }

  return (
    <>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;

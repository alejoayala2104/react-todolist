import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    "Go to the gym",
    "Drink water",
    "Brush your cats",
  ]);
  const [todoValue, setTodoValue] = useState("");

  function addTodo(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }

  function deleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => todoIndex !== index);
    setTodos(newTodoList);
  }

  function editTodo(index) {
    const todoToBeEdited = todos[index];
    setTodoValue(todoToBeEdited);
    deleteTodo(index);
  }

  return (
    <>
      <TodoInput
        addTodo={addTodo}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </>
  );
}

export default App;

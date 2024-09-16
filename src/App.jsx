import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    "Go to the gym",
    "Drink water",
    "Brush your cats",
  ]);
  const [todoValue, setTodoValue] = useState("");

  function persistTodos(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function addTodo(newTodo) {
    if (!newTodo) return;
    const newTodoList = [...todos, newTodo];
    persistTodos(newTodoList);
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

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

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

import { useState } from "react";

export default function TodoInput(props) {
  const { addTodo, todoValue, setTodoValue } = props;

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Type a todo..."
      />
      <button
        onClick={() => {
          addTodo(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}

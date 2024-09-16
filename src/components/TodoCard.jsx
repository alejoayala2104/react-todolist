import React from "react";

export default function TodoCard(props) {
  const { children, deleteTodo, index } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            deleteTodo(index);
          }}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}

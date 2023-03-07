"use client";
import React from "react";
import { Task } from "../../lib/types";
function TaskItem({ id, name, completed }: Task) {
  const toggleTodo = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("todo");
  };
  const deleteTodo = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log("todo");
  };
  return (
    <li>
      <label>
        <input type="checkbox" checked={completed} onChange={toggleTodo} />
        {name}
      </label>

      <button onClick={deleteTodo}>✕</button>
    </li>
  );
}

export default TaskItem;

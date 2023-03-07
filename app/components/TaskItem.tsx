"use client";
import React, { useState } from "react";
import { Task } from "../../lib/types";
function TaskItem({ id, name, completed, projectId }: Task) {
  const [isCompleted, setIsCompleted] = useState<boolean>(completed);
  const toggleTodo = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const body = { id: id, completed: !isCompleted };
    try {
      const response = await fetch(`/api/projects/${projectId}`, {
        method: "PUT",
        body: JSON.stringify(body),
      });
      setIsCompleted(!isCompleted);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTodo = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const body = { id };
    try {
      const response = await fetch(`/api/projects/${projectId}`, {
        method: "DELETE",
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <li>
      <label>
        <input type="checkbox" checked={isCompleted} onChange={toggleTodo} />
        {name}
      </label>

      <button onClick={deleteTodo}>✕</button>
    </li>
  );
}

export default TaskItem;

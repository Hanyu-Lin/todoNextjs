"use client";
import React, { useState } from "react";
import { Task } from "../../lib/types";
function TaskItem(task: Task) {
  const [isCompleted, setIsCompleted] = useState<boolean>(task.completed);

  const toggleTodo = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const body = { id: task.id, completed: !isCompleted };
    try {
      const response = await fetch(`/api/projects/${task.projectId}`, {
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
    const body = { id: task.id };
    try {
      const response = await fetch(`/api/projects/${task.projectId}`, {
        method: "DELETE",
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <li className="flex justify-between items-center py-2 px-4 border-b border-gray-300">
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={toggleTodo}
          className="mr-2"
        />
        <span className={isCompleted ? "line-through text-gray-500" : ""}>
          {task.name}
        </span>
      </label>

      <button
        onClick={deleteTodo}
        className="text-red-500 hover:text-red-600 focus:outline-none"
      >
        ✕
      </button>
    </li>
  );
}

export default TaskItem;

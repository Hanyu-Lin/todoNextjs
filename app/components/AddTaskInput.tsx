"use client";
import React, { useState } from "react";
interface InputProps {
  projectId: string;
}

export const createTodo = async (projectId: string, name: string) => {
  try {
    const response = await fetch(`/api/projects/${projectId}`, {
      method: "POST",
      body: JSON.stringify({ name }),
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

function AddTaskInput({ projectId }: InputProps) {
  const [name, setName] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo(projectId, name);
    setName("");
  };
  return (
    <form className="flex items-center justify-center" onSubmit={handleSubmit}>
      <input
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        placeholder="What to do..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-300 ease-in-out">
        Add
      </button>
    </form>
  );
}

export default AddTaskInput;

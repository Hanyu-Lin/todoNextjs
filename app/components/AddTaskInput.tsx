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

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        createTodo(projectId, name);
        setName("");
      }}
    >
      <input
        placeholder="What to do..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default AddTaskInput;

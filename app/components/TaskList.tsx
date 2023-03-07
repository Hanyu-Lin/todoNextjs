"use client";
import React from "react";
import AddTaskInput from "./AddTaskInput";
import TaskItem from "./TaskItem";
import useSWR from "swr";
import { Task } from "../../lib/types";
interface TasksProps {
  projectId: string;
}

async function fetcher(input: RequestInfo): Promise<{ tasks: Task[] }> {
  const res = await fetch(input);
  return res.json();
}

function Tasklist({ projectId }: TasksProps) {
  const { data, error, isLoading } = useSWR<{ tasks: Task[] }>(
    `/api/projects/${projectId}`,
    fetcher,
    { refreshInterval: 1000 }
  );

  if (error) return error;
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <p>{`tasks: ${data?.tasks ? data?.tasks.length : 0}`}</p>
      <AddTaskInput projectId={projectId}></AddTaskInput>
      <ul>
        {data?.tasks &&
          data?.tasks.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              name={task.name}
              completed={task.completed}
              projectId={task.projectId}
            ></TaskItem>
          ))}
      </ul>
    </div>
  );
}

export default Tasklist;

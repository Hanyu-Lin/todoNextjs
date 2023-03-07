import React from "react";
import TaskItem from "./TaskItem";

interface TasksProps {
  tasks: {
    id: string;
    name: string | null;
    completed: boolean;
  }[];
}

function Tasklist({ tasks }: TasksProps) {
  return (
    <div>
      <p>{`tasks: ${tasks ? tasks.length : 0}`}</p>
      <ul>
        {tasks &&
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              name={task.name}
              completed={task.completed}
            ></TaskItem>
          ))}
      </ul>
    </div>
  );
}

export default Tasklist;

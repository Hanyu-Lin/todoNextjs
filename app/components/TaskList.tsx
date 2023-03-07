import React from "react";
import AddTaskInput from "./AddTaskInput";
import TaskItem from "./TaskItem";
import { Task } from "../../lib/types";
interface TasksProps {
  tasks: Task[];
}

function Tasklist({ tasks }: TasksProps) {
  return (
    <div>
      <p>{`tasks: ${tasks ? tasks.length : 0}`}</p>
      <AddTaskInput></AddTaskInput>
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

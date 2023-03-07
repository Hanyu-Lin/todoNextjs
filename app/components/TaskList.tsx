import React from "react";

interface TasksProps {
  tasks: {
    id: string;
    name: string;
  }[];
}

function Tasklist({ tasks }: TasksProps) {
  return (
    <div>
      <p>{`tasks: ${tasks ? tasks.length : 0}`}</p>
      <div>{tasks && tasks.map((task) => <p>{task.name}</p>)}</div>
    </div>
  );
}

export default Tasklist;

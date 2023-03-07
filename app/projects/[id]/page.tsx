import { getProjectInfo } from "@/lib/getProjectInfo";
import React from "react";

async function projectDetails({ params }: { params: { id: string } }) {
  const { project, error } = await getProjectInfo(params.id);
  if (error) return error;

  return (
    <div>
      <h1>{project?.name}</h1>
      <ul>
        {project?.tasks.map((task) => (
          <li key={task.id}>
            <p>{task.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default projectDetails;

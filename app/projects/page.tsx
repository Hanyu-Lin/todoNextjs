import React from "react";
import CreateProject from "./CreateProject";
import { getProjects } from "@/lib/getAllProjects";

async function AllTodos() {
  const { projects, error } = await getProjects();
  if (error) return error;
  return (
    <div>
      <p>View list</p>
      <CreateProject></CreateProject>
      <ul>
        {projects?.map((project) => (
          <li className="w-full flex justify-between mb-5" key={project.id}>
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllTodos;

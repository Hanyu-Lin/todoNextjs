import React from "react";
import ProjectForm from "./components/ProjectForm";
import { getProjects } from "@/lib/getAllProjects";
import Project from "./components/Project";

export const dynamic = "force-dynamic",
  revalidate = 0;

async function AllTodos() {
  const { projects, error } = await getProjects();
  if (error) return error;
  return (
    <div>
      <p>View list</p>
      <ProjectForm></ProjectForm>
      <div>
        {projects?.map((project) => (
          <Project
            key={project.id}
            id={project.id}
            name={project.name}
          ></Project>
        ))}
      </div>
    </div>
  );
}

export default AllTodos;

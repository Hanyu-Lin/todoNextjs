"use client";
import React from "react";
import useSWR from "swr";
import Project from "./components/Project";

interface Project {
  id: string;
  name: string;
}
function ProjectList() {
  async function fetcher(input: RequestInfo): Promise<{ projects: Project[] }> {
    const res = await fetch(input);
    return res.json();
  }

  const { data, error, isLoading } = useSWR<{ projects: Project[] }>(
    "/api/projects",
    fetcher,
    {
      refreshInterval: 1000,
    }
  );
  if (error) return error;
  if (isLoading) return "Loading...";
  return (
    <div>
      ProjectList
      <ul>
        {data.projects?.map((project) => (
          <li className="py-3 bg-gray-200 mb-3" key={project.id}>
            <Project id={project.id} name={project.name}></Project>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;

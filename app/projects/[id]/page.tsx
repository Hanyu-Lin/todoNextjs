import TaskList from "@/app/components/TaskList";
import { getProjectInfo } from "@/lib/getProjectInfo";
import React from "react";
import { getProjects } from "@/lib/getAllProjects";

export async function generateStaticParams() {
  const { projects, error } = await getProjects();

  if (projects) {
    return projects!.map((project) => ({
      id: project.id,
    }));
  } else {
    return [];
  }
}

async function projectDetails({ params }: { params: { id: string } }) {
  const { project, error } = await getProjectInfo(params.id);
  if (error) return error;

  return (
    <div>
      <h1 className="text-3xl">{project?.name}</h1>
      <TaskList projectId={params.id}></TaskList>
    </div>
  );
}

export default projectDetails;

import TaskList from "@/app/components/TaskList";
import { getProjectInfo } from "@/lib/getProjectInfo";
import React from "react";

async function projectDetails({ params }: { params: { id: string } }) {
  const { project, error } = await getProjectInfo(params.id);
  if (error) return error;

  return (
    <div>
      <h1>{project?.name}</h1>
      <TaskList projectId={params.id}></TaskList>
    </div>
  );
}

export default projectDetails;

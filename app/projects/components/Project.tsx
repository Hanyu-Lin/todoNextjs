"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";

export interface ProjectProps {
  id: string;
  name: string | null;
}

function Project({ id, name }: ProjectProps) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const deleteProject = async () => {
    try {
      const body = { id };
      const response = await fetch("api/projects/", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh();
    });
  };
  return (
    <div className="flex items-center justify-between gap-x-4 bg-gray-100 p-4 rounded-md mb-3">
      <p className="text-lg font-medium">{name}</p>
      <div className="flex items-center gap-x-4">
        <Link
          href={`../projects/${id}`}
          className="text-blue-600 hover:underline"
        >
          View more
        </Link>
        <button
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition-colors duration-300 disabled:bg-red-500/60"
          disabled={isPending}
          onClick={deleteProject}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Project;

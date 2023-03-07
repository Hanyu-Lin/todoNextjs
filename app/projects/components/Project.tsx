import Link from "next/link";
import React from "react";

export interface ProjectProps {
  id: string;
  name: string | null;
}

function Project({ id, name }: ProjectProps) {
  return (
    <div className="flex justify-center item-center gap-x-3  ">
      <p>{name}</p>
      <Link href={`../projects/${id}`}>View more</Link>
    </div>
  );
}

export default Project;

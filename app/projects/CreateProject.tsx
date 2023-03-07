"use client";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

function CreateProject() {
  const [projectName, setprojectName] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const isDisabled = isFetching || isPending;
  const handleTextInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    if (value.length <= 20) {
      setprojectName(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFetching(true);
    try {
      const body = { projectName };
      await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.log(error);
    }
    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh();
    });
    setIsFetching(false);
    setprojectName("");
  };

  return (
    <>
      <form
        className="flex flex-col justify-center items-center gap-y-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
        onSubmit={handleSubmit}
      >
        <label className="block text-gray-700 font-medium mb-2">
          Create A Project
        </label>
        <div className="flex gap-x-5">
          <input
            className="border border-gray-400 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
            type="text"
            value={projectName}
            placeholder="Enter a project name"
            onChange={handleTextInputChange}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-400"
            type="submit"
            disabled={isDisabled || !projectName}
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}

export default CreateProject;

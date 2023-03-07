import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

//CRUD endpoint for tasks in a specific project
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const tasks = await prisma.projects.findUnique({
      where: {
        id: params.id,
      },
      select: {
        tasks: {
          select: {
            id: true,
            name: true,
            completed: true,
            projectId: true,
          },
        },
      },
    });
    return NextResponse.json(tasks, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { err: "A error has occured when fetching the project" },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  console.log("received");
  const { name } = await request.json();
  try {
    //check if project exists
    const project = await prisma.projects.findUnique({
      where: {
        id: params.id,
      },
    });
    if (!project) {
      return NextResponse.json({ err: "Wrong project id" }, { status: 400 });
    }
    console.log("project good");
    const task = await prisma.tasks.create({
      data: {
        name,
        completed: false,
        project: {
          connect: { id: params.id },
        },
      },
    });
    console.log(task);
    return NextResponse.json(task, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { err: "A error has occured when making a task" },
      { status: 500 }
    );
  }
}

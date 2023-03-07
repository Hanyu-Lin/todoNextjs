import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

//CRUD endpoint for tasks in a specific project
export async function GET({ params }: { params: { id: string } }) {
  try {
    const project = await prisma.projects.findUnique({
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
    return NextResponse.json(project, { status: 200 });
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
  const { name } = await request.json();
  console.log("received");
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
    const result = await prisma.tasks.create({
      data: {
        name,
        completed: false,
        project: {
          connect: { id: params.id },
        },
      },
    });
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { err: "A error has occured when making a task" },
      { status: 500 }
    );
  }
}

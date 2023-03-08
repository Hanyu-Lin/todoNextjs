import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
async function checkValidProjectId(id: string) {
  //check if project exists
  const project = await prisma.projects.findUnique({
    where: {
      id: id,
    },
  });
  if (!project) {
    return NextResponse.json({ err: "Wrong project id" }, { status: 400 });
  }
}

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
          orderBy: {
            createdAt: "desc",
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
  const { name } = await request.json();
  try {
    checkValidProjectId(params.id);
    const task = await prisma.tasks.create({
      data: {
        name,
        completed: false,
        project: {
          connect: { id: params.id },
        },
      },
    });
    return NextResponse.json(task, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { err: "A error has occured when making a task" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id, completed } = await request.json();
  try {
    checkValidProjectId(params.id);
    const task = await prisma.tasks.update({
      where: { id },
      data: {
        completed,
      },
    });
    return NextResponse.json(task, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { err: "A error has occured when updating the task" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await request.json();
  try {
    checkValidProjectId(params.id);
    const task = await prisma.tasks.delete({
      where: { id },
    });
    return NextResponse.json(task, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { err: "A error has occured when deleting the task" },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getProjects } from "@/lib/getAllProjects";

export async function GET() {
  try {
    const projects = await getProjects();
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { err: "A error has occured when making a post" },
      { status: 500 }
    );
  }
}
export async function POST(request: NextRequest) {
  const { projectName } = await request.json();
  try {
    const result = await prisma.projects.create({
      data: {
        name: projectName,
      },
    });
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { err: "A error has occured when making a post" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
  try {
    const result = await prisma.projects.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { err: "A error has occured when making a post" },
      { status: 500 }
    );
  }
}

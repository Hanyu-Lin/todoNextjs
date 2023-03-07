import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
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

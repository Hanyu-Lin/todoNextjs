import prisma from "./prisma";
export async function getProjectInfo(id: string) {
  try {
    const project = await prisma.projects.findUnique({
      where: {
        id,
      },
      include: {
        tasks: {
          select: {
            id: true,
            name: true,
            completed: true,
          },
        },
      },
    });
    return { project };
  } catch (error) {
    return { error };
  }
}

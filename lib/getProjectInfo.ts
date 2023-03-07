import prisma from "./prisma";
export async function getProjectInfo(id: string) {
  try {
    const project = await prisma.projects.findUnique({
      where: {
        id,
      },
    });
    return { project };
  } catch (error) {
    return { error };
  }
}

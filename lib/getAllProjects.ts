import prisma from "./prisma";
export async function getProjects() {
  try {
    const projects = await prisma.projects.findMany({
      orderBy: { createdAt: "desc" },
    });
    return { projects };
  } catch (error) {
    return { error };
  }
}

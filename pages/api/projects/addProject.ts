import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { projectName } = req.body;
  if (req.method === "POST") {
    console.log(projectName);
    try {
      const result = await prisma.projects.create({
        data: {
          name: projectName,
        },
      });
      res.json(result);
    } catch (error) {
      res.status(400).json({ err: "A error has occured when making a post" });
    }
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}

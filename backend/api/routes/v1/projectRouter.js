import express from 'express';
import { PrismaClient } from '@prisma/client';

const projectRouter = express.Router();
const prisma = new PrismaClient();

/**
 * Add a project
 */

projectRouter.post('/project', async (req, res) => {
  const { title } = req.body;

  const project = await prisma.project.create({
    data: {
      title,
    },
  });
  res.json({ message: 'Success', data: project });

  console.log(title);
});

/**
 * get the project by id
 */

/**
 * Update project Title
 */

/**
 * Add Employees to the project
 */

/**
 * Remove employee from the project
 */

/**
 * Change Department of the project - Assign a different department ID
 */

export default projectRouter;

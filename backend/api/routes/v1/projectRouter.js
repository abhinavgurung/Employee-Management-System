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
 * Get all the Projects
 */
projectRouter.get('/all', async (req, res) => {
  const projects = await prisma.project.findMany();

  if (projects) {
    res.status(200).json(projects);
  } else {
    res.status(404).json({ message: 'Error getting projects' });
  }
});

/**
 * get the project by id
 */
projectRouter.get('/:projID', async (req, res) => {
  const id = req.params.projID;
  const project = await prisma.project.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (project) {
    res.status(200).json(project);
  } else {
    res.status(404).json({ message: 'project not found' });
  }
});


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

import express from 'express';
import { Prisma, PrismaClient } from '@prisma/client';

const userRouter = express.Router();
const prisma = new PrismaClient();

/**
 * Route to add a user
 */
userRouter.post('/employee', async (req, res) => {
  const { fname, lname, mname, age, city, state, title } = req.body;
  const user = await prisma.employee.create({
    data: {
      fName: fname,
      mName: mname ?? '',
      lName: lname,
      age,
      city,
      state,
      title,
    },
  });
  res.json({ message: 'success', data: user });
});

/**
 * get the user with the given user id
 */
userRouter.get('/employee/:empID', async (req, res) => {
  const empID = req.params.empID;
  const user = await prisma.employee.findUnique({
    where: {
      id: parseInt(empID),
    },
  });

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

/**
 * Get all the employees
 */
userRouter.get('/employees', async (req, res) => {
  const employees = await prisma.employee.findMany();

  if (employees) {
    res.status(200).json(employees);
  } else {
    res.status(404).json({ message: 'Error getting users' });
  }
});

/**
 * update partial info for the employee
 */
userRouter.patch('/employee/:empID', async (req, res) => {
  console.log(`Partial update an employee with id ${empID}`);
});

/**
 * delete a user for a given id
 */
userRouter.delete('/employee/:empID', async (req, res) => {
  const id = req.params.empID;
  console.log(`deleting a employee with id ${id}`);
  const user = await prisma.employee.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (user) {
    const deleteUser = await prisma.employee.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json(deleteUser);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

/**
 * Filter an employee by department or deptID?
 */

export default userRouter;

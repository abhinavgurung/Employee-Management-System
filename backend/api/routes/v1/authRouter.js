import express from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const authRouter = express.Router();
const prisma = new PrismaClient();

/**
 * login user
 */

authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  //verify if email exists
  const employee = await prisma.employee.findUnique({
    where: {
      email,
    },
  });

  if (!employee) {
    res.status(404).json({ message: 'user not found' });
    return;
  }
  bcrypt.compare(password, employee.password, (err, response) => {
    if (err) {
      res.status(401).json({ message: 'Password is incorrect!' });
      return;
    }
    if (response) {
      res.status(200).json(employee);
    }
  });
});

/**
 * register user
 */

authRouter.post('/register', async (req, res) => {
  //get all info from req.body
  const { firstName, lastName, email, password, confirmPassword } = req.body;
  let hashedPassword = '';
  //hash the password
  try {
    const salt = await bcrypt.genSalt(10);
    hashedPassword = await bcrypt.hash(password, salt);
  } catch (err) {
    console.log(err);
  }

  const user = await prisma.employee.create({
    data: {
      fName: firstName,
      lName: lastName,
      email,
      password: hashedPassword,
    },
  });
  res.status(200).json({ message: 'success', data: user });
});

export default authRouter;

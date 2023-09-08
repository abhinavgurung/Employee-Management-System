import express from 'express';
import { PrismaClient } from '@prisma/client';

const authRouter = express.Router();
const prisma = new PrismaClient();

/**
 * login user
 */

authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;

//verify if email exists

//match password

  console.log('user log in called');
});

/**
 * register user
 */

authRouter.post('/register', async (req, res) => {
    //get all info from req.body

    //hash the password

    //create user object

    //store the user
  console.log('register the user');
});

export default authRouter;

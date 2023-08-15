import { Prisma, PrismaClient } from '@prisma/client';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './api/routes/v1/userRouter.js';

dotenv.config();
// const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Handle routes

app.post('/add-user', userRouter);
app.get('/find-user/:userID', userRouter);
app.get('/employees', userRouter);
app.delete('/employee/:empID', userRouter);

const server = app.listen(PORT, () => {
  console.log(`server listening at port ${PORT}`);
});

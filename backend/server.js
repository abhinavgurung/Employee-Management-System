import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './api/routes/v1/userRouter.js';
import projectRouter from './api/routes/v1/projectRouter.js';
import departmentRouter from './api/routes/v1/departmentRouter.js';
import authRouter from './api/routes/v1/authRouter.js';

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Handle Employee routes
app.use('/employee', userRouter);

//Handle Project routes
app.use('/project', projectRouter);

//Handle Department routes
app.use('/department', departmentRouter);

app.use('/auth', authRouter);

const server = app.listen(PORT, () => {
  console.log(`server listening at port ${PORT}`);
});

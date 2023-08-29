import express from 'express';
import { PrismaClient } from '@prisma/client';

const departmentRouter = express.Router();
const prisma = new PrismaClient();

/**
 * Add a Department
 */
departmentRouter.post('/', async(req,res)=>{
    const title = req.body.title;
    const director = req.body.director ?? "Not Assigned Yet";
    const data = {title, director}

    const department = await prisma.department.create({data});
    res.json({message: 'success', data: department});

})

/**
 * update a Department - patch
 */

/**
 * get a department by id
 */

/**
 * delete a Department by id
 */

/**
 * Get all departments
 */

/**
 * Get all employees in a department
 */


/**
 * Get list of all directors
 */

export default departmentRouter;
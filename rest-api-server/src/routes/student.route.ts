import { Router } from "express";
import { addStudent, deleteStudent, getStudentById, getStudents, updateStudent } from "../controllers/student.controller";
import { asyncHandler } from "../utils/asynchandler";

const studentRouter = Router();

studentRouter.get('/', asyncHandler(getStudents));
studentRouter.get('/:id', asyncHandler(getStudentById));
studentRouter.post('/', asyncHandler(addStudent));
studentRouter.patch('/:id', asyncHandler(updateStudent));
studentRouter.delete('/:id', asyncHandler(deleteStudent));

export default studentRouter;
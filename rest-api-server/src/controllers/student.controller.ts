import { NextFunction, Request, Response } from "express";
import studentService from "../services/student.service";

export const getStudents = async (req: Request, res: Response, next: NextFunction) => {
    const students = await studentService.getStudents();

    next(students);
}

export const getStudentById = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id as string;

    const student = await studentService.getStudentById(id);

    next(student);
}

export const addStudent = async (req: Request, res: Response, next: NextFunction) => {
    const firstName = req.body.firstName as string;
    const lastName = req.body.lastName as string;
    const age = req.body.lastName as number;
    const standard = req.body.standard as string;

    const student = await studentService.addStudent({ firstName, lastName, age, standard });

    next(student);
}

export const updateStudent = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id as string;
    const firstName = req.body.firstName as string | undefined;
    const lastName = req.body.lastName as string | undefined;
    const age = req.body.age as number | undefined;
    const standard = req.body.standard as string | undefined;

    const updatedStudent = await studentService.updateStudentInfo({ id, firstName, lastName, standard, age });

    next(updatedStudent);
}

export const deleteStudent = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id as string;

    const deletedStudent = await studentService.deleteStudentRecord(id);

    next(deletedStudent);
}
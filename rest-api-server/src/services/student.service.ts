import { v4 as uuid } from "uuid";
import { db } from "../db";
import { BadRequestError } from "../errors/bad-request.error";
class StudentService {
    private _db = db;

    async getStudents() {
        const students = await this._db.selectFrom("Student").selectAll().execute();
        if (!students) throw new BadRequestError("Failed to get students information");

        return students;
    }

    async addStudent(params: { firstName: string, lastName: string, age: number, standard: string }) {
        const { firstName, lastName, age, standard } = params;

        const student = await this._db
            .insertInto("Student")
            .values({ id: uuid(), firstName, lastName, standard, age, createdAt: new Date(), updatedAt: new Date() })
            .returningAll()
            .executeTakeFirst();

        if (!student) throw new BadRequestError("Failed to add student");

        return student;
    }

    async getStudentById(id: string) {
        const student = await this._db.selectFrom("Student").where("Student.id", "=", id).selectAll().executeTakeFirst();
        if (!student) throw new BadRequestError("Failed to get student information");

        return student;
    }

    async updateStudentInfo(params: { id: string, firstName?: string, lastName?: string, age?: number, standard?: string }) {
        const { id, ...rest } = params;

        const student = await this._db.updateTable("Student").set({ ...rest }).where("Student.id", "=", id).returningAll().executeTakeFirst();
        if (!student) throw new BadRequestError("Failed to update student information");

        return student;
    }

    async deleteStudentRecord(id: string) {
        const deletedStudent = await this._db.deleteFrom("Student").where("Student.id", "=", id).returningAll().executeTakeFirst();
        if (!deletedStudent) throw new BadRequestError("Failed to delete student record");

        return deletedStudent;
    }
}

export default new StudentService();
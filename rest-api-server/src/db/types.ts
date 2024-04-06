import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type Student = {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    standard: string;
    createdAt: Timestamp;
    updatedAt: Timestamp;
};
export type DB = {
    Student: Student;
};

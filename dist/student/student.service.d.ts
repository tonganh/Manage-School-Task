import { Repository } from "typeorm";
import { CreateStudentInput } from "./create-student.input";
import { Student } from "./student.entity";
export declare class StudentService {
    private studentRepository;
    constructor(studentRepository: Repository<Student>);
    createStudent(createStudentInput: CreateStudentInput): Promise<Student>;
    getAllStudent(): Promise<Student[]>;
    getStudent(id: string): Promise<Student>;
    getManyStudents(studentsIds: string[]): Promise<Student[]>;
}

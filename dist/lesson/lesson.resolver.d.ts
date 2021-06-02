import { LessonService } from "./lesson.service";
import { CreateLessonInput } from "./lesson.input";
import { AssignStudentsToLessonInput } from "./assignStudentsToLessonInput";
import { Lesson } from "./lesson.entity";
import { StudentService } from "src/student/student.service";
export declare class LessonResolver {
    private lessonService;
    private studentService;
    constructor(lessonService: LessonService, studentService: StudentService);
    lesson(id: string): Promise<Lesson>;
    lessons(): Promise<Lesson[]>;
    createLesson(createLessonInput: CreateLessonInput): Promise<Lesson>;
    assignStudentsToLesson(assignStudentsToLessonInput: AssignStudentsToLessonInput): Promise<Lesson>;
    students(lesson: Lesson): Promise<import("../student/student.entity").Student[]>;
}

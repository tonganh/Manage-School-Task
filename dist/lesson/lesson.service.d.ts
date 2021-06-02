import { Lesson } from "./lesson.entity";
import { Repository } from "typeorm";
import { CreateLessonInput } from "./lesson.input";
export declare class LessonService {
    private lessonRepository;
    constructor(lessonRepository: Repository<Lesson>);
    getLesson(id: string): Promise<Lesson>;
    getLessons(): Promise<Lesson[]>;
    createLesson(createLessonInput: CreateLessonInput): Promise<Lesson>;
    assignStudentsToLesson(lessonID: string, studentID: string[]): Promise<Lesson>;
}

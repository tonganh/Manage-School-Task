import { Repository } from "typeorm";
import { Lesson } from "./lesson.entity";
import { CreateLessonInput } from "./lesson.input";
export declare class LessonService {
    private lessonRepository;
    constructor(lessonRepository: Repository<Lesson>);
    createLesson(createLessonInput: CreateLessonInput): Promise<Lesson>;
    getLesson(id: string): Promise<Lesson>;
}

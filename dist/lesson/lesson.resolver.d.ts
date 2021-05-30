import { CreateLessonInput } from "./lesson.input";
import { LessonService } from "./lesson.service";
export declare class LessonrResolver {
    private lessonService;
    constructor(lessonService: LessonService);
    lesson(id: string): Promise<import("./lesson.entity").Lesson>;
    createLesson(createLessonInput: CreateLessonInput): Promise<import("./lesson.entity").Lesson>;
}

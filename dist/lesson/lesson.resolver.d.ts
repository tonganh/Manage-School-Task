import { LessonService } from "./lesson.service";
export declare class LessonrResolver {
    private lessonService;
    constructor(lessonService: LessonService);
    lesson(id: string): Promise<import("./lesson.entity").Lesson>;
    createLesson(startDate: string, name: string, endDate: string): Promise<import("./lesson.entity").Lesson>;
}

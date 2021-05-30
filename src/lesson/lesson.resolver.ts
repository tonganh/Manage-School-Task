import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { LessonService } from "./lesson.service";
import { LessonType } from "./lesson.type";

@Resolver(of => LessonType)
export class LessonrResolver {
  constructor(private lessonService: LessonService) {}
  @Query(returns => LessonType)
  lesson(
    @Args('id') id:string,
  ) {
    return this.lessonService.getLesson(id)
  }

  @Mutation(returns => LessonType)
  createLesson(
    @Args("startDate") startDate: string,
    @Args("name") name: string,
    @Args("endDate") endDate: string
  ) {
    return this.lessonService.createLesson(name, startDate, endDate);
  }
}

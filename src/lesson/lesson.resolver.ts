import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonrResolver {
  @Query((returns) => LessonType)
  lesson() {
    return {
      id: 'adsf',
      name: 'tong anh',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }

  @Mutation(returns=> LessonType)
  createLesson( ){
  
  }
}

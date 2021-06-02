"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const lesson_type_1 = require("./lesson.type");
const lesson_service_1 = require("./lesson.service");
const lesson_input_1 = require("./lesson.input");
const assignStudentsToLessonInput_1 = require("./assignStudentsToLessonInput");
const lesson_entity_1 = require("./lesson.entity");
const student_service_1 = require("../student/student.service");
let LessonResolver = class LessonResolver {
    constructor(lessonService, studentService) {
        this.lessonService = lessonService;
        this.studentService = studentService;
    }
    lesson(id) {
        return this.lessonService.getLesson(id);
    }
    lessons() {
        return this.lessonService.getLessons();
    }
    createLesson(createLessonInput) {
        return this.lessonService.createLesson(createLessonInput);
    }
    assignStudentsToLesson(assignStudentsToLessonInput) {
        const { lessonID, studentIds } = assignStudentsToLessonInput;
        return this.lessonService.assignStudentsToLesson(lessonID, studentIds);
    }
    students(lesson) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.studentService.getManyStudents(lesson.students);
        });
    }
};
__decorate([
    graphql_1.Query(returns => lesson_type_1.LessonType),
    __param(0, graphql_1.Args("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LessonResolver.prototype, "lesson", null);
__decorate([
    graphql_1.Query(returns => [lesson_type_1.LessonType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LessonResolver.prototype, "lessons", null);
__decorate([
    graphql_1.Mutation(returns => lesson_type_1.LessonType),
    __param(0, graphql_1.Args("createLessonInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [lesson_input_1.CreateLessonInput]),
    __metadata("design:returntype", void 0)
], LessonResolver.prototype, "createLesson", null);
__decorate([
    graphql_1.Mutation(returns => lesson_type_1.LessonType),
    __param(0, graphql_1.Args("assignStudentsToLessonInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [assignStudentsToLessonInput_1.AssignStudentsToLessonInput]),
    __metadata("design:returntype", void 0)
], LessonResolver.prototype, "assignStudentsToLesson", null);
__decorate([
    graphql_1.ResolveField(),
    __param(0, graphql_1.Parent()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [lesson_entity_1.Lesson]),
    __metadata("design:returntype", Promise)
], LessonResolver.prototype, "students", null);
LessonResolver = __decorate([
    graphql_1.Resolver(type => lesson_type_1.LessonType),
    __metadata("design:paramtypes", [lesson_service_1.LessonService,
        student_service_1.StudentService])
], LessonResolver);
exports.LessonResolver = LessonResolver;
//# sourceMappingURL=lesson.resolver.js.map
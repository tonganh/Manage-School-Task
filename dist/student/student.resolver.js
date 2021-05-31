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
exports.StudentResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const create_student_input_1 = require("./create-student.input");
const student_service_1 = require("./student.service");
const student_type_1 = require("./student.type");
let StudentResolver = class StudentResolver {
    constructor(studentService) {
        this.studentService = studentService;
    }
    createStudent(createStudentInput) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.studentService.createStudent(createStudentInput);
        });
    }
    student(id) {
        return this.studentService.getStudent(id);
    }
    students() {
        return this.studentService.getAllStudent();
    }
};
__decorate([
    graphql_1.Mutation(returns => student_type_1.StudentType),
    __param(0, graphql_1.Args("createStudentInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_student_input_1.CreateStudentInput]),
    __metadata("design:returntype", Promise)
], StudentResolver.prototype, "createStudent", null);
__decorate([
    graphql_1.Query(returns => student_type_1.StudentType),
    __param(0, graphql_1.Args("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentResolver.prototype, "student", null);
__decorate([
    graphql_1.Query(returns => [student_type_1.StudentType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudentResolver.prototype, "students", null);
StudentResolver = __decorate([
    graphql_1.Resolver(of => student_type_1.StudentType),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], StudentResolver);
exports.StudentResolver = StudentResolver;
//# sourceMappingURL=student.resolver.js.map
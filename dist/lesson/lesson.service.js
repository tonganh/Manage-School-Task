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
exports.LessonService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const lesson_entity_1 = require("./lesson.entity");
const typeorm_2 = require("typeorm");
const uuid_1 = require("uuid");
let LessonService = class LessonService {
    constructor(lessonRepository) {
        this.lessonRepository = lessonRepository;
    }
    getLesson(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.lessonRepository.findOne({ id });
        });
    }
    getLessons() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.lessonRepository.find();
        });
    }
    createLesson(createLessonInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, startDate, endDate, students } = createLessonInput;
            const lesson = this.lessonRepository.create({
                id: uuid_1.v4(),
                name,
                startDate,
                endDate,
                students,
            });
            return this.lessonRepository.save(lesson);
        });
    }
    assignStudentsToLesson(lessonID, studentID) {
        return __awaiter(this, void 0, void 0, function* () {
            const lesson = yield this.lessonRepository.findOne({ id: lessonID });
            lesson.students = [...lesson.students, ...studentID];
            return this.lessonRepository.save(lesson);
        });
    }
};
LessonService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(lesson_entity_1.Lesson)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LessonService);
exports.LessonService = LessonService;
//# sourceMappingURL=lesson.service.js.map
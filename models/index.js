// Compile model from schema

import {USER_MODELS} from "./user.model.js";

import {COURSE_MODELS} from "./course.model.js";

USER_MODELS.UserModel.watch().on("change", (data) =>
    console.log(new Date(), data),
);
COURSE_MODELS.CourseModel.watch().on("change", (data) =>
    console.log(new Date(), data),
);

export default {
    UserModel: USER_MODELS.UserModel,
    StudentModel: USER_MODELS.StudentModel,
    ProfessorModel: USER_MODELS.ProfessorModel,
    ItManagerModel: USER_MODELS.ItManagerModel,
    EduManagerModel: USER_MODELS.EduManagerModel,
    CourseModel: COURSE_MODELS.CourseModel,
    TermCourseModel: COURSE_MODELS.TermCourseModel,
};

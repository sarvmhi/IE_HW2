import {Router} from "express";
import {
    addCourseHandler,
    addStudentToCourseHandler,
    deleteCourseHandler,
    getCourseHandler,
    getCoursesHandler,
    removeStudentFromCourseHandler,
    editCourseHandler,
} from "../controllers/courses.controller.js";
import {authenticateToken} from "../utils/jwt.js";

const courseRouter = Router();

courseRouter.get("/course/:id", authenticateToken, getCourseHandler);
courseRouter.get("/courses", authenticateToken, getCoursesHandler);
courseRouter.post("/course/:isTerm", authenticateToken, addCourseHandler);
courseRouter.put("/course/:id", authenticateToken, editCourseHandler);
courseRouter.delete("/course/:id", authenticateToken, deleteCourseHandler);
courseRouter.post(
    "/course/:id/student",
    authenticateToken,
    addStudentToCourseHandler,
);
courseRouter.delete(
    "/course/:id/student",
    authenticateToken,
    removeStudentFromCourseHandler,
);

export default (app) => {
    app.use("/",courseRouter);
};

import {Router} from "express";
import {
    loginUserHandler,
    registerUserHandler,
} from "../controllers/auth.controller.js";

const authRouter = Router();

// to login and register for all users (student, professor, edumanager, itmanager)

authRouter.post("/login", loginUserHandler);
// authRouter.post("/register", registerUserHandler);
authRouter.post("/register/:type", registerUserHandler);

export default (app) => {
    app.use("/", authRouter);
};

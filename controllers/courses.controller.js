import {
    addCourse,
    deleteCourse,
    getCourse,
    getCourses,
    editCourse,
} from "./courses.action.js";
import {
    getStudent,
    getStudents,
    getUser,
    editStudent,
    getProfessor,
} from "./users.action.js";

export const getCourseHandler = async (req, res) => {
    try {
        const course = await getCourse(req?.params?.id);
        // const user = await getUser(req?.authData.id);
        const user = req?.authData;
        if (
            user?.userType === "student" &&
            course.students?.includes(user?.id)
        ) {
            res.status(200)
                .json({
                    data: course,
                    status: 200,
                    error: null,
                    ok: true,
                    message: "",
                })
                .end(() => {
                    // log
                });
        } else if (
            user?.userType === "professor" &&
            course.professor?.id === user?.id
        ) {
            res.status(200)
                .json({
                    data: course,
                    status: 200,
                    error: null,
                    ok: true,
                    message: "",
                })
                .end(() => {
                    // log
                });
        } else if (user?.userType === "edumanager") {
            res.status(200)
                .json({
                    data: course,
                    status: 200,
                    error: null,
                    ok: true,
                    message: "",
                })
                .end(() => {
                    // log
                });
        } else if (user.userType === "itmanager") {
            res.status(200)
                .json({
                    data: course,
                    status: 200,
                    error: null,
                    ok: true,
                    message: "",
                })
                .end(() => {
                    // log
                });
        } else {
            res.status(400)
                .json({
                    data: null,
                    status: 400,
                    error: "access denied",
                    ok: false,
                    message: "you dont have permission",
                })
                .end(() => {
                    // log
                });
        }
    } catch (error) {
        res.status(400)
            .json({
                data: null,
                status: 400,
                error: error,
                ok: false,
                message: "error in get course",
            })
            .end(() => {
                // log
            });
    }
};

export const getCoursesHandler = async (req, res) => {
    try {
        const courses = await getCourses();
        const user = await getUser(req?.authData.id);
        if (user?.userType === "student") {
            res.status(200)
                .json({
                    data: courses.filter((c) => user.courses.includes(c.id)),
                    status: 200,
                    error: null,
                    ok: true,
                    message: "",
                })
                .end(() => {
                    // log
                });
        } else if (user?.userType === "professor") {
            res.status(200)
                .json({
                    data: courses.filter((c) => c.professorId === user.id),
                    status: 200,
                    error: null,
                    ok: true,
                    message: "",
                })
                .end(() => {
                    // log
                });
        } else if (user?.userType === "edumanager") {
            res.status(200)
                .json({
                    data: courses,
                    status: 200,
                    error: null,
                    ok: true,
                    message: "",
                })
                .end(() => {
                    // log
                });
        } else if (user.userType === "itmanager") {
            res.status(200)
                .json({
                    data: courses,
                    status: 200,
                    error: null,
                    ok: true,
                    message: "",
                })
                .end(() => {
                    // log
                });
        } else {
            res.status(400)
                .json({
                    data: null,
                    status: 400,
                    error: "access denied",
                    ok: false,
                    message: "you dont have permission",
                })
                .end(() => {
                    // log
                });
        }
    } catch (error) {
        res.status(400)
            .json({
                data: null,
                status: 400,
                error: error,
                ok: false,
                message: "error in get course",
            })
            .end(() => {
                // log
            });
    }
};

export const editCourseHandler = async (req, res) => {
    try {
        // const user = await getUser(req?.authData.id);
        const user = req?.authData;
        if (user?.userType === "edumanager") {
            const updatedCourse = await editCourse(req?.params?.id, req?.body);
            res.status(200)
                .json({
                    data: updatedCourse,
                    status: updatedCourse !== null ? 200 : 400,
                    error: null,
                    ok: updatedCourse !== null,
                    message: "",
                })
                .end(() => {
                    // log
                });
        } else if (user.userType === "itmanager") {
            const updatedCourse = await editCourse(req?.params?.id, req?.body);
            res.status(200)
                .json({
                    data: updatedCourse,
                    status: updatedCourse !== null ? 200 : 400,
                    error: null,
                    ok: updatedCourse !== null,
                    message: "",
                })
                .end(() => {
                    // log
                });
        } else {
            res.status(400)
                .json({
                    data: null,
                    status: 400,
                    error: "access denied",
                    ok: false,
                    message: "you dont have permission",
                })
                .end(() => {
                    // log
                });
        }
    } catch (error) {
        res.status(400)
            .json({
                data: null,
                status: 400,
                error: error,
                ok: false,
                message: "error in updating course",
            })
            .end(() => {
                // log
            });
    }
};

export const deleteCourseHandler = async (req, res) => {
    try {
        const user = req?.authData;
        if (user?.userType === "edumanager") {
            const ok = await deleteCourse(req?.params?.id);
            res.status(200)
                .json({
                    data: ok,
                    status: 200,
                    error: null,
                    ok: ok,
                    message: "",
                })
                .end(() => {
                    // log
                });
        } else if (user.userType === "itmanager") {
            const ok = await deleteCourse(req?.params?.id);
            res.status(200)
                .json({
                    data: ok,
                    status: 200,
                    error: null,
                    ok: ok,
                    message: "",
                })
                .end(() => {
                    // log
                });
        } else {
            res.status(400)
                .json({
                    data: false,
                    status: 400,
                    error: "access denied",
                    ok: false,
                    message: "you dont have permission",
                })
                .end(() => {
                    // log
                });
        }
    } catch (error) {
        res.status(400)
            .json({
                data: false,
                status: 400,
                error: error,
                ok: false,
                message: "error in deleting course",
            })
            .end(() => {
                // log
            });
    }
};

export const addCourseHandler = async (req, res) => {
    try {
        // const user = await getUser(req?.authData.id);
        const user = req?.authData;
        if (user?.userType === "edumanager") {
            const course = await addCourse(req?.body,!!req?.params?.isTerm);
            res.status(200)
                .json({
                    data: course,
                    status: 200,
                    error: null,
                    ok: true,
                    message: "",
                })
                .end(() => {
                    // log
                });
        } else if (user.userType === "itmanager") {
            const course = await addCourse(req?.body, !!req?.params?.isTerm);
            res.status(200)
                .json({
                    data: course,
                    status: 200,
                    error: null,
                    ok: true,
                    message: "",
                })
                .end(() => {
                    // log
                });
        } else {
            res.status(400)
                .json({
                    data: null,
                    status: 400,
                    error: "access denied",
                    ok: false,
                    message: "you dont have permission",
                })
                .end(() => {
                    // log
                });
        }
    } catch (error) {
        res.status(400)
            .json({
                data: null,
                status: 400,
                error: error,
                ok: false,
                message: "error in get course",
            })
            .end(() => {
                // log
            });
    }
};

export const addStudentToCourseHandler = async (req, res) => {
    try {
        // const user = await getUser(req?.authData.id);
        const user = req?.authData;
        if (user?.userType === "edumanager") {
            const course = await getCourse(req?.body?.courseId);
            const student = await getStudent(req?.body?.studentId);
            const updatedCourse = await editCourse(course.id, {
                ...course,
                students: [...course.students, student.id],
            });
            const updatedStudent = await editStudent(student.id, {
                ...student,
                courses: [...student.courses, course.id],
            });
            res.status(200)
                .json({
                    data: {
                        course: updatedCourse,
                        student: updatedStudent,
                    },
                    status: 200,
                    error: null,
                    ok: true,
                    message: "student added",
                })
                .end(() => {
                    // log
                });
        } else if (user.userType === "itmanager") {
            const course = await getCourse(req?.body?.courseId);
            const student = await getStudent(req?.body?.studentId);
            const updatedCourse = await editCourse(course.id, {
                ...course,
                students: [...course.students, student.id],
            });
            const updatedStudent = await editStudent(student.id, {
                ...student,
                courses: [...student.courses, course.id],
            });
            res.status(200)
                .json({
                    data: {
                        course: updatedCourse,
                        student: updatedStudent,
                    },
                    status: 200,
                    error: null,
                    ok: true,
                    message: "student added",
                })
                .end(() => {
                    // log
                });
        } else {
            res.status(400)
                .json({
                    data: null,
                    status: 400,
                    error: "access denied",
                    ok: false,
                    message: "you dont have permission",
                })
                .end(() => {
                    // log
                });
        }
    } catch (error) {
        res.status(400)
            .json({
                data: null,
                status: 400,
                error: error,
                ok: false,
                message: "error in get course",
            })
            .end(() => {
                // log
            });
    }
};

export const removeStudentFromCourseHandler = async (req, res) => {
    try {
        // const user = await getUser(req?.authData.id);
        const user = req?.authData;
        if (user?.userType === "edumanager") {
            const course = await getCourse(req?.body?.courseId);
            const student = await getStudent(req?.body?.studentId);
            const updatedCourse = await editCourse(course.id, {
                ...course,
                students: course.students.filter((stid) => stid !== student.id),
            });
            const updatedStudent = await editStudent(student.id, {
                ...student,
                courses: student.courses.filter((cid) => cid !== course.id),
            });
            res.status(200)
                .json({
                    data: {
                        course: updatedCourse,
                        student: updatedStudent,
                    },
                    status: 200,
                    error: null,
                    ok: true,
                    message: "student added",
                })
                .end(() => {
                    // log
                });
        } else if (user.userType === "itmanager") {
            const course = await getCourse(req?.body?.courseId);
            const student = await getStudent(req?.body?.studentId);
            const updatedCourse = await editCourse(course.id, {
                ...course,
                students: course.students.filter((stid) => stid !== student.id),
            });
            const updatedStudent = await editStudent(student.id, {
                ...student,
                courses: student.courses.filter((cid) => cid !== course.id),
            });
            res.status(200)
                .json({
                    data: {
                        course: updatedCourse,
                        student: updatedStudent,
                    },
                    status: 200,
                    error: null,
                    ok: true,
                    message: "student added",
                })
                .end(() => {
                    // log
                });
        } else {
            res.status(400)
                .json({
                    data: null,
                    status: 400,
                    error: "access denied",
                    ok: false,
                    message: "you dont have permission",
                })
                .end(() => {
                    // log
                });
        }
    } catch (error) {
        res.status(400)
            .json({
                data: null,
                status: 400,
                error: error,
                ok: false,
                message: "error in get course",
            })
            .end(() => {
                // log
            });
    }
};

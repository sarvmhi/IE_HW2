import models from "../models/index.js";

const {CourseModel, TermCourseModel} = models;

// to add course
export const addCourse = async (courseData, is_term = false) => {
    try {
        if (courseData?.name?.length > 0) {
            if (is_term) {
                const course = new TermCourseModel(courseData);
                await course.save();
                return course;
            }
            const course = new CourseModel(courseData);
            course.save();
            return course;
        }
        return null;
    } catch (error) {
        return null;
    }
};

// to get course
export const getCourse = async (id) => {
    try {
        if (id?.length > 0) {
            const course = await CourseModel.findOne({id}).exec();
            return course;
        }
        return null;
    } catch (error) {
        return null;
    }
};

export const editCourse = async (id, courseData) => {
    try {
        if (courseData?._id?.length > 0) {
            const course = await CourseModel.findOneAndUpdate(
                {id},
                courseData,
            ).exec();
            return course;
        }
        return null;
    } catch (error) {
        return null;
    }
};

export const deleteCourse = async (id) => {
    try {
        if (id?.length > 0) {
            await CourseModel.findOneAndDelete({id}).exec();
            return true;
        }
        return false;
    } catch (error) {
        return false;
    }
};

export const getCourses = async (t) => {
    try {
        if (t) {
            const courses = await CourseModel.find({__t: t}).exec();
            return courses;
        }
        const courses = await CourseModel.find({}).exec();
        return courses;
    } catch (error) {
        return [];
    }
};

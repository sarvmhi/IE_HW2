import {mongoose_client} from "../utils/mongo.js";
const Schema = mongoose_client.Schema;
const options = {discriminatorKey: "kind"};

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: String,
        required: true,
    },
});

//Create Approved Course Schema

const UserModel = mongoose_client.model("user", UserSchema);

const StudentModel = UserModel.discriminator(
    "student",
    new Schema({
        level: {
            type: String,
        },
        entryYear: {
            type: Number,
        },
        entryTerm: {
            type: String,
        },
        gpa: {
            type: Number,
            required: true,
        },
        courses: {
            type: [String],
            default:[]
        }
    }),
    options,
);

const ProfessorModel = UserModel.discriminator(
    "professor",
    new Schema({
        department: {
            type: String,
            required: true,
        },
        subject: {
            type: String,
            required: true,
        },
        rank: {
            type: Number,
            required: true,
        },
        courses: {
            type: [String],
            required: true,
            default: [],
        },
    }),
    options,
);

const EduManagerModel = UserModel.discriminator(
    "edumanager",
    new Schema({
        department: {
            type: String,
            required: true,
        },
    }),
    options,
);

const ItManagerModel = UserModel.discriminator("itmanager", new Schema({}));

export const USER_MODELS = {
    UserModel,
    EduManagerModel,
    ItManagerModel,
    ProfessorModel,
    StudentModel,
};

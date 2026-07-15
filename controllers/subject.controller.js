import ApiError from "../classes/apiError.class.js";
import FacultyModel from "../models/faculty.model.js";
import GroupModel from "../models/group.model.js";
import SubjectModel from "../models/subject.model.js";

export const getSubjectController = (req, res, next) => {
    
}

export const getSubjectsController = (req, res, next) => {

}

export const createSubjectController = async (req, res, next) => {
    try {
        const { name, facultyId, credits, moderatorId } = req.body;

        if(!name || !credits || !moderatorId) {
            throw new ApiError(400, "Missing required fields");
        }

        const faculty = await FacultyModel.findById(facultyId);

        if(!faculty) {
            throw new ApiError(400, "Faculty does not exist");
        }

        const group = await GroupModel.findOne({ moderatorId });
        if(!group) {
            throw new ApiError(400, "You are not moderator of any Group");
        }

        const subject = await SubjectModel.create({ name, facultyId, credits, groupId: group._id});

        res.status(201).send({
            success: true,
            message: "Subejct created successfully",
            data: {
                subject: subject,
            }
        })
    } catch (e) {
        next(e);
    }
}

export const updateSubjectController = (req, res, next) => {

}

export const deleteSubjectController = (req, res, next) => {

}

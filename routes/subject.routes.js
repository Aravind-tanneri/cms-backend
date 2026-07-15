import { Router } from 'express';
import {
    createSubjectController, deleteSubjectController, getSubjectController, getSubjectsController,
    updateSubjectController
} from "../controllers/subject.controller.js";

const subjectRouter = Router();

subjectRouter.get('/:subjectId', getSubjectController);
subjectRouter.get('/', getSubjectsController);
subjectRouter.post('/', createSubjectController);
subjectRouter.put('/:subjectId', updateSubjectController);
subjectRouter.delete('/:subjectId', deleteSubjectController);


export default subjectRouter;
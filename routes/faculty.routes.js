import { Router } from 'express';

const facultyRouter = Router();

facultyRouter.get('/:subjectId', getFacultyController);
facultyRouter.get('/', getFacultyController);
facultyRouter.post('/', createFacultyController);
facultyRouter.put('/:subjectId', updateFacultyController);
facultyRouter.delete('/:subjectId', deleteFacultyController);


export default facultyRouter;
import express from 'express';
import employeeRegistration from '../../controllers/employees/registrationController.js';
import profileController from '../../controllers/employees/profileController.js';

const employeeRouter = express.Router();
employeeRouter.post('/employees/registration', employeeRegistration)
employeeRouter.post('/employees/profile/:id', profileController);

export default employeeRouter;
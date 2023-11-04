import express from 'express';
import employeeRegistration from '../../controllers/employees/registrationController.js';

const employeeRouter = express.Router();
employeeRouter.post('/employees/registration', employeeRegistration)

export default employeeRouter;
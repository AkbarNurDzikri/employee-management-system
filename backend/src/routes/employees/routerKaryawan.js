import express from 'express';
import pendaftaranKaryawan from '../../controllers/karyawan/controllerPendaftaran.js';
import biodataController from '../../controllers/karyawan/biodataController.js';
import credentialsController from '../../controllers/karyawan/credentialsController.js';

const employeeRouter = express.Router();
employeeRouter.post('/employees/registration', pendaftaranKaryawan);
employeeRouter.patch('/employees/biodata/:id', biodataController);
employeeRouter.patch('/employees/credentials/:id', credentialsController);

export default employeeRouter;
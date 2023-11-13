import express from 'express';
import permohonanCuti from '../../controllers/cuti/cutiController.js';

const cutiRouter = express.Router();
cutiRouter.post('/cuti/submit', permohonanCuti);

export default cutiRouter;
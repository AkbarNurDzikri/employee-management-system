import express from 'express';
import verifikasiEmail from '../../controllers/otentifikasi/controllerEmail.js';
import login from '../../controllers/otentifikasi/loginController.js';

const routerOtentifikasi = express.Router();

routerOtentifikasi.get('/auth/verify', verifikasiEmail);
routerOtentifikasi.post('/auth/login', login);

export default routerOtentifikasi;
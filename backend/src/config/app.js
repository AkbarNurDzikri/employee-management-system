import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import routerKaryawan from '../routes/employees/routerKaryawan.js';
import routerOtentifikasi from '../routes/otentifikasi/routerOtentifikasi.js';
import cutiRouter from '../routes/cuti/cutiRouter.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(routerKaryawan);
app.use(routerOtentifikasi);
app.use(cutiRouter);
export default app;
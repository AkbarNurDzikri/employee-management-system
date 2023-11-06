import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import employeeRouter from '../routes/employees/employeeRouter.js';
import authRouter from '../routes/auth/authRouter.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(employeeRouter);
app.use(authRouter);
export default app;
import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import indexRouter from './src/routes/index';
import cors from 'cors'
const app = express();
app.use(logger('dev'));
app.use(cors({
    origin: '*'
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/v1', indexRouter);

export default app;
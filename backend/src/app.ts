import express, { Request, Response } from 'express';
import cors from 'cors';
import userRouter from './routes/userRouter';
import authRouter from './routes/authRouter';
import errorHandler from './middleware/errorHandler';

export const app = express();

app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

app.use(errorHandler);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Typescript with express');
});

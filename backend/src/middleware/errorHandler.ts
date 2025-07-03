import { Request, Response, NextFunction } from 'express';
import CustomErrors from '../errors/CustomErrors';

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const statusCode =
    err instanceof CustomErrors ? err.statusCode : res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode).json({
    success: false,
    massage: err.message || 'Server Error',
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
  });
};

export default errorHandler;

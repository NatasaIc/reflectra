import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/userModel';
import asyncHandler from './asyncHandler';
import NotFoundError from '../errors/NotFoundError';

const authProtect = asyncHandler(async(req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      res.status(401).json({ message: 'Not authorized, no token' });
      return;
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };

    const user = await User.findById(decoded.id).select('-password');
    if (!user) {
      res.status(401).json({ message: 'User not found' });
      return;
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(401);
    throw new NotFoundError('Unauthorized');
  }
});

const admin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new NotFoundError('Unauthorized');
  }
};


export { authProtect, admin };

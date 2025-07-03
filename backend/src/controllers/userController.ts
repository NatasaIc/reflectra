import { Request, Response } from 'express';
import User from '../models/userModel';
import asyncHandler from '../middleware/asyncHandler';
import NotFoundError from '../errors/NotFoundError';
import BadRequestError from '../errors/BadRequestError';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


/**
 * User SignUp
 *
 * Users can register themselves
 */

const signUp = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new NotFoundError('User already exists');
  } else {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET!, {
      expiresIn: '1d',
    });

    res.status(201).json({ user: newUser, token });
  }
});

/**
 * Login
 *
 * Users can login to account
 */

const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw new NotFoundError('Invalid email or password. Please try again');
  }

  // if user exist
  // Validate password
  const isPassWordValid = await bcrypt.compare(password, user.password);
  if (!isPassWordValid) {
    throw new NotFoundError('Ivalid password or email. Please try again');
  }

  // Generate JWT
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
    expiresIn: '1d',
  });

  res.status(200).json({
    user: {
      id: user._id,
      email: user.email,
    },
    token,
  });
});

/**
 * Get Current User
 * 
 * Retrive the current loggdein user to protect route
 */
const getUserProfile = asyncHandler(async(req: Request, res: Response) => {
    if (!req.user) {

      throw new NotFoundError('User not found');
    }

    res.status(200).json({
      id: req.user._id,
      email: req.user.email,
    });
});

const updateProfile = asyncHandler(async(req: Request, res: Response) => {
  if (!req.user) {
    throw new NotFoundError('User not found');
  }

  const user = await User.findById(req.user._id);

  if (!user) {
    throw new NotFoundError('User not found');
  }

  user.email = req.body.email || user.email;

  if (req.body.password && req.body.password.trim() !== '') {
    user.password = await bcrypt.hash(req.body.password, 10);
  }

  const updatedUser = await user.save();

  res.status(200).json({
    id: updatedUser._id,
    email: updatedUser.email,
    isAdmin: updatedUser.isAdmin,
  });
}); 


/**
 * Get all users
 *
 * Retrive a list of all users from the database
 */
const getUsers = asyncHandler(async (req: Request, res: Response) => {
  const users = await User.find();
  if (!users) {
    throw new NotFoundError('Cant get users. Check endpoint');
  }
  res.json(users);
});

/**
 * Get user by ID
 *
 * Retrive a speficic user with the id
 */

const getUserById = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const user = await User.findById(req.params.id);

  if (!user) {
    throw new NotFoundError('User not found. Check if user id is correct');
  }

  res.status(200).json(user);
});

/**
 * Delete User
 *
 */

const deleteUserById = asyncHandler(async (req: Request, res: Response) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user) {
    throw new BadRequestError('Somthing went wrong. Check if user id is correct');
  }

  res.status(200).json({ massage: 'User deleted successfully' });
});

export const userController = {
  getUsers,
  getUserById,
  deleteUserById,
  signUp,
  login,
  getUserProfile,
  updateProfile,
};

import { Response, Request, NextFunction } from 'express';
import { check, validationResult, ValidationError } from 'express-validator';

// Rules
export const validateSignup = [
  check('email').isEmail().withMessage('Email is invalid'),
  check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
];

// Handler
export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const extractedErrors = errors.array().map(err => {
      // Type guard for param-based errors
      if ('param' in err) {
        return {
          field: err.param,
          message: err.msg,
        };
      }

      return {
        field: 'unknown',
        message: err.msg,
      };
    });

    res.status(400).json({ success: false, errors: extractedErrors });
  }

  next();
};

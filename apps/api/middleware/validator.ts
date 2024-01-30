import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

export const registerValidation = [
  body('username').notEmpty().withMessage('Username required'),
  body('email').notEmpty().withMessage('Email required'),
  body('email').isEmail().withMessage('Email Invalid'),
  body('firstName').notEmpty().withMessage('First Name Required'),
  body('lastName').notEmpty().withMessage('Last Name Required'),
  body('password').notEmpty().withMessage('Password required!'),
  body('password').isStrongPassword({
    minLength: 6,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 0,
    minUppercase: 1,
  }),
  (req: Request, res: Response, next: NextFunction) => {
    const errorValidator = validationResult(req);
    if (!errorValidator.isEmpty()) {
      return res.status(400).send({ error: errorValidator.array() });
    }
    next();
  },
];

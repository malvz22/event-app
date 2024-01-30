import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      dataUser: any;
    }
  }
}

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.header('Authorization')?.split(' ')[1];
    const secret = process.env.JWT_SECRET!;
    if (!token) {
      return res.status(400).send('Token required');
    }
    const verifiedToken = verify(token, secret);

    req.dataUser = verifiedToken;
    next();
  } catch (error: any) {
    return res.status(400).send('Token error');
  }
};

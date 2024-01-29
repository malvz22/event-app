import prisma from '@/prisma';
import { Request, Response, NextFunction } from 'express';
import { body } from 'express-validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { nanoid } from 'nanoid';

export class AuthController {
  //Register User

  async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const generateReferral = (username: string): string => {
        let result: string = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < 5) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength),
          );
          counter += 1;
        }
        let referral: string = `${username}${result}`;
        return referral.toUpperCase();
      };

      const {
        username,
        email,
        firstName,
        lastName,
        password,
        referalcode,
        points,
      } = req.body;

      const hashPassword = await bcrypt.hash(password, 10);

      console.log(req.body);

      const newUser = await prisma.user.create({
        data: {
          username,
          email,
          firstName,
          lastName,
          password: hashPassword,
          referalcode: generateReferral(username),
          points,
        },
      });

      console.log(generateReferral(username));

      res.status(201).send(newUser);
    } catch (error: any) {
      console.log(error);
      return res.status(500).send(error);
    }
  }

  //Login User

  async loginUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      if (!user) {
        return res.status(404).json({
          message: 'User not found',
        });
      }

      if (!user?.password) {
        return res.status(404).json({
          message: 'Password required',
        });
      }

      const isPasswordValid = await bcrypt.compare(password, user?.password);

      if (isPasswordValid) {
        const payload = {
          id: user.id,
          username: user.username,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        };

        const secret = process.env.JWT_SECRET!;

        const expiresIn = 60 * 60 * 1;

        const token = jwt.sign(payload, secret, { expiresIn: expiresIn });
        return res.json({
          data: {
            id: user.id,
            username: user.username,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
          },
          token: token,
        });
      } else {
        return res.status(403).json({
          message: 'wrong password',
        });
      }
    } catch (error: any) {
      console.log(error);
      return res.status(500).send(error);
    }
  }
}

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
        inputReferalCode,
      } = req.body;

      let points = 0;

      const hashPassword = await bcrypt.hash(password, 10);

      let refCode = true;

      // let addPoints = 0;

      const isRefcodeValid = await prisma.user.findFirst({
        select: {
          referalcode: true,
        },
        where: {
          referalcode: inputReferalCode,
        },
      });

      console.log(isRefcodeValid?.referalcode);

      if (!isRefcodeValid?.referalcode || isRefcodeValid.referalcode === null) {
        refCode = false;
      }

      console.log(refCode);

      if ((refCode = false)) {
        points = 0;
      } else if ((refCode = true)) {
        points = 10000;
      }

      console.log(req.body);

      const newUser = await prisma.user.create({
        data: {
          username,
          email,
          firstName,
          lastName,
          password: hashPassword,
          referalcode: generateReferral(username),
          // points,
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

  //Get all user data

  async getUserReferalCode(req: Request, res: Response, next: NextFunction) {
    try {
      const inputReferalCode = req.body.referalcode;

      let isRefcodeValid = true;

      const userReferalCode = await prisma.user.findFirst({
        select: {
          referalcode: true,
        },
        where: {
          referalcode: inputReferalCode,
        },
      });

      if (!userReferalCode) {
        isRefcodeValid = false;
        // if (!userReferalCode || userReferalCode == null) {
        return res.status(400).send('Invalid Referal Code');
        // }
        // throw new Error('Invalid Referal Code');
      }

      return res.status(200).send(isRefcodeValid);
    } catch (error: any) {
      next(error);
    }
  }
}

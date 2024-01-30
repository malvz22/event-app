import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();
import path from 'path';
import type { EventList, Payment } from '@prisma/client';
import fs from 'fs';
import { NextFunction, Request, Response } from 'express';
import express from 'express';
import multer from 'multer';
const app = express();

import fileUpload, { UploadedFile } from 'express-fileupload';

export const getEvents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const response = await prisma.eventList.findMany();
    res.status(200).json(response);
  } catch (err: any) {
    res.status(500).json({ msg: err.message });
  }
};

// export const getEventById = async (req: any, res: any) => {
//   try {
//     const response = await prisma.event.findUnique({
//       where: {
//         id: Number(req.params.id),
//       },
//     });
//     res.status(200).json(response);
//   } catch (err: any) {
//     res.status(404).json({ msg: err.message });
//   }
// };

export const createEvent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    title,
    description,
    startDate,
    location,
    endDate,
    isFree,
    price,
    totalSeat,
    categoryName,
    cities,
    discount,
    discountLimit,
    organizer
  }: {
    title: string;
    description: string;
    startDate: Date;
    location: string;
    endDate: Date;
    isFree: Payment;
    price: number;
    totalSeat: number;
    categoryName: string;
    cities:string;
    discount:number;
    discountLimit:number;
    organizer:string;
  } = req.body;

  await prisma.eventList.create({
    data: {
      title: title,
      description: description,
      location: location,
      isFree: isFree,
      startDate: startDate,
      endDate: endDate,
      price: price,
      totalSeat: totalSeat,
      discount:discount,
      discountLimit:discountLimit,
      organizer:organizer,
      categories: {
        connectOrCreate: {
          where: {
            categoryName: categoryName,
          },
          create: {
            categoryName: categoryName,
          },
        },
      },
      cities: {
        connectOrCreate: {
          where: {
            cityName: cities,
          },
          create: {
            cityName: cities,
          },
        },
      },
    },
  }),
    res.status(201).json({ title });
  // console.log(image);
};


import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import path from 'path';
import fs from 'fs';

export const getEvents = async (req: any, res: any) => {
  try {
    const response = await prisma.event.findMany();
    res.status(200).json(response);
  } catch (err: any) {
    res.status(500).json({ msg: err.message });
  }
};

export const getEventById = async (req: any, res: any) => {
  try {
    const response = await prisma.event.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (err: any) {
    res.status(404).json({ msg: err.message });
  }
};

export const createEvent = async (req: any, res: any) => {
  if (req.files === null)
    return res.status(400).json({ msg: 'No File Uploaded' });
  const {
    title,
    description,
    category,
    location,
    startDate,
    endDate,
    price,
    linkUrl,
    isFree,
    createdAt,
    updatedAt,
  } = req.body;

  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get('host')}/images/${fileName}`;
  const allowedType = ['.png', '.jpg', '.jpeg'];

  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: 'Invalid Images' });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: 'Image must be less than 5 MB' });

  file.mv(`./src/public/images/${fileName}`, async (err: any) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      const event = await prisma.event.create({
        data: {
          title: title,
          category: category,
          description: description,
          imageUrl: imageUrl,
          location: location,
          cities: cities,
          isFree: isFree,
          startDate: startDate,
          endDate: endDate,
          price: price,
          totalSeat: totalSeat,
          imageUrl: fileName,
        },
      });
      res.status(201).json(event);
    } catch (err: any) {
      console.log(err.message);
    }
  });
};

// export const updateEvent = (req, res) => {};
// export const deleteEvent = (req, res) => {};

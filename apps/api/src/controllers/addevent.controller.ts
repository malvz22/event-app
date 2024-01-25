import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

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
  const { title, description } = req.body;
  try {
    const event = await prisma.event.create({
      data: {
        title: title,
        description: description,
      },
    });
    res.status(201).json(event);
  } catch (err: any) {
    res.status(400).json({ msg: err.message });
  }
};
// export const updateEvent = (req, res) => {};
// export const deleteEvent = (req, res) => {};

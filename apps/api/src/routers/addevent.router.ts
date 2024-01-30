import express from 'express';
import {
  getEvents,
  // getEventById,
  createEvent,
  // updateEvent,
  // deleteEvent,
} from '../controllers/addevent.controller';

import multer from 'multer';
import { uploader } from '../middleware/uploader';
// import { addNewImage } from '../controllers/upload.controller';

const router = express.Router();

router.get('/event', getEvents);
router.get('/event/detail', getEvents);
// router.get('/events/:id', getEventById);
router.post('/event', createEvent);
// router.post('/upload', uploader('IMG', '/image').single('image'), addNewImage);
export default router;

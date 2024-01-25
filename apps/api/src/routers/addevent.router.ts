import express from 'express';
import {
  getEvents,
  getEventById,
  createEvent,
  // updateEvent,
  // deleteEvent,
} from '../controllers/addevent.controller';

const router = express.Router();

router.get('/event', getEvents);
router.get('/events/:id', getEventById);
router.post('/event', createEvent);
// router.patch('/event', updateEvent);
// router.delete('/event', deleteEvent);

export default router;

import { SampleController } from '@/controllers/sample.controller';
import { Router } from 'express';
import multer from 'multer';
import { uploader } from '../middleware/uploader';

export class SampleRouter {
  private router: Router;
  private sampleController: SampleController;

  constructor() {
    this.sampleController = new SampleController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.sampleController.getSampleData);
    this.router.get('/:id', this.sampleController.getSampleDataById);
    this.router.post('/', this.sampleController.createSampleData);
    this.router.post(
      '/uploaded',
      uploader('IMG', '/image').single('gambar'),
      this.sampleController.addNewImage,
    );
  }

  getRouter(): Router {
    return this.router;
  }
}

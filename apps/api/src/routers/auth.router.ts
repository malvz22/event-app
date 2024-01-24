import { AuthController } from '@/controllers/auth.controller';
import { Router } from 'express';
import { registerValidation } from '../../middleware/validator';

export class AuthRouter {
  private router: Router;
  private authController: AuthController;

  constructor() {
    this.authController = new AuthController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      '/register',
      registerValidation,
      this.authController.registerUser,
    );
    this.router.post('/login', this.authController.loginUser);
  }

  getRouter(): Router {
    return this.router;
  }
}

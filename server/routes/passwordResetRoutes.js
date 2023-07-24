import { Express } from 'express';
import {
  forgotPassword,
  resetPassword,
} from '../controllers/passwordResetController.js';
const router = express.Router();

router.post('/', forgotPassword);

router.post('/:userId/:resetToken', resetPassword);

export default router;

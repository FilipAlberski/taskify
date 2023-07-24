import express from 'express';
import {
  forgotPassword,
  resetPassword,
} from '../controllers/passwordResetController.js';
const router = express.Router();

router.post('/', forgotPassword);

router.post('/:userId/:token', resetPassword);

export default router;

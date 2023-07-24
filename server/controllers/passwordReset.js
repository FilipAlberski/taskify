import { User } from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
import sendEmail from '../utils/sendEmail.js';
import crypto from 'crypto';
import { Token } from '../models/tokenModel.js';
import Joi from 'joi';

const forgotPassword = asyncHandler(async (req, res) => {});

const resetPassword = asyncHandler(async (req, res) => {});

export { forgotPassword, resetPassword };

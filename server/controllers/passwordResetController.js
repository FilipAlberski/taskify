import { User } from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
import sendEmail from '../utils/sendEmail.js';
import crypto from 'crypto';
import { Token } from '../models/tokenModel.js';
import Joi from 'joi';

const forgotPassword = asyncHandler(async (req, res) => {
  try {
    const schema = Joi.object({
      email: Joi.string().email().required(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      res.status(400);
      throw new Error(error.details[0].message);
    }

    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      res.status(404);
      throw new Error('User not found');
    }

    let token = await Token.findOne({ userId: user._id });

    if (!token) {
      token = await Token.create({
        userId: user._id,
        token: crypto.randomBytes(16).toString('hex'),
      });
    }

    const resetPasswordLink = `${process.env.CLIENT_BASE_URL}/reset-password/${user._id}/${token.token}`;

    const message = `
        <h1>You have requested a password reset</h1>
        <p>Please go to this link to reset your password</p>
        <a href=${resetPasswordLink} clicktracking=off>${resetPasswordLink}</a>
        `;
    try {
      sendEmail(user.email, 'Password reset request', message);
      res.status(200).json({ success: true, data: 'Email sent' });
    } catch (error) {
      res.status(500);
      throw new Error('Email could not be sent');
    }
  } catch (error) {
    res.status(401);
    throw new Error('Problem with forgot password');
  }
});

const resetPassword = asyncHandler(async (req, res) => {
  try {
    const schema = Joi.object({
      password: Joi.string().min(6).required(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      res.status(400);
      throw new Error(error.details[0].message);
    }

    const user = await User.findById(req.params.userId);

    if (!user) {
      res.status(404);
      throw new Error('invalid Link or expired');
    }

    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });

    if (!token) {
      res.status(404);
      throw new Error('invalid Link or expired');
    }

    user.password = req.body.password;
    await user.save();

    await token.delete();

    res
      .status(200)
      .json({ success: true, data: 'Password reset successful' });
  } catch (error) {
    res.status(401);
    throw new Error('Problem with reset password');
  }
});

export { forgotPassword, resetPassword };

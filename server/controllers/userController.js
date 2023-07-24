import asyncHandler from 'express-async-handler';
import { User } from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';
import sendEmail from '../utils/sendEmail.js';
import Joi from 'joi';
import { Token } from '../models/tokenModel.js';

const registerUser = asyncHandler(async (req, res) => {
  const { firstName, email, password, lastName } = req.body;

  // check if email exists in db
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(404);
    throw new Error('User already exists');
  }

  // create new user document in db
  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    lastName,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // check if user email exists in db
  const user = await User.findOne({ email });

  // return user obj if their password matches
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      email: user.email,
      userToken: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

const getUserProfile = asyncHandler(async (req, res) => {
  // req.user was set in authMiddleware.js
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      id: user._id,
      firstName: user.firstName,
      email: user.email,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

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
    let Token = await Token.findOne({ userId: user._id });

    if (!Token) {
      token = await new Token({
        userId: user._id,
        token: crypto.randomBytes(16).toString('hex'),
      }).save();
    }

    const link = `${process.env.BASE_URL}/reset-password/${user._id}/`;

    await sendEmail({
      email: user.email,
      subject: 'Password Reset Request',
      message: `Please click on the following link ${link} to reset your password. \n\n If you did not request this, please ignore this email and your password will remain unchanged.`,
    });

    res.json({
      message: 'A reset email has been sent to your email address.',
    });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

const resetPassword = asyncHandler(async (req, res) => {});

export {
  registerUser,
  loginUser,
  getUserProfile,
  forgotPassword,
  resetPassword,
};

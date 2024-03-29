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

const getCurrentUser = asyncHandler(async (req, res) => {
  const user = req.user; // Assuming req.user is set by the protect middleware

  if (user) {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error('User not found');
  }
});

export { registerUser, loginUser, getCurrentUser };

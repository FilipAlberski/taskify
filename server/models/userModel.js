import bcrypt from 'bcryptjs';
import { mongoose } from 'mongoose';
import jwt from 'jsonwebtoken';

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    resetPasswordToken: {
      type: String,
      required: false,
    },
    resetPasswordExpire: {
      type: Date,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// hash user's password with salt before saving document to db
userSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.getResetPasswordToken = async function () {
  try {
    const resetToken = await jwt.sign(
      { id: this._id.toString() },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h',
      }
    );
    return resetToken;
  } catch (error) {
    throw new Error('Failed to generate reset token');
  }
};

// extend matchPassword function unto userSchema
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;
